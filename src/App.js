import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import {
  createStudent,
  getAllResumes,
  getAllStudents,
  getAllTeachers,
} from "./services/contactServices";
import { ResumeContext } from "./contex/ResumeContext";
import { StudentContext } from "./contex/StudentContext";
import { TeacherContext } from "./contex/TeacherContext";
import { resumesItem } from "./helpers/resume";

function App() {
  const [teacher, setTeacher] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });
  const [teachers, setTeachers] = useState([]);
  const [student, setStudent] = useState({
    fulname: "",
    studentid: "",
    password: "",
    mobile: "",
    email: "",
    maghta: "",
  });
  const [resume, setResume] = useState(resumesItem);
  const [students, setStudents] = useState([]);
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: studentsData } = await getAllStudents();
        const { data: teachersData } = await getAllTeachers();
        const { data: resumesData } = await getAllResumes();

        setStudents(studentsData);
        setTeachers(teachersData);
        setResumes(resumesData);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const createStudentForm = async (values) => {
    try {
      const { status, data } = await createStudent(values);
      console.log("here", status, data);
      if (status === 201) {
        const allStudents = [...students, data];

        setStudents(allStudents);
        navigate("/");
        console.log(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <TeacherContext.Provider
        value={{
          teacher,
          teachers,
          setTeacher,
          setTeachers,
        }}
      >
        <StudentContext.Provider
          value={{ student, students, setStudent, setStudents }}
        >
          <ResumeContext.Provider
            value={{ resume, setResume, resumes, setResumes }}
          ></ResumeContext.Provider>
        </StudentContext.Provider>
      </TeacherContext.Provider>
    </>
  );
}

export default App;
