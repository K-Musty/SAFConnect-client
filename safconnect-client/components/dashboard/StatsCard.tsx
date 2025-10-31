import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
}

export default function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  const trendColors = {
    up: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    down: 'text-red-600 bg-red-50 border-red-200',
    neutral: 'text-slate-600 bg-slate-50 border-slate-200',
  };

  const iconBgColors = {
    up: 'bg-gradient-to-br from-emerald-100 to-emerald-50',
    down: 'bg-gradient-to-br from-red-100 to-red-50',
    neutral: 'bg-gradient-to-br from-blue-100 to-blue-50',
  };

  const iconColors = {
    up: 'text-emerald-600',
    down: 'text-red-600',
    neutral: 'text-blue-600',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-slate-100 bg-white">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
            <div className={`inline-flex items-center gap-1 mt-3 px-3 py-1.5 rounded-full text-xs font-semibold border ${trendColors[trend]}`}>
              <TrendIcon className="h-3.5 w-3.5" />
              {change}
            </div>
          </div>
          <div className={`h-14 w-14 ${iconBgColors[trend]} rounded-xl flex items-center justify-center shadow-sm`}>
            <Icon className={`h-7 w-7 ${iconColors[trend]}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
