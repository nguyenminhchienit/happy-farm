import axios from "../../axios";

const getAll = () => {
  return axios.get("/api/user/getListUsers");
};

const createUser = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post("/api/user/addNew", formData, config);
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

export {
  getAll as getAllUsers,
  createUser,
  apiLogin,
  deleteCartUser,
  getCartUser,
  apiCheckOut,
};
