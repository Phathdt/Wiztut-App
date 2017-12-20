import t from "tcomb-form-native";
import {
  address, time, degree_require, sex_require, grades, subjects, frequency
} from './constain.js'

export const Address = t.enums(address);
export const Time = t.enums(time);
export const Degree = t.enums(degree_require);
export const Sex = t.enums(sex_require);
export const Grade = t.enums(grades);
export const Subject = t.enums(subjects);
export const Frequency = t.enums(frequency);
