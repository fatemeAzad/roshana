import { createContext } from "react";

export const TeacherContext = createContext({
  teacher: {},
  setTeachers: () => {},
  setTeacher: () => {},
  teachers: [],
});
