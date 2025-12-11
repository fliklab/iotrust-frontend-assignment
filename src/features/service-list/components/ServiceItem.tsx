import { ListItem } from '@shared/ui';

import type { Service } from '../types';

interface ServiceItemProps {
  service: Service;
  onClick?: (service: Service) => void;
}

export function ServiceItem({ service, onClick }: ServiceItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(service);
    } else {
      window.open(service.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <ListItem
      iconUrl={service.iconUrl}
      iconAlt={service.name}
      title={service.name}
      subtitle={service.description}
      onClick={handleClick}
    />
  );
}
