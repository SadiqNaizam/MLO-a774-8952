import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FooterStatItemProps {
  title: string;
  percentage: string;
  period: string;
  isPositive: boolean;
  className?: string;
}

const FooterStatItem: React.FC<FooterStatItemProps> = ({
  title,
  percentage,
  period,
  isPositive,
  className,
}) => {
  return (
    <div className={cn('text-left', className)}>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-primaryText">{title}</p>
        <Badge
          variant="outline"
          className={cn(
            'text-xs font-semibold',
            isPositive
              ? 'border-success/50 bg-success/10 text-success'
              : 'border-error/50 bg-error/10 text-error'
          )}
        >
          {percentage}
        </Badge>
      </div>
      <p className="text-xs text-secondaryText">{period}</p>
    </div>
  );
};

interface FooterStatsProps {
  className?: string;
}

const FooterStats: React.FC<FooterStatsProps> = ({ className }) => {
  const totalOrdersData = {
    title: 'Total orders' as const,
    percentage: '-6.8%',
    period: 'Last 7 days' as const,
    isPositive: false,
  };

  const newCustomersData = {
    title: 'New customers' as const,
    percentage: '+26.5%',
    period: 'Last 7 days' as const,
    isPositive: true,
  };

  const mainValue = '16,247';

  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row md:gap-0">
        <FooterStatItem
          title={totalOrdersData.title}
          percentage={totalOrdersData.percentage}
          period={totalOrdersData.period}
          isPositive={totalOrdersData.isPositive}
          className="w-full md:w-1/3"
        />
        <div className="my-4 h-12 w-px bg-border md:my-0 md:mx-8" />
        <p className="text-center text-4xl font-bold text-primaryText md:w-1/3">
          {mainValue}
        </p>
        <div className="my-4 h-12 w-px bg-border md:my-0 md:mx-8" />
        <FooterStatItem
          title={newCustomersData.title}
          percentage={newCustomersData.percentage}
          period={newCustomersData.period}
          isPositive={newCustomersData.isPositive}
          className="w-full text-left md:w-1/3 md:text-right"
        />
      </CardContent>
    </Card>
  );
};

export default FooterStats;
