import {
  GetListCoursePostsUrl,
  GetCoursePostUrl,
  SignInUrl,
  SignUpUrl
} from "../helper/LinkUrl";

exports.getListCoursePost = async function(q) {
  try {
    let url = `${GetListCoursePostsUrl}?page=${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.course_posts;
  } catch (error) {}
};

exports.getCoursePost = async function(q) {
  try {
    let url = `${GetCoursePostUrl}${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};

exports.getListCoursePost = async function(q) {
  try {
    let url = `${GetListCoursePostsUrl}?page=${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.course_posts;
  } catch (error) {}
};

exports.signIn = async function(user) {
  try {
    let res = await fetch(SignInUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          email: user.email.toLowerCase(),
          password: user.password
        }
      })
    });
    return res
    } catch (error) {}
};

exports.signUp = async function(user) {
  try {
    let res = await fetch(SignUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        registration: {
          email: user.email.toLowerCase(),
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      })
    });
    return res
    } catch (error) {}
};


exports.upcoming = async function(q) {
  try {
    let url = `${upcomingURL}?api_key=${KEY}&page=${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.results;
  } catch (error) {}
};

exports.search = async function(query, page) {
  try {
    let url = `${searchURL}?api_key=${KEY}&query=${query}&page=${page}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.results;
  } catch (error) {}
};

exports.getById = async function(id) {
  try {
    let url = `${getByIdURL}${id}?api_key=${KEY}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};

exports.getCast = async function(id) {
  try {
    let url = `${getCastURL}${id}/credits?api_key=${KEY}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) {
  }
};
