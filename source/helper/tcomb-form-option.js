import I18n from "../config/i18n";

export const options = {
  fields: {
    email: {
      placeholder: "Your email",
      error: I18n.t("email_error"),
      label: I18n.t("email")
    },
    password: {
      placeholder: "Your password",
      error: I18n.t("password_error"),
      label: I18n.t("password"),
      password: true,
      secureTextEntry: true
    },
    password_confirmation: {
      placeholder: "Your password",
      error: I18n.t("password_error"),
      label: I18n.t("password"),
      password: true,
      secureTextEntry: true
    }
  }
};
