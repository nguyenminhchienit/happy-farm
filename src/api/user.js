import axios from "../../axios";

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

export { apiLogin, getCartUser, deleteCartUser };
