# SafConnect Client - School Management System

A professional, modern school management system built with Next.js 14, TypeScript, and Tailwind CSS. SafConnect provides a comprehensive platform for managing students, teachers, attendance, classes, and grades at Lincoln High School.

**Features**: Beautiful responsive UI, real-time notifications, data-dense tables, mobile-optimized design, and enterprise-grade styling.

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Database**: Supabase
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React

## Prerequisites

Before running this project, ensure you have:

- **Node.js**: Version 18.17 or higher (LTS recommended)
- **npm**: Comes with Node.js (or use yarn/pnpm as alternatives)

Check your Node.js version:
```bash
node -v
npm -v
```

## Installation

1. Navigate to the project directory:
```bash
cd project
```

2. Install dependencies:
```bash
npm install
```

This will install all required packages listed in `package.json`.

## Environment Setup

If the application requires environment variables (e.g., API endpoints, Supabase keys), create a `.env.local` file in the project root:

```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
# Add other environment variables as needed
```

Next.js automatically loads variables from `.env.local` at runtime.

## Running the Project

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

To run on a different port:
```bash
PORT=3001 npm run dev
```

Then open: **http://localhost:3001**

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The application will be available at: **http://localhost:3000**

## Available Scripts

- **`npm run dev`** - Start development server with hot-reload
- **`npm run build`** - Create optimized production build
- **`npm start`** - Run production server (requires build first)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run typecheck`** - Run TypeScript type checking

## Project Structure

```
project/
├── app/                    # Next.js App Router pages
│   ├── attendance/        # Attendance management page
│   ├── classes/           # Classes management page
│   ├── dashboard/         # Main dashboard page
│   ├── login/             # Login page
│   ├── students/          # Students management page
│   ├── teachers/          # Teachers management page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── attendance/        # Attendance-related components
│   ├── classes/           # Classes-related components
│   ├── dashboard/         # Dashboard components
│   ├── layouts/           # Layout components
│   ├── students/          # Students-related components
│   ├── teachers/          # Teachers-related components
│   └── ui/                # Radix UI component wrappers
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and types
│   ├── api-client.ts      # API client configuration
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Helper utilities
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── postcss.config.js      # PostCSS configuration
```

## Features

- **Dashboard**: Overview of attendance and recent activity with stats cards and charts
- **Attendance Management**: Track and manage student attendance with calendar view
- **Classes**: Manage classes and schedules with teacher assignments
- **Students**: Student information and management with search and filtering
- **Teachers**: Teacher profiles and management with subject assignments
- **Grades**: Assignment tracking with score management and status indicators
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations and transitions
- **Notifications**: Real-time notification system with dropdown menu
- **User Profile**: Profile dropdown with settings and sign-out options
- **Footer**: Comprehensive footer with quick links and social media

## Testing Routes

After starting the development server (`npm run dev`), test the application using these routes:

### Public Routes
- **Login Page**: http://localhost:3000/login
- **Home Page**: http://localhost:3000/

### Dashboard Routes (Protected)
- **Dashboard**: http://localhost:3000/dashboard
  - Main overview with stats cards, attendance chart, and recent activity
  - Mobile-responsive with collapsible sidebar
  
- **Students**: http://localhost:3000/students
  - Student directory with search, filter, and export functionality
  - Data table with student names, IDs, grades, and contact info
  - Add Student button for new entries
  
- **Teachers**: http://localhost:3000/teachers
  - Teacher directory with search and filtering
  - Staff information with subjects and contact details
  - Add Teacher button for new entries
  
- **Attendance**: http://localhost:3000/attendance
  - Attendance calendar view with status indicators
  - Attendance statistics and trends
  - Export report functionality
  
- **Classes**: http://localhost:3000/classes
  - Class management with grade levels and sections
  - Teacher assignments and schedules
  - Create Class button for new classes
  
- **Grades**: http://localhost:3000/grades
  - Assignment tracking with scores and status
  - Filter by term and class
  - Search students and assignments
  - Export grades functionality

### Mobile Testing
- Use browser DevTools (F12) to test responsive design
- Test on different screen sizes: 320px (mobile), 768px (tablet), 1024px+ (desktop)
- Sidebar collapses to hamburger menu on mobile
- All tables are horizontally scrollable on small screens

### Features to Test
1. **Sidebar Navigation**: Click menu items to navigate between pages
2. **Mobile Menu**: On mobile, click hamburger icon to toggle sidebar
3. **Notifications**: Click bell icon in header to see notifications dropdown
4. **User Profile**: Click avatar in header to see profile dropdown
5. **Search & Filter**: Use search bars on Students, Teachers, Classes, and Grades pages
6. **Responsive Layout**: Resize browser window to see responsive behavior
7. **Breadcrumbs**: Navigate using breadcrumb links at top of each page
8. **Footer**: Scroll to bottom to see footer with links and social media

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
PORT=3001 npm run dev
```

### Module Not Found Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Run type checking to identify issues:
```bash
npm run typecheck
```

### Build Failures
For development, type errors are warnings. For production builds, fix all TypeScript errors or skip type checking:
```bash
NEXT_SKIP_TYPECHECK=1 npm run build
```

## Development Tips

- **Hot Reload**: Changes to files are automatically reflected in the browser
- **Fast Refresh**: React components update without losing state
- **API Routes**: Create API endpoints in `app/api/` directory
- **Database**: Configure Supabase connection in environment variables

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Traditional Hosting**: Build and run `npm start`

## License

This project is private and proprietary.

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
