import t from "tcomb-form-native";
import { Email, Password } from "./tcomb-form-validate";
import { Address, Time, Degree, Sex, Grade, Subject, Frequency } from "./tcomb-form-enum";

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

export const course_posts = t.struct({
  title: t.String,
  grade: Grade,
  subject: Subject,
  time: Time,
  address: Address,
  real_address: t.String,
  salary: t.Number,
  frequency: Frequency,
  sex_require: t.maybe(Sex),
  degree_require: t.maybe(Degree),
  phone: t.String,
  note: t.maybe(t.String)
});

const Car = t.enums.of('Audi Chrysler Ford Renault Peugeot')
const atLeastOne = arr => arr.length > 0

export const teacher_posts = t.struct({
  title: t.String,
  grade: Grade,
  subject: Subject,
  time: Time,
  address: Address,
  salary: t.Number,
  note: t.maybe(t.String)
});

export const filter_course_posts = t.struct({
  grade: t.maybe(Grade),
  subject: t.maybe(Subject),
  address: t.maybe(Address),
  salary: t.maybe(t.Number)
});
export const filter_teacher_posts = t.struct({
  grade: t.maybe(Grade),
  subject: t.maybe(Subject),
  address: t.maybe(Address),
  degree_require: t.maybe(Degree),
});
export const filter_profile = t.struct({
  sex_require: t.maybe(Sex),
  salary: t.maybe(t.Number),
  degree_require: t.maybe(Degree),
});

