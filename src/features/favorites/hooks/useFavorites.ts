import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { FavoriteListResponse } from '@shared/types';

import { fetchFavorites, removeFavorite } from '../api';

export function useFavorites() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
  });

  const deleteMutation = useMutation({
    mutationFn: removeFavorite,
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
    deleteFavorite: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
  };
}
