import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={cn('py-6', className)}>
      <h1 className="text-3xl font-bold text-primaryText">Ecommerce Dashboard</h1>
      <p className="mt-1 text-base text-secondaryText">
        Here's what's going on at your business right now
      </p>
    </div>
  );
};

export default PageHeader;
