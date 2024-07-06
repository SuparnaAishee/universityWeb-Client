import StudentDashboard from "../pages/student/studentDashboard";
import TakenCourses from "../pages/student/takenCourses";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Taken Course",
    path: "Taken-course",
    element: <TakenCourses />,
  },
];
