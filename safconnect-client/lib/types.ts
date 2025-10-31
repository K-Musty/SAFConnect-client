export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  grade: string;
  dateOfBirth: string;
  enrollmentDate: string;
  status: 'active' | 'inactive' | 'graduated';
  attendance: number;
  guardianName?: string;
  guardianPhone?: string;
}

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  phone?: string;
  hireDate: string;
  status: 'active' | 'on-leave' | 'inactive';
  classes: number[];
}

export interface Class {
  id: number;
  name: string;
  subject: string;
  grade: string;
  teacherId: number;
  studentIds: number[];
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  room?: string;
  capacity: number;
  status: 'active' | 'paused' | 'completed';
}

export interface Attendance {
  id: number;
  studentId: number;
  classId: number;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
  markedBy: number;
  markedAt: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
  lastLogin?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
