import {
  GetListCoursePostsUrl,
  GetCoursePostUrl,
  SignInUrl,
  GetListConversationsUrl,
  CreateMessageUrl,
  GetListProfilesUrl,
  CreateConversationUrl,
  CreateCoursePostUrl,
  GetListTeacherPostsUrl,
  GetTeacherPostUrl,
  CreateTeacherPostUrl,
  GetListCoursesUrl,
  GetProfileUrl,
  CreateRatingUrl,
  FindConversationWithUserUrl,
  CreateCourseUrl,
  ToggleProfileUrl,
  CreateProfileUrl,
  UpdateProfileUrl,
  UpdateTeacherPostUrl
} from "../helper/LinkUrl";

exports.getCoursePost = async function (q) {
  try {
    let url = `${GetCoursePostUrl}${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.getListCoursePost = async function (q, search) {
  try {
    let url = `${GetListCoursePostsUrl}?page=${q}&&title=${search.toLowerCase().replace(/ /g, '%20')}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.course_posts;
  } catch (error) { }
};

exports.getListCourse = async function (token) {
  try {
    let res = await fetch(GetListCoursesUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson.courses;
  } catch (error) { }
};

exports.changeStatusCourse = async function (id, token, status) {
  try {
    let url = `${UpdateTeacherPostUrl}${id}`;
    console.log(url)
    let res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        courses: {
          status: status
        }
      })
    });
    return res
  } catch (error) { }
};

exports.signIn = async function (user) {
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
  } catch (error) { }
};

exports.signUp = async function (user) {
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
  } catch (error) { }
};

exports.AddCoursePost = async function (cp, token) {
  try {
    let res = await fetch(CreateCoursePostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        course_posts: {
          "title": cp.title,
          "grade": parseInt(cp.grade),
          "subject": parseInt(cp.subject),
          "time": parseInt(cp.time),
          "address": parseInt(cp.address),
          "real_address": cp.real_address,
          "salary": parseInt(cp.salary),
          "sex_require": parseInt(cp.sex_require),
          "degree_require": parseInt(cp.degree_require),
          "frequency": parseInt(cp.frequency),
          "phone": cp.phone,
          "note": cp.note
        }
      })
    });
    return res
  } catch (error) { }
};

exports.getListTeacherPost = async function (q, search) {
  try {
    let url = `${GetListTeacherPostsUrl}?page=${q}&&title=${search.toLowerCase().replace(/ /g, '%20')}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.teacher_post;
  } catch (error) { }
};

exports.getTeacherPost = async function (q) {
  try {
    let url = `${GetTeacherPostUrl}${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.AddTeacherPost = async function (tp, token) {
  try {
    let res = await fetch(CreateTeacherPostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        teacher_posts: {
          "title": tp.title,
          "grade": parseInt(tp.grade),
          "subject": parseInt(tp.subject),
          "time": `\{${parseInt(tp.time)}\}`,
          "address": `\{${parseInt(tp.address)}\}`,
          "salary": parseInt(tp.salary),
          "note": tp.note
        }
      })
    });
    return res
  } catch (error) { }
};

exports.toggleTeacher = async function (token) {
  try {
    let res = await fetch(ToggleProfileUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.getListConversation = async function (q, token) {
  try {
    let url = `${GetListConversationsUrl}?page=${q}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson.conversations;
  } catch (error) { }
};

exports.getConversation = async function (q, token) {
  try {
    let url = `${GetListConversationsUrl}/${q}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.createMessage = async function (token, _body, _conversation_id) {
  try {
    let url = `${CreateMessageUrl}`;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        messages: {
          body: _body,
          conversation_id: _conversation_id
        }
      })
    });
    let resJson = await res.json();
    return resJson;
  }
  catch (error) { }
};

exports.createCourse = async function (teacher_id, token) {
  try {
    let url = `${CreateCourseUrl}`;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        courses: {
          teacher_id: teacher_id
        }
      })
    });
    let resJson = await res.json();
    return resJson;
  }
  catch (error) { }
};

exports.getProfile = async function (user_id, token) {
  try {
    let url = `${GetProfileUrl}${user_id}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.getListProfile = async function (page, search, token) {
  try {
    let url = `${GetListProfilesUrl}?page=${page}&&name=${search.toLowerCase().replace(/ /g, '%20')}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.createRating = async function (user_id, rating, comment, token) {
  try {
    let res = await fetch(CreateRatingUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        ratings: {
          rated_id: user_id,
          rate: rating,
          comment: comment
        }
      })
    });
    return res
  } catch (error) { }
};

exports.getListSearchProfile = async function (token, name) {
  try {
    let url = `${GetListProfilesUrl}?page=1&&name=${name.toLowerCase()}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) { }
};

exports.createConversation = async function (token, id) {
  try {
    let url = `${CreateConversationUrl}`;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        conversations: {
          recipient_id: id
        }
      })
    });
    let resJson = await res.json();
    return resJson;
  }
  catch (error) { }
};

exports.findConversationWithUser = async function (id, token) {
  try {
    let url = `${FindConversationWithUserUrl}${id}`;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    return res;
  } catch (error) { }
};


exports.getFilterCoursePost = async function (fcp, token) {
  try {
    let url = `${GetListCoursePostsUrl}?page=1`;
    url += fcp.grade ? `&&grade=${parseInt(fcp.grade)}` : ''
    url += fcp.subject ? `&&subject=${parseInt(fcp.subject)}` : ''
    url += fcp.address ? `&&address=${parseInt(fcp.address)}` : ''
    url += fcp.salary ? `&&salary=${parseInt(fcp.salary)}` : ''
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson.course_posts;
  } catch (error) { }
};
exports.getFilterTeacherPost = async function (tcp) {
  try {
    let url = `${GetListTeacherPostsUrl}?page=1`;
    url += tcp.grade ? `&&grade=${parseInt(tcp.grade)}` : ''
    url += tcp.subject ? `&&subject=${parseInt(tcp.subject)}` : ''
    url += tcp.address ? `&&address=${parseInt(tcp.address)}` : ''
    url += tcp.degree_require ? `&&degree_require=${parseInt(tcp.degree_require)}` : ''
    let res = await fetch(url)
    let resJson = await res.json();
    return resJson.teacher_post;
  } catch (error) { }
};
exports.getFilterProfile = async function (profile, token, is_teacher) {
  try {
    let url = `${GetListProfilesUrl}?page=1`;
    url += profile.sex ? `&&sex=${parseInt(profile.sex)}` : ''
    url += profile.salary ? `&&salary=${parseInt(profile.salary)}` : ''
    url += profile.degree_require ? `&&degree=${parseInt(profile.degree_require)}` : ''
    url += is_teacher ? `&&teacher=${is_teacher}` : ''
    let res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson.users;
  } catch (error) { }
};
exports.editProfile = async function (edp, token) {
  try {
    var date = new Date(edp.dob);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var formattedDate = year + '/' + month + '/' + day
    let res = await fetch(UpdateProfileUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        profiles: {
          "name": edp.name,
          "dob": formattedDate,
          "sex": parseInt(edp.sex),
          "school": edp.school,
          "degree": parseInt(edp.degree),
          "graduation_year": edp.graduation_year,
          "salary": edp.salary,
          "about_me": edp.about_me,
          "phone": edp.phone,
          "grades": `{${parseInt(edp.grades)}}`,
          "subjects": `{${parseInt(edp.subjects)}}`,
        }
      })
    });
    return res
  } catch (error) { }
};

exports.createProfile = async function (cp, token) {
  try {
    var date = new Date(cp.dob);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var formattedDate = year + '/' + month + '/' + day
    let res = await fetch(CreateProfileUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        profiles: {
          "name": cp.name,
          "dob": formattedDate,
          "sex": parseInt(cp.sex),
          "school": cp.school,
          "degree": parseInt(cp.degree),
          "graduation_year": cp.graduation_year,
          "salary": cp.salary,
          "about_me": cp.about_me,
          "phone": cp.phone,
          "grades": `{${parseInt(cp.grades)}}`,
          "subjects": `{${parseInt(cp.subjects)}}`,
        }
      })
    });
    return res
  } catch (error) { }
};


