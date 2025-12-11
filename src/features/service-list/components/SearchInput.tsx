import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import * as styles from './SearchInput.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Search size={18} className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={t('services.searchPlaceholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
