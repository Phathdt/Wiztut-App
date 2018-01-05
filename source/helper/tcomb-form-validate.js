import t from "tcomb-form-native";
var Form = t.form.Form;

export const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});

export const Password = t.refinement(t.String, function(s) {
  return s.length >= 6;
});

export const  Graduation_year = t.refinement(t.Number, function(year) {
  return year >= 1910;
});