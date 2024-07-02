import axios from "../../axios";

const getAll = async () => {
  return await axios.get("/api/fertilizer/listfer");
};

const getById = (id_Fertilizer) => {
  return axios.get(`/api/fertilizer/getfertilizer/${id_Fertilizer}`);
};

const addToCart = (idItems, quantity, idUser) => {
  return axios({
    url: `/api/cart/additems?idItems=${idItems}&quantity=${quantity}&idUser=${idUser}`,
    method: "post",
  });
};

const apiCreateProduct = (data) => {
  return axios({
    url: "/api/fertilizer/addnew",
    method: "post",
    data,
  });
};

const apiMostBuy = () => {
  return axios({
    url: "/api/fertilizer/mostbuy",
    method: "get",
  });
};

const apiRecentAdd = () => {
  return axios({
    url: "/api/fertilizer/recentadd",
    method: "get",
  });
};

const apiCheapPrice = () => {
  return axios({
    url: "/api/fertilizer/cheaper",
    method: "get",
  });
};

const apiExpensive = () => {
  return axios({
    url: "/api/fertilizer/expensive",
    method: "get",
  });
};

export {
  getAll,
  getById,
  addToCart,
  apiCreateProduct,
  apiCheapPrice,
  apiMostBuy,
  apiExpensive,
  apiRecentAdd,
};
