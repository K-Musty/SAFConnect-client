'use client';

import { Badge } from '@/components/ui/badge';

const classes = [
  { id: 1, name: 'Mathematics 10A', time: '08:00 AM', students: 32, present: 30, absent: 2 },
  { id: 2, name: 'Science 9B', time: '09:30 AM', students: 28, present: 27, absent: 1 },
  { id: 3, name: 'English 11C', time: '11:00 AM', students: 35, present: 33, absent: 2 },
  { id: 4, name: 'History 10B', time: '01:00 PM', students: 30, present: 29, absent: 1 },
  { id: 5, name: 'Physics 12A', time: '02:30 PM', students: 25, present: 24, absent: 1 },
];

export default function AttendanceCalendar() {
  return (
    <div className="space-y-4">
      {classes.map((classItem) => {
        const attendanceRate = ((classItem.present / classItem.students) * 100).toFixed(1);
        return (
          <div
            key={classItem.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex-1">
              <h4 className="font-medium text-slate-900">{classItem.name}</h4>
              <p className="text-sm text-slate-500 mt-1">{classItem.time}</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-slate-600">Present</p>
                <p className="text-lg font-bold text-green-600">{classItem.present}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">Absent</p>
                <p className="text-lg font-bold text-red-600">{classItem.absent}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600">Rate</p>
                <Badge variant={Number(attendanceRate) >= 90 ? 'default' : 'secondary'}>
                  {attendanceRate}%
                </Badge>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
