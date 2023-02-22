import { Formik } from "formik";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ResumeContext } from "../contex/ResumeContext";
import { resumesItem } from "../helpers/resume";
import {
  createResume,
  getAllStudents,
  getResumeByStudentId,
} from "../services/contactServices";
import {Navbar} from "./Navbar";

export const Resume = () => {
  const { resumes, setResumes } = useContext(ResumeContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllStudents().then((studentsResponse) => {
      const students = studentsResponse.data;

      students.map((student) => {
        const ID = student.studentid;

        getResumeByStudentId(ID).then((resumes) => {
          console.log("here resumes", resumes);
        });
      });
    });
  }, []);

  const handleSubmit = async (values) => {
    const newResume = await createResume({
      resumesItem: values,
    });
    const allResumes = [...resumes, newResume.data];

    setResumes(allResumes);
    navigate("/");
    toast.success(" رزومه با موفقیت ثبت شد");
  };

  return (
    <div>
      <div className="landing-layer">
        <ToastContainer rtl={true} theme="colored" />
        <Navbar />
      </div>
      <div
        style={{
          margin: "auto",
          marginLeft: "300px",
          marginRight: "300px",
          marginTop: "100px",
        }}
      >
        <h2>اطلاعات پایه</h2>
        <Formik initialValues={resumesItem} onSubmit={handleSubmit}>
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="cv-box builder-box " data-fieldset="1">
                <div
                  className="uk-grid-small uk-grid d-flex "
                  uk-grid=""
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <div className="uk-width-1-1 uk-width-1-5@m uk-first-column">
                    <div className="photo-upload ">
                      <div className="container">
                        <div className="button-wrap my-2">
                          <label className="button my-3" htmlFor="upload">
                            <i
                              className="fa fa-user-circle-o mx-3"
                              style={{ color: "#282a36" }}
                            />
                            <p style={{ fontSize: "15px" }}>
                              آپلودعکس{" "}
                              <i
                                className="fa fa-arrow-up"
                                style={{ color: "#50fa7b" }}
                              />
                            </p>{" "}
                          </label>
                          <input
                            id="upload"
                            type="file"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                      <div className="uk-margin-small-top"></div>
                      <div
                        className="file-path-wrapper"
                        style={{ display: "none" }}
                      >
                        <input className="file-path validate" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="uk-width-1-1 uk-width-4-5@m">
                    <div
                      className="uk-grid-small uk-grid form-row"
                      style={{ display: "flex" }}
                      uk-grid=""
                    >
                      <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-3@m uk-first-column m-1">
                        <div className="input-field uk-margin">
                          <label className="uk-form-label" htmlhtmlFor="BI_FN">
                            نام
                          </label>
                          <div className="form-control">
                            <input
                              {...formik.getFieldProps("firstName")}
                              onChange={formik.handleChange}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-2 uk-width-1-3@s uk-width-1-3@m m-1">
                        <div className="input-field uk-margin">
                          <label className="uk-form-label">نام خانوادگی</label>
                          <div className="  form-control">
                            <input
                              {...formik.getFieldProps("lastName")}
                              onChange={formik.handleChange}
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="m-1" style={{ width: "100%" }}>
                        <div>
                          <label> شماره دانشجویی</label>
                          <div className="  form-control">
                            <input
                              type="number"
                              {...formik.getFieldProps("studentid")}
                              onChange={formik.handleChange}
                              placeholder="شماره دانشجویی "
                            />
                            <div
                              className="autoComplete-suggestions"
                              style={{
                                position: "absolute",
                                display: "none",
                                maxHeight: "300px",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="uk-grid-small uk-grid form-row"
                      uk-grid=""
                      style={{ display: "flex" }}
                    >
                      <div className="uk-width-1-3 uk-width-1-6@m uk-first-column m-1">
                        <div className="input-field uk-margin">
                          <label
                            className="uk-form-label active"
                            htmlhtmlFor="BI_Gdr"
                          >
                            جنسیت
                          </label>
                          <div className="  form-control">
                            <select
                              {...formik.getFieldProps("jensiat")}
                              onChange={formik.handleChange}
                            >
                              <option Value=""></option>
                              <option Value="Male">مرد</option>
                              <option Value="Female">زن</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-3 uk-width-1-6@m m-1">
                        <div className="input-field uk-margin">
                          <label
                            className="uk-form-label active"
                            htmlhtmlFor="BI_Mas"
                          >
                            وضعیت تأهل
                          </label>
                          <div className="  form-control">
                            <select
                              {...formik.getFieldProps("marriage")}
                              onChange={formik.handleChange}
                            >
                              <option Value=""></option>
                              <option Value="Single">مجرد</option>
                              <option Value="Married">متأهل</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-3 uk-width-1-4@m m-1">
                        <div className="input-field uk-margin">
                          <label
                            className="uk-form-label active"
                            htmlhtmlFor="BI_MiS"
                          >
                            وضعیت سربازی
                          </label>
                          <div className="  form-control">
                            <select
                              {...formik.getFieldProps("sarbazi")}
                              onChange={formik.handleChange}
                            >
                              <option Value=""></option>
                              <option Value="StillToServed">مشمول</option>
                              <option Value="Serving">در حال خدمت</option>
                              <option Value="Served">پایان خدمت</option>
                              <option Value="Exempt">معاف</option>
                              <option Value="EducationalExempt">
                                معافیت تحصیلی
                              </option>
                              <option Value="NonMedicalExempt">
                                معافیت غیرپزشکی
                              </option>
                              <option Value="MedicalExempt">
                                معافیت پزشکی
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-1 uk-width-2-5@m m-1">
                        <div className="input-field">
                          <label className="uk-form-label" htmlhtmlFor="BI_BY">
                            تاریخ تولد
                          </label>
                          <div className="  form-control">
                            <div
                              className="uk-grid-small uk-grid d-flex"
                              uk-grid=""
                            >
                              <div className="uk-width-1-3 uk-width-1-4@m uk-first-column mb-1">
                                <select
                                  {...formik.getFieldProps("birthdayDay")}
                                  onChange={formik.handleChange}
                                >
                                  <option defaultValue=""></option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                  <option value="14">14</option>
                                  <option value="15">15</option>
                                  <option value="16">16</option>
                                  <option value="17">17</option>
                                  <option value="18">18</option>
                                  <option value="19">19</option>
                                  <option value="20">20</option>
                                  <option value="21">21</option>
                                  <option value="22">22</option>
                                  <option value="23">23</option>
                                  <option value="24">24</option>
                                  <option value="25">25</option>
                                  <option value="26">26</option>
                                  <option value="27">27</option>
                                  <option value="28">28</option>
                                  <option value="29">29</option>
                                  <option value="30">30</option>
                                  <option value="31">31</option>
                                </select>
                              </div>
                              <div className="uk-width-1-3 uk-width-2-5@m mx-1">
                                <select
                                  {...formik.getFieldProps("birthdayMonth")}
                                  onChange={formik.handleChange}
                                >
                                  <option Value=""></option>
                                  <option Value="1">فروردین</option>
                                  <option Value="2">اردیبهشت</option>
                                  <option Value="3">خرداد</option>
                                  <option Value="4">تیر</option>
                                  <option Value="5">مرداد</option>
                                  <option Value="6">شهریور</option>
                                  <option Value="7">مهر</option>
                                  <option Value="8">آبان</option>
                                  <option Value="9">آذر</option>
                                  <option Value="10">دی</option>
                                  <option Value="11">بهمن</option>
                                  <option Value="12">اسفند</option>
                                </select>
                              </div>
                              <div className="uk-width-1-3 uk-width-1-3@m mx-3">
                                <input
                                  {...formik.getFieldProps("birthdayYear")}
                                  onChange={formik.handleChange}
                                  type="tel"
                                  placeholder="سال "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <h2>اطلاعات تماس</h2>
              <div className="cv-box builder-box " data-fieldset="1">
                <div className="uk-grid-small uk-grid d-flex mx-3 " uk-grid="">
                  <div className="uk-width-1-1 uk-width-1-4@s uk-width-1-4@m uk-first-column mx-2">
                    <div className="input-field">
                      <label
                        className="uk-form-label has-help"
                        data-help="email"
                        htmlhtmlFor="BI_Em"
                      >
                        ایمیل
                      </label>
                      <div className="  form-control">
                        <input
                          {...formik.getFieldProps("email")}
                          onChange={formik.handleChange}
                          dir="ltr"
                          data-email="true"
                          type="email"
                        />
                        <ul
                          id="emaildropdown"
                          className="dropdown-content"
                        ></ul>
                      </div>
                    </div>
                  </div>

                  <div className="uk-width-1-1 uk-width-1-4@s uk-width-1-4@m m-2">
                    <div className="input-field">
                      <label
                        className="uk-form-label active"
                        htmlhtmlFor="BI_Mob"
                      >
                        موبایل
                      </label>
                      <div className="  form-control">
                        <input
                          type="number"
                          {...formik.getFieldProps("mobile")}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="uk-width-1-1 uk-width-1-4@s uk-width-1-4@m m-2"
                    style={{ width: "100%" }}
                  >
                    <div className="input-field">
                      <label
                        className="uk-form-label active"
                        htmlhtmlFor="BI_Phn"
                      >
                        تلفن
                      </label>
                      <div className="  form-control">
                        <input
                          type="tel"
                          dir="ltr"
                          {...formik.getFieldProps("tell")}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="uk-grid-small uk-grid d-flex"
                  uk-grid=""
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    width: "100%",
                  }}
                >
                  <div className="uk-width-1-3 uk-width-1-6@s uk-width-1-5@m uk-first-column m-2">
                    <div className="input-field uk-margin">
                      <label className="uk-form-label" htmlhtmlFor="BI_CoT">
                        کشور
                      </label>
                      <div className="  form-control">
                        <select
                          {...formik.getFieldProps("country")}
                          onChange={formik.handleChange}
                        >
                          <option Value></option>

                          <option Value="160">اتریش</option>
                          <option Value="202">اتیوپی</option>
                          <option Value="227">اردن</option>
                          <option Value="158">ارمنستان</option>
                          <option Value="309">اروگوئه</option>
                          <option Value="310">ازبکستان</option>
                          <option Value="287">اسپانیا</option>
                          <option Value="159">استرالیا</option>
                          <option Value="201">استونی</option>
                          <option Value="282">اسلواکی</option>
                          <option Value="283">اسلوونی</option>
                          <option Value="318">افغانستان</option>
                          <option Value="306">اکراین</option>
                          <option Value="196">اکوادور</option>
                          <option Value="154">الجزایر</option>
                          <option Value="198">السالوادور</option>

                          <option Value="221">اندونزی</option>
                          <option Value="199">انگلیس</option>
                          <option Value="305">اوگاندا</option>
                          <option Value="308"> آمریکا</option>
                          <option Value="224">ایتالیا</option>
                          <option Value="200">ایتره</option>
                          <option Value="1">ایران</option>
                          <option Value="219">ایسلند</option>
                          <option Value="161">آذربایجان</option>
                          <option Value="157">آرژانتین</option>
                          <option Value="285">آفریقا</option>
                          <option Value="153">آلبانی</option>
                          <option Value="209">آلمان</option>
                          <option Value="155">آندورا</option>
                          <option Value="156">آنگولا</option>
                          <option Value="165">باربادوس</option>
                          <option Value="162">باهاما</option>
                          <option Value="163">بحرین</option>
                          <option Value="174">برزیل</option>
                          <option Value="178">بروندی</option>
                          <option Value="166">بلاروس</option>
                          <option Value="167">بلژیک</option>
                          <option Value="176">بلغارستان</option>
                          <option Value="168">بلیز</option>
                          <option Value="164">بنگلادش</option>
                          <option Value="169">بنین</option>
                          <option Value="170">بوتان</option>
                          <option Value="173">بوتسوانا</option>
                          <option Value="177">بورکینیا فاسو</option>
                          <option Value="172">بوسنی </option>
                          <option Value="171">بولیوی</option>
                          <option Value="175">بونئی</option>
                          <option Value="267">پاراگوئه</option>
                          <option Value="263">پاکستان</option>
                          <option Value="265">پاناما</option>
                          <option Value="271">پرتغال</option>
                          <option Value="268">پرو</option>
                          <option Value="296">تاجیکستان</option>
                          <option Value="297">تانزانیا</option>
                          <option Value="298">تایلند</option>
                          <option Value="295">تایوان</option>
                          <option Value="303">ترکمنستان</option>
                          <option Value="302">ترکیه</option>

                          <option Value="304">توالو</option>
                          <option Value="299">توگو</option>
                          <option Value="301">تونس</option>
                          <option Value="225">جامائیکا</option>
                          <option Value="223"> ایرلند</option>
                          <option Value="191">جمهوری چک</option>
                          <option Value="195"> دومنیکن</option>
                          <option Value="193">جیبوتی</option>
                          <option Value="182">چاد</option>
                          <option Value="184">چین</option>
                          <option Value="192">دانمارک</option>
                          <option Value="194">دومینیکا</option>
                          <option Value="275">رواندا</option>
                          <option Value="274">روسیه</option>
                          <option Value="273">رومانی</option>
                          <option Value="316">زامبیا</option>
                          <option Value="317">زیمباوه</option>
                          <option Value="226">ژاپن</option>
                          <option Value="288">سریلانکا</option>
                          <option Value="281">سنگاپور</option>
                          <option Value="277">سنگال</option>
                          <option Value="291">سوازیلند</option>
                          <option Value="289">سودان</option>
                          <option Value="290">سورینام</option>
                          <option Value="294">سوریه</option>
                          <option Value="284">سومالی</option>
                          <option Value="292">سوئد</option>
                          <option Value="293">سوئیس</option>
                          <option Value="280">سیرالئون</option>
                          <option Value="279">سیشل</option>
                          <option Value="183">شیلی</option>
                          <option Value="278">صربستان</option>
                          <option Value="222">عراق</option>
                          <option Value="276">عربستان</option>
                          <option Value="262">عمان</option>
                          <option Value="210">غنا</option>
                          <option Value="205">فرانسه</option>
                          <option Value="264">فلستین</option>
                          <option Value="204">فنلاند</option>
                          <option Value="203">فیجی</option>
                          <option Value="269">فیلیپین</option>
                          <option Value="319">فیلیپین</option>
                          <option Value="190">قبرس</option>
                          <option Value="228">قزاقستان</option>
                          <option Value="272">قطر</option>
                          <option Value="187">کاستاریکا</option>
                          <option Value="179">کامبوج</option>
                          <option Value="180">کامرون</option>
                          <option Value="181">کانادا</option>
                          <option Value="188">کرواسی</option>
                          <option Value="286">کره جنوبی</option>
                          <option Value="260">کره شمالی</option>
                          <option Value="185">کلمبیا</option>
                          <option Value="186">کنگو</option>
                          <option Value="229">کنیا</option>
                          <option Value="189">کوبا</option>
                          <option Value="230">کویت</option>
                          <option Value="206">گابن</option>
                          <option Value="207">گامبیا</option>
                          <option Value="212">گرانادا</option>
                          <option Value="208">گرجستان</option>
                          <option Value="213">گواتمالا</option>
                          <option Value="215">گویان</option>
                          <option Value="214">گینه</option>
                          <option Value="266">گینه نو</option>
                          <option Value="231">لائوس</option>
                          <option Value="233">لبنان</option>
                          <option Value="270">لهستان</option>
                          <option Value="234">لیبریا</option>
                          <option Value="235">لیبی</option>
                          <option Value="232">لیتوانی</option>
                          <option Value="236">لیتوانی</option>
                          <option Value="238">ماداگاسکار</option>
                          <option Value="239">مالاوی</option>
                          <option Value="243">مالت</option>
                          <option Value="241">مالدیو</option>
                          <option Value="240">مالزی</option>
                          <option Value="242">مالی</option>
                          <option Value="218">مجارستان</option>
                          <option Value="250">مراکش</option>
                          <option Value="197">مصر</option>
                          <option Value="248">مغولستان</option>
                          <option Value="237">مقدونیه</option>
                          <option Value="246">مکزیک</option>
                          <option Value="244">موریتانی</option>
                          <option Value="245">موریس</option>
                          <option Value="251">موزامبیک</option>
                          <option Value="247">موناکو</option>
                          <option Value="249">مونته نگرو</option>
                          <option Value="252">میانمار </option>
                          <option Value="253">نامیبیا</option>
                          <option Value="254">نپال</option>
                          <option Value="261">نروژ</option>
                          <option Value="258">نیجر</option>
                          <option Value="259">نیجریه</option>
                          <option Value="257">نیکاراگوئه</option>
                          <option Value="256">نیوزیلند</option>
                          <option Value="312">واتیکان</option>
                          <option Value="311">وانوواتو</option>
                          <option Value="313">ونزوئلا</option>
                          <option Value="314">ویتنام</option>
                          <option Value="216">هایتی</option>
                          <option Value="255">هلند</option>
                          <option Value="220">هند</option>
                          <option Value="217">هندوراس</option>
                          <option Value="315">یمن</option>
                          <option Value="211">یونان</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="uk-width-1-3 uk-width-1-6@s uk-width-1-5@m m-2">
                    <div className="input-field uk-margin">
                      <label className="uk-form-label" htmlhtmlFor="BI_PrT">
                        استان
                      </label>
                      <div className="  form-control">
                        <input
                          type="text"
                          {...formik.getFieldProps("province")}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="uk-width-1-3 uk-width-1-6@s uk-width-1-5@m m-2"
                    style={{ width: "38%" }}
                  >
                    <div className="input-field uk-margin">
                      <label className="uk-form-label" htmlhtmlFor="BI_CiT">
                        شهر
                      </label>
                      <div className="  form-control">
                        <input
                          type="text"
                          {...formik.getFieldProps("city")}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="uk-width-1-1 uk-width-1-2@s uk-width-2-5@m m-2">
                    <div className="input-field uk-margin">
                      <label className="uk-form-label" htmlhtmlFor="BI_Adrs">
                        آدرس
                      </label>
                      <div className="  form-control">
                        <input
                          type="text"
                          {...formik.getFieldProps("address")}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <h2
                className="uk-margin-small-bottom custom-section-title"
                data-custom-section="SocialNets"
                data-label="شبکه اجتماعی"
              >
                شبکه اجتماعی
              </h2>

              <div data-fieldset="2" id="socialNet">
                <div className="uk-grid-small uk-grid" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-width-1-2@s uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "400" }}>
                        <div>
                          <div
                            className="uk-grid-small uk-grid d-flex m-3 "
                            style={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                            uk-grid=""
                          >
                            <div className="uk-width-1-3 uk-margin-remove-top uk-first-column m-2">
                              <div className="input-field uk-margin">
                                <label className="uk-form-label">
                                  شبکه اجتماعی
                                </label>
                                <div className="  form-control">
                                  <select
                                    {...formik.getFieldProps("social1")}
                                    onChange={formik.handleChange}
                                  >
                                    <option Value="" disabled=""></option>
                                    <option Value="LinkedIn">لینکداین</option>
                                    <option Value="Twitter">توییتر</option>
                                    <option Value="Facebook">فیسبوک</option>
                                    <option Value="Instagram">
                                      اینستاگرام
                                    </option>
                                    <option Value="Telegram">تلگرام</option>
                                    <option Value="Github">گیت‌هاب</option>
                                    <option Value="Dribbble">دریبل</option>
                                    <option Value="WhatsApp">واتساپ</option>
                                    <option Value="Skype">اسکایپ</option>
                                    <option Value="Youtube">یوتیوب</option>
                                    <option Value="Stackoverflow">
                                      StackOverflow
                                    </option>
                                    <option Value="ResearchGate">
                                      ResearchGate
                                    </option>
                                    <option Value="Figma">فیگما</option>
                                    <option Value="Pinterest">Pinterest</option>
                                    <option Value="Gitlab">گیت‌لب</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              className="uk-width-2-3 uk-margin-remove-top m-2 "
                              style={{ width: "100%" }}
                            >
                              <div className="input-field uk-margin">
                                <label
                                  className="uk-form-label"
                                  htmlhtmlFor="SNs_0__Url"
                                >
                                  آی دی مرتبط
                                </label>
                                <div className="  form-control">
                                  <input
                                    dir="ltr"
                                    type="text"
                                    {...formik.getFieldProps("id1")}
                                    onChange={formik.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="uk-grid-small uk-grid d-flex m-3 "
                            style={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                            uk-grid=""
                          >
                            <div className="uk-width-1-3 uk-margin-remove-top uk-first-column m-2">
                              <div className="input-field uk-margin">
                                <label className="uk-form-label">
                                  شبکه اجتماعی
                                </label>
                                <div className="  form-control">
                                  <select
                                    {...formik.getFieldProps("social2")}
                                    onChange={formik.handleChange}
                                  >
                                    <option Value="" disabled=""></option>
                                    <option Value="LinkedIn">لینکداین</option>
                                    <option Value="Twitter">توییتر</option>
                                    <option Value="Facebook">فیسبوک</option>
                                    <option Value="Instagram">
                                      اینستاگرام
                                    </option>
                                    <option Value="Telegram">تلگرام</option>
                                    <option Value="Github">گیت‌هاب</option>
                                    <option Value="Dribbble">دریبل</option>
                                    <option Value="WhatsApp">واتساپ</option>
                                    <option Value="Skype">اسکایپ</option>
                                    <option Value="Youtube">یوتیوب</option>
                                    <option Value="Stackoverflow">
                                      StackOverflow
                                    </option>
                                    <option Value="ResearchGate">
                                      ResearchGate
                                    </option>
                                    <option Value="Figma">فیگما</option>
                                    <option Value="Pinterest">Pinterest</option>
                                    <option Value="Gitlab">گیت‌لب</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              className="uk-width-2-3 uk-margin-remove-top m-2"
                              style={{ width: "100%" }}
                            >
                              <div className="input-field uk-margin">
                                <label
                                  className="uk-form-label"
                                  htmlhtmlFor="SNs_0__Url"
                                >
                                  آی دی مرتبط
                                </label>
                                <div className="  form-control">
                                  <input
                                    dir="ltr"
                                    type="text"
                                    {...formik.getFieldProps("id2")}
                                    onChange={formik.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="uk-grid-small uk-grid d-flex m-3"
                            style={{
                              justifyContent: "center",
                              alignContent: "center",
                            }}
                            uk-grid=""
                          >
                            <div className="uk-width-1-3 uk-margin-remove-top uk-first-column m-2">
                              <div className="input-field uk-margin">
                                <label className="uk-form-label">
                                  شبکه اجتماعی
                                </label>
                                <div className="  form-control">
                                  <select
                                    {...formik.getFieldProps("social3")}
                                    onChange={formik.handleChange}
                                  >
                                    <option Value="" disabled=""></option>
                                    <option Value="LinkedIn">لینکداین</option>
                                    <option Value="Twitter">توییتر</option>
                                    <option Value="Facebook">فیسبوک</option>
                                    <option Value="Instagram">
                                      اینستاگرام
                                    </option>
                                    <option Value="Telegram">تلگرام</option>
                                    <option Value="Github">گیت‌هاب</option>
                                    <option Value="Dribbble">دریبل</option>
                                    <option Value="WhatsApp">واتساپ</option>
                                    <option Value="Skype">اسکایپ</option>
                                    <option Value="Youtube">یوتیوب</option>
                                    <option Value="Stackoverflow">
                                      StackOverflow
                                    </option>
                                    <option Value="ResearchGate">
                                      ResearchGate
                                    </option>
                                    <option Value="Figma">فیگما</option>
                                    <option Value="Pinterest">Pinterest</option>
                                    <option Value="Gitlab">گیت‌لب</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div
                              className="uk-width-2-3 uk-margin-remove-top m-2"
                              style={{ width: "100%" }}
                            >
                              <div className="input-field uk-margin">
                                <label
                                  className="uk-form-label"
                                  htmlhtmlFor="SNs_0__Url"
                                >
                                  آی دی مرتبط
                                </label>
                                <div className="  form-control">
                                  <input
                                    dir="ltr"
                                    type="text"
                                    {...formik.getFieldProps("id3")}
                                    onChange={formik.handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <h2
                className="uk-margin-small-bottom custom-section-title"
                data-custom-section="Languages"
                data-label="زبان"
              >
                زبان
              </h2>

              <div id="langsTab " data-fieldset="1">
                <div className="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "500" }}>
                        <div className="builder-card-content ">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div className="uk-width-1-1 uk-width-1-5@s uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LnN"
                              >
                                نام زبان
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("language1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>
                                  <option value="English">انگلیسی</option>
                                  <option value="Arabic">عربی</option>
                                  <option value="German">آلمانی</option>
                                  <option value="France">فرانسوی</option>
                                  <option value="Spanish">اسپانیایی</option>
                                  <option value="Russian">روسی</option>
                                  <option value="Italy">ایتالیایی</option>
                                  <option value="Turkish">
                                    ترکی استانبولی
                                  </option>
                                  <option value="Persian">فارسی</option>
                                  <option value="China">چینی</option>
                                  <option value="Hebrew">عبری</option>
                                  <option value="Azerbaijani">
                                    ترکی آذربایجانی
                                  </option>
                                  <option value="Armenian">ارمنی</option>
                                  <option value="Japanese">ژاپنی</option>
                                  <option value="Georgian">گرجی</option>
                                  <option value="Kurdish">کُردی</option>
                                  <option value="Portuguese">پرتغالی</option>
                                  <option value="Bengali">بنگالی</option>
                                  <option value="Lahnda">لندا</option>
                                  <option value="Javanese">جاوه‌ای</option>
                                  <option value="Korean">کره ای</option>
                                  <option value="Vietnamese">ویتنامی</option>
                                  <option value="Urdu">اردو</option>
                                  <option value="Hindi">هندی</option>
                                  <option value="Egyptian">مصری</option>
                                  <option value="Telugu">تلوگو</option>
                                  <option value="Gujarati">گجراتی</option>
                                  <option value="Tamil">تامیلی</option>
                                  <option value="Marathi">مراتی</option>
                                  <option value="Hungarian">مجاری</option>
                                  <option value="Swedish">سوئدی</option>
                                  <option value="Pashto">پشتو</option>
                                  <option value="Greek">یونانی</option>
                                  <option value="Dutch">هلندی</option>
                                  <option value="Danish">دانمارکی</option>
                                  <option value="Latin">لاتین</option>
                                  <option value="Serbian">صربی</option>
                                  <option value="Croatian">کرواتی</option>
                                  <option value="Catalan">کاتالان</option>
                                </select>
                              </div>
                            </div>

                            <div className="uk-width-1-1"></div>

                            <div
                              className="uk-width-1-1 uk-width-1-5@s uk-grid-margin language-overall uk-hidden m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__OL"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("languageLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>

                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 uk-first-column"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__RL"
                              >
                                مهارت خواندن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("readingLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 "
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__WL"
                              >
                                مهارت نوشتن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("writingLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LL"
                              >
                                مهارت شنیداری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("listeningLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__SL"
                              >
                                مهارت گفتاری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("speakingLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="uk-width-1-1 uk-width-1-5@s uk-grid-margin m-2">
                            <label
                              className="uk-form-label"
                              htmlFor="LIs_0__Dsc"
                            >
                              توضیحات
                            </label>
                            <div className="  form-control">
                              <input
                              className="bordernone"
                                data-max-length="150"
                                type="text"
                                {...formik.getFieldProps("languageExplain1")}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="langsTab " data-fieldset="1">
                <div className="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "500" }}>
                        <div className="builder-card-content ">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div className="uk-width-1-1 uk-width-1-5@s uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LnN"
                              >
                                نام زبان
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("language2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>
                                  <option value="English">انگلیسی</option>
                                  <option value="Arabic">عربی</option>
                                  <option value="German">آلمانی</option>
                                  <option value="France">فرانسوی</option>
                                  <option value="Spanish">اسپانیایی</option>
                                  <option value="Russian">روسی</option>
                                  <option value="Italy">ایتالیایی</option>
                                  <option value="Turkish">
                                    ترکی استانبولی
                                  </option>
                                  <option value="Persian">فارسی</option>
                                  <option value="China">چینی</option>
                                  <option value="Hebrew">عبری</option>
                                  <option value="Azerbaijani">
                                    ترکی آذربایجانی
                                  </option>
                                  <option value="Armenian">ارمنی</option>
                                  <option value="Japanese">ژاپنی</option>
                                  <option value="Georgian">گرجی</option>
                                  <option value="Kurdish">کُردی</option>
                                  <option value="Portuguese">پرتغالی</option>
                                  <option value="Bengali">بنگالی</option>
                                  <option value="Lahnda">لندا</option>
                                  <option value="Javanese">جاوه‌ای</option>
                                  <option value="Korean">کره ای</option>
                                  <option value="Vietnamese">ویتنامی</option>
                                  <option value="Urdu">اردو</option>
                                  <option value="Hindi">هندی</option>
                                  <option value="Egyptian">مصری</option>
                                  <option value="Telugu">تلوگو</option>
                                  <option value="Gujarati">گجراتی</option>
                                  <option value="Tamil">تامیلی</option>
                                  <option value="Marathi">مراتی</option>
                                  <option value="Hungarian">مجاری</option>
                                  <option value="Swedish">سوئدی</option>
                                  <option value="Pashto">پشتو</option>
                                  <option value="Greek">یونانی</option>
                                  <option value="Dutch">هلندی</option>
                                  <option value="Danish">دانمارکی</option>
                                  <option value="Latin">لاتین</option>
                                  <option value="Serbian">صربی</option>
                                  <option value="Croatian">کرواتی</option>
                                  <option value="Catalan">کاتالان</option>
                                </select>
                              </div>
                            </div>

                            <div className="uk-width-1-1"></div>

                            <div
                              className="uk-width-1-1 uk-width-1-5@s uk-grid-margin language-overall uk-hidden m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__OL"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("languagelevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>

                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 uk-first-column"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__RL"
                              >
                                مهارت خواندن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("readingLevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 "
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__WL"
                              >
                                مهارت نوشتن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("writingLevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LL"
                              >
                                مهارت شنیداری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("listeningLevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__SL"
                              >
                                مهارت گفتاری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("speakingLevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="uk-width-1-1 uk-width-1-5@s uk-grid-margin m-2">
                            <label
                              className="uk-form-label"
                              htmlFor="LIs_0__Dsc"
                            >
                              توضیحات
                            </label>
                            <div className="  form-control">
                              <input
                              className="bordernone"
                                {...formik.getFieldProps("languageExplain2")}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="langsTab " data-fieldset="1">
                <div className="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "500" }}>
                        <div className="builder-card-content ">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div className="uk-width-1-1 uk-width-1-5@s uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LnN"
                              >
                                نام زبان
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("language3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>
                                  <option value="English">انگلیسی</option>
                                  <option value="Arabic">عربی</option>
                                  <option value="German">آلمانی</option>
                                  <option value="France">فرانسوی</option>
                                  <option value="Spanish">اسپانیایی</option>
                                  <option value="Russian">روسی</option>
                                  <option value="Italy">ایتالیایی</option>
                                  <option value="Turkish">
                                    ترکی استانبولی
                                  </option>
                                  <option value="Persian">فارسی</option>
                                  <option value="China">چینی</option>
                                  <option value="Hebrew">عبری</option>
                                  <option value="Azerbaijani">
                                    ترکی آذربایجانی
                                  </option>
                                  <option value="Armenian">ارمنی</option>
                                  <option value="Japanese">ژاپنی</option>
                                  <option value="Georgian">گرجی</option>
                                  <option value="Kurdish">کُردی</option>
                                  <option value="Portuguese">پرتغالی</option>
                                  <option value="Bengali">بنگالی</option>
                                  <option value="Lahnda">لندا</option>
                                  <option value="Javanese">جاوه‌ای</option>
                                  <option value="Korean">کره ای</option>
                                  <option value="Vietnamese">ویتنامی</option>
                                  <option value="Urdu">اردو</option>
                                  <option value="Hindi">هندی</option>
                                  <option value="Egyptian">مصری</option>
                                  <option value="Telugu">تلوگو</option>
                                  <option value="Gujarati">گجراتی</option>
                                  <option value="Tamil">تامیلی</option>
                                  <option value="Marathi">مراتی</option>
                                  <option value="Hungarian">مجاری</option>
                                  <option value="Swedish">سوئدی</option>
                                  <option value="Pashto">پشتو</option>
                                  <option value="Greek">یونانی</option>
                                  <option value="Dutch">هلندی</option>
                                  <option value="Danish">دانمارکی</option>
                                  <option value="Latin">لاتین</option>
                                  <option value="Serbian">صربی</option>
                                  <option value="Croatian">کرواتی</option>
                                  <option value="Catalan">کاتالان</option>
                                </select>
                              </div>
                            </div>

                            <div className="uk-width-1-1"></div>

                            <div
                              className="uk-width-1-1 uk-width-1-5@s uk-grid-margin language-overall uk-hidden m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__OL"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("languageLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>

                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 uk-first-column"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__RL"
                              >
                                مهارت خواندن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("readingLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2 "
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__WL"
                              >
                                مهارت نوشتن
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("writingLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__LL"
                              >
                                مهارت شنیداری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("listeningLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                            <div
                              className="uk-width-1-2 uk-width-1-5@s uk-grid-margin language-separated-skill m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="LIs_0__SL"
                              >
                                مهارت گفتاری
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("speakingLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="uk-width-1-1 uk-width-1-5@s uk-grid-margin m-2">
                            <label
                              className="uk-form-label"
                              htmlFor="LIs_0__Dsc"
                            >
                              توضیحات
                            </label>
                            <div className="  form-control">
                              <input
                              className="bordernone"
                                {...formik.getFieldProps("languageExplain3")}
                                onChange={formik.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <h2
                className="uk-margin-small-bottom custom-section-title"
                data-custom-section="Skills"
                data-label="مهارت‌ها"
              >
                مهارت‌ها
              </h2>

              <div id="skillsTab" data-fieldset="2">
                <div className="uk-grid-small uk-grid" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-width-1-2@s uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "400" }}>
                        <div className="builder-card-content">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div
                              className="uk-width-1-1 uk-width-2-3@s uk-first-column m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_0__SkN"
                              >
                                نام مهارت
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("skil1")}
                                  onChange={formik.handleChange}
                                />
                                <div
                                  className="autocomplete-suggestions"
                                  style={{
                                    position: "absolute",
                                    display: "none",
                                    maxHeight: "300px",
                                    zIndex: "9999",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-3@s m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_0__L"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("skilLevel1")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>

                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="builder-card uk-width-1-1 uk-width-1-2@s">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "399" }}>
                        <div className="builder-card-content">
                          <div
                            className="uk-grid-small uk-grid d-flex "
                            uk-grid=""
                          >
                            <div
                              className="uk-width-1-1 uk-width-2-3@s uk-first-column m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__SkN"
                              >
                                نام مهارت
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("skil2")}
                                  onChange={formik.handleChange}
                                />
                                <div
                                  className="autocomplete-suggestions"
                                  style={{
                                    position: "absolute",
                                    display: "none",
                                    maxHeight: "300px",
                                    zIndex: "9999",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-3@s m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__L"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("skilLevel2")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>

                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="builder-card-content">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div
                              className="uk-width-1-1 uk-width-2-3@s uk-first-column m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__SkN"
                              >
                                نام مهارت
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("skil3")}
                                  onChange={formik.handleChange}
                                />
                                <div
                                  className="autocomplete-suggestions"
                                  style={{
                                    position: "absolute",
                                    display: "none",
                                    maxHeight: "300px",
                                    zIndex: "9999",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-3@s m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__L"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("skilLevel3")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>

                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="builder-card-content">
                          <div
                            className="uk-grid-small uk-grid d-flex"
                            uk-grid=""
                          >
                            <div
                              className="uk-width-1-1 uk-width-2-3@s uk-first-column m-2"
                              style={{ width: "100%" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__SkN"
                              >
                                نام مهارت
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("skil4")}
                                  onChange={formik.handleChange}
                                />
                                <div
                                  className="autocomplete-suggestions"
                                  style={{
                                    position: "absolute",
                                    display: "none",
                                    maxHeight: "300px",
                                    zIndex: "9999",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-3@s m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="SIs_1__L"
                              >
                                سطح
                              </label>
                              <div className="  form-control">
                                <select
                                  {...formik.getFieldProps("skilLevel4")}
                                  onChange={formik.handleChange}
                                >
                                  <option value="" selected=""></option>

                                  <option value="1">★☆☆☆☆ </option>
                                  <option value="2">★★☆☆☆ </option>
                                  <option value="3">★★★☆☆ </option>
                                  <option value="4">★★★★☆ </option>
                                  <option value="5">★★★★★ </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <h2
                className="uk-margin-small-bottom custom-section-title"
                data-custom-section="Certificates"
                data-label="دوره‌ها و گواهینامه‌ها"
              >
                دوره‌ها و گواهینامه‌ها
              </h2>

              <div id="certificatesTab" data-fieldset="3">
                <div className="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                  <div className="builder-card uk-width-1-1 uk-first-column">
                    <div className="cv-box builder-box">
                      <div style={{ zIndex: "300" }}>
                        <div className="builder-card-content">
                          <div className="uk-grid-small uk-grid" uk-grid="">
                            <div
                              className="uk-width-1-1 uk-width-6-6@s uk-first-column m-2"
                              style={{ position: "relative" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__T"
                              >
                                عنوان
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("course1")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-3-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Ins"
                              >
                                موسسه
                              </label>
                              <div className="  form-control">
                                <input
                                  type="text"
                                  {...formik.getFieldProps("institude1")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-4@s uk-grid-margin m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Y"
                              >
                                تاریخ
                              </label>
                              <div className="  form-control">
                                <div
                                  className="uk-grid-small uk-grid d-flex"
                                  uk-grid=""
                                >
                                  <div className="uk-width-1-2 uk-first-column m-2  ">
                                    <select
                                      {...formik.getFieldProps("date1")}
                                      onChange={formik.handleChange}
                                    >
                                      <option value="" selected=""></option>
                                      <option value="1">فروردین</option>
                                      <option value="2">اردیبهشت</option>
                                      <option value="3">خرداد</option>
                                      <option value="4">تیر</option>
                                      <option value="5">مرداد</option>
                                      <option value="6">شهریور</option>
                                      <option value="7">مهر</option>
                                      <option value="8">آبان</option>
                                      <option value="9">آذر</option>
                                      <option value="10">دی</option>
                                      <option value="11">بهمن</option>
                                      <option value="12">اسفند</option>
                                    </select>
                                  </div>
                                  <div className="uk-width-1-2 m-2   form-control">
                                    <input
                                      type="tel"
                                      {...formik.getFieldProps("year1")}
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="uk-width-1-1 uk-width-4-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__LUrl"
                              >
                                لینک مرتبط
                              </label>
                              <div className="  form-control">
                                <input
                                  dir="ltr"
                                  type="text"
                                  {...formik.getFieldProps("link1")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />

                      <div style={{ zIndex: "300" }}>
                        <div className="builder-card-content">
                          <div className="uk-grid-small uk-grid" uk-grid="">
                            <div
                              className="uk-width-1-1 uk-width-6-6@s uk-first-column m-2"
                              style={{ position: "relative" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__T"
                              >
                                عنوان
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("course2")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-3-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Ins"
                              >
                                موسسه
                              </label>
                              <div className="  form-control">
                                <input
                                  type="text"
                                  {...formik.getFieldProps("institude2")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-4@s uk-grid-margin m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Y"
                              >
                                تاریخ
                              </label>
                              <div className="  form-control">
                                <div
                                  className="uk-grid-small uk-grid d-flex"
                                  uk-grid=""
                                >
                                  <div className="uk-width-1-2 uk-first-column m-2  ">
                                    <select
                                      {...formik.getFieldProps("date2")}
                                      onChange={formik.handleChange}
                                    >
                                      <option value="" selected=""></option>
                                      <option value="1">فروردین</option>
                                      <option value="2">اردیبهشت</option>
                                      <option value="3">خرداد</option>
                                      <option value="4">تیر</option>
                                      <option value="5">مرداد</option>
                                      <option value="6">شهریور</option>
                                      <option value="7">مهر</option>
                                      <option value="8">آبان</option>
                                      <option value="9">آذر</option>
                                      <option value="10">دی</option>
                                      <option value="11">بهمن</option>
                                      <option value="12">اسفند</option>
                                    </select>
                                  </div>
                                  <div className="uk-width-1-2 m-2   form-control">
                                    <input
                                      type="tel"
                                      {...formik.getFieldProps("year2")}
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="uk-width-1-1 uk-width-4-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__LUrl"
                              >
                                لینک مرتبط
                              </label>
                              <div className="  form-control">
                                <input
                                  dir="ltr"
                                  data-link="true"
                                  type="text"
                                  {...formik.getFieldProps("link2")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div style={{ zIndex: "300" }}>
                        <div className="builder-card-content">
                          <div className="uk-grid-small uk-grid" uk-grid="">
                            <div
                              className="uk-width-1-1 uk-width-6-6@s uk-first-column m-2"
                              style={{ position: "relative" }}
                            >
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__T"
                              >
                                عنوان
                              </label>
                              <div className="  form-control">
                                <input
                                className="bordernone"
                                  {...formik.getFieldProps("course3")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-3-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Ins"
                              >
                                موسسه
                              </label>
                              <div className="  form-control">
                                <input
                                  type="text"
                                  {...formik.getFieldProps("institude3")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-1-4@s uk-grid-margin m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__Y"
                              >
                                تاریخ
                              </label>
                              <div className="  form-control">
                                <div
                                  className="uk-grid-small uk-grid d-flex"
                                  uk-grid=""
                                >
                                  <div className="uk-width-1-2 uk-first-column m-2  ">
                                    <select
                                      {...formik.getFieldProps("date3")}
                                      onChange={formik.handleChange}
                                    >
                                      <option value="" selected=""></option>
                                      <option value="1">فروردین</option>
                                      <option value="2">اردیبهشت</option>
                                      <option value="3">خرداد</option>
                                      <option value="4">تیر</option>
                                      <option value="5">مرداد</option>
                                      <option value="6">شهریور</option>
                                      <option value="7">مهر</option>
                                      <option value="8">آبان</option>
                                      <option value="9">آذر</option>
                                      <option value="10">دی</option>
                                      <option value="11">بهمن</option>
                                      <option value="12">اسفند</option>
                                    </select>
                                  </div>
                                  <div className="uk-width-1-2 m-2   form-control">
                                    <input
                                    
                                      type="tel"
                                      {...formik.getFieldProps("year3")}
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="uk-width-1-1 uk-width-4-4@s uk-grid-margin uk-first-column m-2">
                              <label
                                className="uk-form-label"
                                htmlFor="CIs_0__LUrl"
                              >
                                لینک مرتبط
                              </label>
                              <div className="  form-control">
                                <input
                                  dir="ltr"
                                  type="text"
                                  {...formik.getFieldProps("link3")}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-2 sub-form">
                <input
                  type="submit"
                  className="btn  sub-form"
                  style={{ backgroundColor: "#50fa7b", width: "200px" }}
                  value=" ثبت رزومه"
                  onSubmit={handleSubmit}
                />
                <NavLink
                  to={"/"}
                  className="btn  sub-form"
                  style={{ backgroundColor: "#ff5555", width: "200px" }}
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
  );
};


