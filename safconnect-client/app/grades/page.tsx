import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Download, Filter, Plus, Search } from 'lucide-react'

export default function GradesPage() {
  const terms = ['Fall 2024', 'Spring 2025']
  const classes = ['Mathematics', 'Science', 'History', 'English', 'Computer Science']

  const rows = [
    { student: 'Sarah Johnson', id: 'STU-001', assignment: 'Algebra Quiz 1', cls: 'Mathematics', score: 92, status: 'Graded', date: '2024-09-12' },
    { student: 'Michael Chen', id: 'STU-002', assignment: 'Lab Report: Photosynthesis', cls: 'Science', score: 85, status: 'Graded', date: '2024-09-15' },
    { student: 'Aisha Khan', id: 'STU-003', assignment: 'Essay: Civil War', cls: 'History', score: 78, status: 'Needs Review', date: '2024-09-18' },
    { student: 'Diego Martinez', id: 'STU-004', assignment: 'Reading Comprehension', cls: 'English', score: 88, status: 'Graded', date: '2024-09-19' },
    { student: 'Emma Wilson', id: 'STU-005', assignment: 'Project: Sorting Algorithms', cls: 'Computer Science', score: 94, status: 'Graded', date: '2024-09-20' },
  ] as const

  const statusBadge = (status: string) => {
    switch (status) {
      case 'Graded':
        return <Badge className="bg-emerald-500/10 text-emerald-700 border border-emerald-200 font-semibold">Graded</Badge>
      case 'Needs Review':
        return <Badge className="bg-amber-500/10 text-amber-700 border border-amber-200 font-semibold">Needs Review</Badge>
      default:
        return <Badge className="bg-slate-500/10 text-slate-700 border border-slate-200">Pending</Badge>
    }
  }

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
              <BreadcrumbPage className="text-blue-600 font-semibold">Grades</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Grades</h1>
            <p className="text-slate-600 mt-2">Manage assignments and scores • Lincoln High School</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50"><Download className="h-4 w-4 mr-2"/>Export</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg"><Plus className="h-4 w-4 mr-2"/>New Assignment</Button>
          </div>
        </div>
      </div>

      <Card className="border-slate-100">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-transparent border-b border-slate-100">
          <CardTitle className="text-base text-slate-900">Filters & Search</CardTitle>
        </CardHeader>
        <CardContent className="pt-4 grid gap-3 grid-cols-1 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2 flex items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"/>
              <Input placeholder="Search students or assignments" className="pl-10 bg-slate-50 border-slate-200 rounded-lg"/>
            </div>
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50 whitespace-nowrap"><Filter className="h-4 w-4 mr-2"/>Filters</Button>
          </div>
          <Select>
            <SelectTrigger aria-label="Select term" className="bg-slate-50 border-slate-200"><SelectValue placeholder="Term"/></SelectTrigger>
            <SelectContent>
              {terms.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger aria-label="Select class" className="bg-slate-50 border-slate-200"><SelectValue placeholder="Class"/></SelectTrigger>
            <SelectContent>
              {classes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="border-slate-100 hover:shadow-lg transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-transparent border-b border-slate-100">
          <CardTitle className="text-slate-900">Assignments & Scores</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-slate-200">
                  <TableHead className="text-slate-700 font-semibold">Student</TableHead>
                  <TableHead className="min-w-[160px] text-slate-700 font-semibold">Assignment</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Class</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Date</TableHead>
                  <TableHead className="text-right text-slate-700 font-semibold">Score</TableHead>
                  <TableHead className="text-slate-700 font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => (
                  <TableRow key={`${r.id}-${r.assignment}`} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">{r.student}</span>
                        <span className="text-xs text-slate-500">{r.id}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[280px] truncate text-slate-700">{r.assignment}</TableCell>
                    <TableCell className="text-slate-700">{r.cls}</TableCell>
                    <TableCell className="text-slate-700">{r.date}</TableCell>
                    <TableCell className="text-right font-bold text-blue-600">{r.score}%</TableCell>
                    <TableCell>{statusBadge(r.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between mt-6 text-sm text-slate-600">
            <div className="font-medium">Showing 1–5 of 42</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">Previous</Button>
              <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
