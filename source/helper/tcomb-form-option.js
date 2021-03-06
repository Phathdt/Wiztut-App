import I18n from "../config/i18n";
import moment from "moment"
let myFormatFunction = (format,date) =>{
    return moment(date).format(format);
}

export const options = {
  fields: {
    email: {
      placeholder: I18n.t("your_email"),
      error: I18n.t("email_error"),
      label: I18n.t("email")
    },
    password: {
      placeholder: I18n.t("your_password"),
      error: I18n.t("password_error"),
      label: I18n.t("password"),
      password: true,
      secureTextEntry: true
    },
    password_confirmation: {
      placeholder: I18n.t("your_password"),
      error: I18n.t("password_error"),
      label: I18n.t("password"),
      password: true,
      secureTextEntry: true
    },
    title: {
      placeholder: I18n.t("your_title"),
      error: I18n.t("title_error"),
      label: I18n.t("title")
    },
    grade: {
      placeholder: I18n.t("your_grade"),
      error: I18n.t("grade_error"),
      label: I18n.t("grade")
    },
    grades: {
      placeholder: I18n.t("your_grade"),
      error: I18n.t("grade_error"),
      label: I18n.t("grade")
    },
    subjects: {
      placeholder: I18n.t("your_subject"),
      error: I18n.t("subject_error"),
      label: I18n.t("subject")
    },
    about_me: {
      placeholder: 'Giới thiệu',
      error: 'nhập thông tin',
      label: 'Giới thiệu'
    },
    subject: {
      placeholder: I18n.t("your_subject"),
      error: I18n.t("subject_error"),
      label: I18n.t("subject")
    },
    time: {
      placeholder: I18n.t("your_time"),
      error: I18n.t("time_error"),
      label: I18n.t("time")
    },
    address: {
      placeholder: I18n.t("your_address"),
      error: I18n.t("address_error"),
      label: I18n.t("address")
    },
    real_address: {
      placeholder: I18n.t("your_real_address"),
      error: I18n.t("real_address_error"),
      label: I18n.t("real_address")
    },
    salary: {
      placeholder: I18n.t("your_salary"),
      error: I18n.t("salary_error"),
      label: I18n.t("salary")
    },
    frequency: {
      placeholder: I18n.t("your_frequency"),
      error: I18n.t("frequency_error"),
      label: I18n.t("frequency")
    },
    sex_require: {
      placeholder: I18n.t("your_sex_require"),
      error: I18n.t("sex_require_error"),
      label: I18n.t("sex_require")
    },
    sex: {
      placeholder: I18n.t("your_sex_require"),
      error: I18n.t("sex_require_error"),
      label: I18n.t("sex_require")
    },
    degree_require: {
      placeholder: I18n.t("your_degree_require"),
      error: I18n.t("degree_require_error"),
      label: I18n.t("degree_require")
    },
    degree: {
      placeholder: I18n.t("your_degree_require"),
      error: I18n.t("degree_require_error"),
      label: I18n.t("degree_require")
    },
    school: {
      placeholder: 'Trường học',
      error: 'Chưa nhập trường học',
      label: 'Trường học'
    },
    name: {
      placeholder: 'Họ Tên',
      error: 'Chưa nhập họ tên',
      label: 'Họ tên'
    },
    dob: {
      placeholder: 'Ngày sinh',
      error: 'Chưa nhập ngày sinh',
      label: 'Ngày sinh',
      config:{
        format:(date) => myFormatFunction("YYYY-MM-DD",date)
      }
    },
    note: {
      placeholder: I18n.t("your_note"),
      error: I18n.t("note_error"),
      label: I18n.t("note")
    },
    phone: {
      placeholder: I18n.t("your_phone"),
      error: I18n.t("phone_error"),
      label: I18n.t("phone")
    },
    graduation_year: {
      placeholder: I18n.t("your_graduation_year"),
      error: I18n.t("graduation_year_error"),
      label: I18n.t("graduation_year")
    },
  }
};
