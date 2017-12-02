import t from "tcomb-form-native";
import { Email, Password } from "./tcomb-form-validate";

function samePasswords(x) {
  return x.password === x.password_confirmation;
}

export const user = t.struct({
  email: Email,
  password: Password
});

export const userSignUp = t.refinement(
  t.struct({
    email: Email,
    password: Password,
    password_confirmation: Password
  }),
  samePasswords
);
