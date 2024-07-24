import axios from "../../axios";

const updateUser = (idUser, data) => {
  return axios.put(`/api/user/editUser/${idUser}`, data,{
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
const getAllUsers = () => {
  return axios.get("/api/user/getListUsers");
};

const getListUsersNotBanned = () => {
  return axios.get("/api/user/getListUsersNotBanned");
};

const bannedUser = (idUser) => {
  return axios.delete(`/api/user/bannedUser/${idUser}`);
};

const createUser = (formData) => {
  return axios.post("/api/user/addNew", formData);
};

const apiLogin = (username, password) => {
  return axios({
    url: `/api/user/login?username=${username}&password=${password}`,
    method: "post",
  });
};

const getCartUser = (id) => {
  return axios({
    url: `/api/cart/getlistitem?idUser=${id}`,
    method: "get",
  });
};

const deleteCartUser = (idUser, idProduct) => {
  return axios({
    url: `/api/cart/removeitems?idUser=${idUser}&items=${idProduct}`,
    method: "delete",
  });
};

const apiCheckOut = (idUser, data) => {
  return axios({
    url: `/api/checkout/getinfouser?idUser=${idUser}`,
    method: "post",
    data,
  });
};

const apiCreateBlog = (data) => {
  return axios({
    url: `/api/blog/addblog`,
    method: "post",
    data,
  });
};

const apiGetBlog = (id) => {
  return axios({
    url: `/api/blog/getblog/${id}`,
    method: "get",
  });
};

const apiGetListBlog = () => {
  return axios({
    url: `/api/blog/getlist`,
    method: "get",
  });
};

const apiDeleteBlog = (id) => {
  return axios({
    url: `/api/blog/delete/${id}`,
    method: "delete",
  });
};

const apiEditBlog = (data) => {
  return axios({
    url: `/api/blog/edit`,
    method: "put",
    data,
  });
};

export {
  apiEditBlog,
  apiDeleteBlog,
  apiGetListBlog,
  getAllUsers,
  createUser,
  apiLogin,
  deleteCartUser,
  getCartUser,
  apiCheckOut,
  updateUser,
  bannedUser,
  getListUsersNotBanned,
  apiGetBlog,
  apiCreateBlog,
};
