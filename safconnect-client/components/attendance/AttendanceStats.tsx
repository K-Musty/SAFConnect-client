import { CheckCircle, XCircle, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Present Today', value: '2,684', icon: CheckCircle, color: 'text-green-600 bg-green-50' },
  { label: 'Absent Today', value: '98', icon: XCircle, color: 'text-red-600 bg-red-50' },
  { label: 'Late Arrivals', value: '65', icon: Clock, color: 'text-orange-600 bg-orange-50' },
  { label: 'Total Students', value: '2,847', icon: Users, color: 'text-blue-600 bg-blue-50' },
];

export default function AttendanceStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
              </div>
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
