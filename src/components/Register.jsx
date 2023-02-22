import { Formik } from "formik";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createStudent } from "../services/contactServices";
import { contactSchema } from "../validation/contactValidation";
import {Navbar} from "./Navbar";
import { StudentContext } from './../contex/StudentContext';

export const Register = () => {
  const { students, setStudents } = useContext(StudentContext);
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const newStudent = await createStudent({
      fullname: values.fullname,
      studentid: values.studentid,
      password: values.password,
      mobile: values.mobile,
      email: values.email,
      maghta: values.maghta,
    });
    const allStudents = [...students, newStudent.data];
    setStudents(allStudents);
    navigate("/");
    toast.success("ثبت نام با موفقیت انجام شد");
  };
  return (
    <>
      <>
        <div className="landing-layer">
          <ToastContainer rtl={true} theme="colored" />
          <Navbar />
        </div>
        <section className="p-3">
          <img
            src={require("../assets/download(1).png")}
            style={{
              position: "absolute",
              width: "800px",
              height: "600px",
              zIndex: "-1",
              top: "130px",
              left: "100px",
            }}
          />
          <div className="container register d-block">
            <div className="row">
              <div className="col">
                <p
                  className="h4 fw-bold "
                  style={{
                    color: "rgb(112, 131, 245)",
                    fontSize: "40px",
                    paddingBottom: "20px",
                    marginTop: "150px",
                  }}
                >
                  ثبت نام{" "}
                </p>
              </div>
            </div>

            <div>
              <div className="col-md-4">
                <Formik
                  initialValues={{
                    fullname: "",
                    password: "",
                    studentid: "",
                    mobile: "",
                    email: "",
                  }}
                  validationSchema={contactSchema}
                  onSubmit={handleSubmit}
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit} className="form">
                      <div style={{ display: "flex" }}>
                        <lable
                          for="fullname"
                          className="col-sm-2 col-form-label"
                        >
                          نام و نام خانوادگی
                        </lable>
                        <div className="mb-2 form-input ">
                          <input
                            type="text"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps("fullname")}
                            className="form-control form-control-reg reg-width"
                            placeholder="نام و نام خانوادگی"
                          />
                          {/* {formik.touched.fullname && formik.errors.fullname ? (
                            <p className="text-danger">
                              {formik.errors.fullname}
                            </p>
                          ) : null} */}
                          {formik.errors.fullname && (
                            <p className="text-danger">
                              {formik.errors.fullname}
                            </p>
                          )}
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <lable
                          for="studentid"
                          className="col-sm-2 col-form-label"
                        >
                          شماره دانشجویی
                        </lable>
                        <div className="mb-2 form-input">
                          <input
                            type="number"
                            {...formik.getFieldProps("studentid")}
                            className="form-control form-control-reg reg-width"
                            onChange={formik.handleChange}
                            placeholder="شماره دانشجویی "
                          />
                          {formik.errors.studentid && (
                            <p className="text-danger">
                              {formik.errors.studentid}
                            </p>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <lable
                          for="password"
                          className="col-sm-2 col-form-label"
                        >
                          رمز عبور
                        </lable>
                        <div className="mb-2 form-input ">
                          <input
                            type="text"
                            {...formik.getFieldProps("password")}
                            className="form-control form-control-reg reg-width"
                            placeholder="رمز عبور"
                            onChange={formik.handleChange}
                          />
                          {formik.errors.password && (
                            <p className="text-danger">
                              {formik.errors.password}
                            </p>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <lable
                          for="studentid"
                          className="col-sm-2 col-form-label"
                        >
                          تلفن همراه
                        </lable>
                        <div className="mb-2 form-input">
                          <input
                            type="number"
                            onChange={formik.handleChange}
                            {...formik.getFieldProps("mobile")}
                            className="form-control form-control-reg reg-width" 
                            placeholder="تلفن همراه  "
                          />
                          {formik.errors.mobile && (
                            <p className="text-danger">
                              {formik.errors.mobile}
                            </p>
                          )}
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <lable
                          for="studentid"
                          className="col-sm-2 col-form-label"
                        >
                          {" "}
                          ایمیل
                        </lable>
                        <div className="mb-2">
                          <input
                            type="email"
                            {...formik.getFieldProps("email")}
                            className="form-control form-control-reg reg-width"
                            onChange={formik.handleChange}
                            placeholder="آدرس ایمیل"
                          />
                          {formik.errors.email && (
                            <p className="text-danger">{formik.errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <lable for="maghta" className="col-sm-2 col-form-label">
                          مقطع
                        </lable>
                        <div className="mb-2 form-input">
                          <select
                            {...formik.getFieldProps("maghta")}
                            className="form-control form-control-reg reg-width"
                          >
                            <option value={1}>ترم اول</option>
                            <option value={2}> ترم دوم</option>
                            <option value={3}> ترم سوم</option>
                            <option value={4}> ترم چهارم</option>
                            <option value={5}> ترم پنجم</option>
                            <option value={6}> ترم ششم</option>
                            <option value={7}> ترم هفتم</option>
                            <option value={8}> ترم هشتم</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-2 form-input">
                        <div style={{ display: "flex" }}>
                          <lable for="jens" className="col-sm-2 col-form-label">
                            جنسیت
                          </lable>
                          <div class="form-check">
                            <input
                              class="form-check-input "
                              type="radio"
                              defaultChecked
                              name="gridRadios"
                              id="gridRadios1"
                              value="female"
                            />
                            <label class="form-check-label" for="gridRadios1">
                              خانم{" "}
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="male"
                            />
                            <label class="form-check-label" for="gridRadios2">
                              آقا
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mx-2 sub-reg-form">
                        <input
                          type="submit"
                          className="btn  sub-reg-form"
                          style={{ backgroundColor: "#50fa7b" }}
                          value=" ثبت نام"
                        />
                        <NavLink
                          to={"/"}
                          className="btn  sub-reg-form"
                          style={{ backgroundColor: "#ff5555" }}
                          value=" انصراف"
                        >
                          انصراف
                        </NavLink>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};


