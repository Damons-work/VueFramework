import request from "./request";
export const personList = data => {
  return request({
    url: "/project/person/list",
    method: "POST",
    data: {}
  });
};
export const get = data => {
    return request({
      url: "/project/person/list",
      method: "GET",
      params: {
          id:data.id
      }
    });
  };
  
