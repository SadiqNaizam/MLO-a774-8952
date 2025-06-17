import React from 'react';
import { cn } from '@/lib/utils';
import { Star, PauseCircle, XCircle } from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColorClass: string;
  iconBgClass: string;
}

const statsData: StatCardData[] = [
  {
    id: 'new-orders',
    title: '57 new orders',
    description: 'Awaiting processing',
    icon: Star,
    iconColorClass: 'text-success',
    iconBgClass: 'bg-success/10', // Using TailwindCSS v3.1+ opacity shorthand
  },
  {
    id: 'orders-on-hold',
    title: '5 orders',
    description: 'On hold',
    icon: PauseCircle,
    iconColorClass: 'text-accentSecondary',
    iconBgClass: 'bg-accentSecondary/10',
  },
  {
    id: 'products-out-of-stock',
    title: '15 products',
    description: 'Out of stock',
    icon: XCircle,
    iconColorClass: 'text-error',
    iconBgClass: 'bg-error/10',
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="flex items-center space-x-4 rounded-lg border border-border bg-card p-4 shadow-sm"
        >
          <div className={cn('flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg', stat.iconBgClass)}>
            <stat.icon className={cn('h-5 w-5', stat.iconColorClass)} />
          </div>
          <div>
            <p className="text-lg font-semibold text-primaryText">{stat.title}</p>
            <p className="text-sm text-secondaryText">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCardGrid;
