import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { FavoriteListResponse } from '@shared/types';

import { fetchFavorites, removeFavorite } from '../api';

export function useFavorites() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
    retry: (failureCount, error) => {
      if (failureCount < 3) {
        console.warn(`[Favorites] 재시도 ${failureCount}/3...`, error);
        return true;
      }
      console.warn(`[Favorites] 최대 재시도 횟수 초과`, error);
      return false;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });

  const deleteMutation = useMutation({
    mutationFn: removeFavorite,
    retry: (failureCount, error) => {
      if (failureCount < 3) {
        console.warn(`[Favorites Delete] 재시도 ${failureCount}/3...`, error);
        return true;
      }
      console.warn(`[Favorites Delete] 최대 재시도 횟수 초과`, error);
      return false;
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['favorites'] });

      const previousData = queryClient.getQueryData<FavoriteListResponse>([
        'favorites',
      ]);

      queryClient.setQueryData<FavoriteListResponse>(['favorites'], (old) => {
        if (!old) return old;
        return {
          ...old,
          items: old.items.filter((item) => item.id !== id),
        };
      });

      return { previousData };
    },
    onError: (_err, _id, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['favorites'], context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  return {
    favorites: query.data?.items ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
    deleteFavorite: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
  };
}
