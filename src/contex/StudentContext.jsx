import { createContext } from "react";

export const StudentContext = createContext({
  student: {},
  students: [],
  setStudents: () => {},
  setStudent: () => {},
});
