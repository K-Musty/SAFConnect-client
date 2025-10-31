import { Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import AttendanceCalendar from '@/components/attendance/AttendanceCalendar';
import AttendanceStats from '@/components/attendance/AttendanceStats';

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-600 font-semibold">Attendance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Attendance</h1>
            <p className="text-slate-600 mt-2">Track and manage student attendance • Lincoln High School</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
              <Calendar className="h-4 w-4 mr-2" />
              Today
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <AttendanceStats />

      <Card className="border-slate-100 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-transparent border-b border-slate-100">
          <CardTitle className="text-slate-900">Attendance Calendar</CardTitle>
          <CardDescription>View and mark attendance for all classes</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <AttendanceCalendar />
        </CardContent>
      </Card>
    </div>
  );
}
