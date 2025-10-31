import { MoreHorizontal, Eye, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const classes = [
  { id: 1, name: 'Mathematics 10A', teacher: 'Dr. Sarah Miller', students: 32, schedule: 'Mon, Wed, Fri 08:00 AM', status: 'active' },
  { id: 2, name: 'Science 9B', teacher: 'Prof. James Lee', students: 28, schedule: 'Tue, Thu 09:30 AM', status: 'active' },
  { id: 3, name: 'English 11C', teacher: 'Ms. Rachel Green', students: 35, schedule: 'Mon, Wed, Fri 11:00 AM', status: 'active' },
  { id: 4, name: 'History 10B', teacher: 'Mr. David Park', students: 30, schedule: 'Tue, Thu 01:00 PM', status: 'active' },
  { id: 5, name: 'Physics 12A', teacher: 'Dr. Maria Garcia', students: 25, schedule: 'Mon, Wed, Fri 02:30 PM', status: 'paused' },
];

export default function ClassTable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Class Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Teacher
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-slate-900">{classItem.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-slate-600">{classItem.teacher}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-slate-900">{classItem.students}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{classItem.schedule}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={classItem.status === 'active' ? 'default' : 'secondary'}>
                    {classItem.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
