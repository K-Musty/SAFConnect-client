'use client';

export default function AttendanceChart() {
  const data = [
    { day: 'Mon', rate: 92 },
    { day: 'Tue', rate: 95 },
    { day: 'Wed', rate: 89 },
    { day: 'Thu', rate: 96 },
    { day: 'Fri', rate: 94 },
  ];

  const maxRate = 100;

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4 h-64">
        {data.map((item) => (
          <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-slate-100 rounded-t-lg relative" style={{ height: '100%' }}>
              <div
                className="absolute bottom-0 w-full bg-blue-600 rounded-t-lg transition-all hover:bg-blue-700"
                style={{ height: `${(item.rate / maxRate) * 100}%` }}
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-slate-900">{item.rate}%</p>
              <p className="text-xs text-slate-500">{item.day}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-blue-600 rounded" />
          <span className="text-slate-600">Attendance Rate</span>
        </div>
        <span className="text-slate-900 font-medium">Weekly Average: 93.2%</span>
      </div>
    </div>
  );
}
