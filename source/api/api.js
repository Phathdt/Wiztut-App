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
} from "../helper/LinkUrl";

exports.getCoursePost = async function(q) {
  try {
    let url = `${GetCoursePostUrl}${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};

exports.getListCoursePost = async function(q, title) {
  try {
    let url = `${GetListCoursePostsUrl}?page=${q}`;
    url += title ? `&&title=${title}` : ''
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

exports.AddCoursePost = async function(cp, token) {
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
    } catch (error) {}
};

exports.getListTeacherPost = async function(q) {
  try {
    let url = `${GetListTeacherPostsUrl}?page=${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson.teacher_post;
  } catch (error) {}
};

exports.getTeacherPost = async function(q) {
  try {
    let url = `${GetTeacherPostUrl}${q}`;
    let res = await fetch(url);
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};

exports.AddTeacherPost = async function(tp, token) {
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
exports.getListConversation = async function(q,token) {
  try {
    let url = `${GetListConversationsUrl}?page=${q}`;
    let res = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson.conversations;
  } catch (error) {}
};
exports.getConversation  = async function(q,token) {
  try {
    let url = `${GetListConversationsUrl}/${q}`;
    let res = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};
exports.createMessage = async function(token,_body,_conversation_id) {
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
exports.getListSearchProfile = async function(token,name) {
  try {
    let url = `${GetListProfilesUrl}?page=1&&name=${name.toLowerCase()}`;
    let res= await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};
exports.createConversation = async function(token,id) {
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


