import { UserPlus, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'student',
    message: 'New student enrolled: Emily Chen',
    time: '5 minutes ago',
    icon: UserPlus,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    id: 2,
    type: 'attendance',
    message: 'Attendance marked for Class 10A',
    time: '12 minutes ago',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-50',
  },
  {
    id: 3,
    type: 'alert',
    message: 'Low attendance alert: Class 9B',
    time: '1 hour ago',
    icon: AlertCircle,
    color: 'text-orange-600 bg-orange-50',
  },
  {
    id: 4,
    type: 'report',
    message: 'Monthly report generated',
    time: '2 hours ago',
    icon: FileText,
    color: 'text-slate-600 bg-slate-50',
  },
];

export default function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <div className={`p-2 rounded-lg ${activity.color}`}>
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900">{activity.message}</p>
            <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
