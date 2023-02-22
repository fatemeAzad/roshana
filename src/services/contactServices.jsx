import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getTeacher = (teacherId) => {
  const url = `${SERVER_URL}/teachers/${teacherId}`;
  return axios.get(url);
};

export const getResume = (studentId) => {
  const url = `${SERVER_URL}/resumes/${studentId}`;
  return axios.get(url);
};

export const getStudent = (studentId) => {
  const url = `${SERVER_URL}/students/${studentId}`;
  return axios.get(url);
};

export const getAllTeachers = () => {
  const url = `${SERVER_URL}/teachers`;
  return axios.get(url);
};

export const getAllResumes = () => {
  const url = `${SERVER_URL}/resumes`;
  return axios.get(url);
};

export const getAllStudents = () => {
  const url = `${SERVER_URL}/students`;
  return axios.get(url);
};

export const getResumeByStudentId = (studentId) => {
  const url = `${SERVER_URL}/resumes?studentid=${studentId}`;
  return axios.get(url);
};

export const createTeacher = (teacher) => {
  const url = `${SERVER_URL}/teachers`;
  return axios.post(url, teacher);
};

export const createResume = (resume, studentId) => {
  const url = `${SERVER_URL}/resumes`;
  return axios.post(url, resume);
};

export const createStudent = (student) => {
  const url = `${SERVER_URL}/students`;
  return axios.post(url, student);
};
