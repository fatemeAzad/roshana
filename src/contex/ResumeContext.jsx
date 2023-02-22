import { createContext } from "react";

export const ResumeContext = createContext({
  resume: {},
  resumes: [],
  setResumes: () => {},
  setResume: () => {},
});
