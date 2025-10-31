import { Users, GraduationCap, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from '@/components/ui/breadcrumb';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import AttendanceChart from '@/components/dashboard/AttendanceChart';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-blue-600 font-semibold">Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Dashboard</h1>
        <p className="text-slate-600 mt-2">Welcome back! Here's what's happening at Lincoln High School today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Students"
          value="2,847"
          change="+12%"
          trend="up"
          icon={Users}
        />
        <StatsCard
          title="Active Teachers"
          value="142"
          change="+3%"
          trend="up"
          icon={GraduationCap}
        />
        <StatsCard
          title="Classes Today"
          value="38"
          change="0%"
          trend="neutral"
          icon={Calendar}
        />
        <StatsCard
          title="Attendance Rate"
          value="94.2%"
          change="+2.1%"
          trend="up"
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 border-slate-100 hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-transparent border-b border-slate-100">
            <CardTitle className="text-slate-900">Attendance Overview</CardTitle>
            <CardDescription>Weekly attendance trends across all classes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <AttendanceChart />
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 border-slate-100 hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-transparent border-b border-slate-100">
            <CardTitle className="text-slate-900">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your school</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
