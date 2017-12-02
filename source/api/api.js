import { 
  GetListCoursePostsUrl, 
  GetCoursePostUrl, 
  GetListConversationsUrl,
  CreateMessageUrl
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
exports.getListConversation = async function(q,tokken) {
  try {
    let url = `${GetListConversationsUrl}?page=${q}`;
    let res = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + tokken
      }
    });
    let resJson = await res.json();
    return resJson.conversations;
  } catch (error) {}
};

exports.getConversation  = async function(q,tokken) {
  try {
    let url = `${GetListConversationsUrl}/${q}`;
    let res = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + tokken
      }
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {}
};

exports.postMessage = async function(tokken,_body,_conversation_id) {
  try {
    let url = `${CreateMessageUrl}`;
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ tokken
      },
      body: JSON.stringify({
        messages: {
          body: _body,
          conversation_id: _conversation_id
        }
      })
    });
  }
  catch (error) { }
}
