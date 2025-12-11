import { useState } from 'react';

import { useDebounce } from '@shared/hooks';

export function useServiceSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearch,
  };
}
