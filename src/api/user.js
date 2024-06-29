import axios from "../../axios";



const getAllUsers = () => {
  return axios.get("/api/user/getListUsers");
};




const createUser = (formData) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };

  // return axios.post("/api/user/addNew", formData, config);




  return axios({
    url: "/api/user/addNew",
    method: "post",
    formData,
  });

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

export {
  getAllUsers,
  createUser,
  apiLogin,
  deleteCartUser,
  getCartUser,
};