import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  studentid: Yup.number().required("شماره دانشجویی الزامی می باشد"),
  mobile: Yup.number().required("شماره موبایل الزامی می باشد"),
  email: Yup.string()
    .email("آدرس ایمیل معتبر نیست")
    .required("آدرس ایمیل الزامی می باشد"),
  password: Yup.string().required("رمز عبور الزامی میباشد"),
  // jens: Yup.object().required("انتخاب جنسیت الزامی می باشد"),
});
