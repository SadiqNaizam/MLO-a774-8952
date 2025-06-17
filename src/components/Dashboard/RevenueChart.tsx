import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const revenueData = [
  { name: '01 May', currentPeriod: 1800, previousPeriod: 2200 }, 
  { name: '03 May', currentPeriod: 2100, previousPeriod: 1900 }, 
  { name: '06 May', currentPeriod: 2500, previousPeriod: 2400 }, 
  { name: '09 May', currentPeriod: 2300, previousPeriod: 2700 }, 
  { name: '12 May', currentPeriod: 2800, previousPeriod: 2500 }, 
  { name: '15 May', currentPeriod: 3800, previousPeriod: 3000 }, 
  { name: '18 May', currentPeriod: 4500, previousPeriod: 3200 }, 
  { name: '21 May', currentPeriod: 4800, previousPeriod: 3500 }, 
  { name: '24 May', currentPeriod: 3900, previousPeriod: 4200 }, 
  { name: '27 May', currentPeriod: 3500, previousPeriod: 3800 }, 
  { name: '30 May', currentPeriod: 3800, previousPeriod: 3000 }, 
];

interface RevenueChartProps {
  className?: string;
}

const RevenueChart: React.FC<RevenueChartProps> = ({ className }) => {
  const [selectedDateRange, setSelectedDateRange] = React.useState<string>('Mar 1 - 31, 2022');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <CardTitle className="text-xl font-semibold text-primaryText">Total sells</CardTitle>
            <CardDescription className="text-secondaryText">
              Payment received across all channels
            </CardDescription>
          </div>
          <Button variant="outline" className="w-full whitespace-nowrap sm:w-auto">
            {selectedDateRange}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer>
            <LineChart data={revenueData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value, index) => {
                  // Show fewer ticks to prevent clutter, e.g., 01 May, 15 May, 30 May
                  if (value === '01 May' || value === '15 May' || value === '30 May') {
                    return value;
                  }
                  return '';
                }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `$${value / 1000}k`} 
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Line
                type="monotone"
                dataKey="currentPeriod"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4, fill: 'hsl(var(--primary))', strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                name="Current Period"
              />
              <Line
                type="monotone"
                dataKey="previousPeriod"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4, fill: 'hsl(var(--primary))', stroke: 'hsl(var(--primary))', strokeWidth: 0 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                name="Previous Period"
                opacity={0.5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
