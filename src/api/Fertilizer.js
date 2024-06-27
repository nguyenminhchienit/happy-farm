import axios from "../../axios";

const getAll = async () => {
  return await axios.get("/api/fertilizer/listallfer");
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

export { getAll, getById, addToCart, apiCreateProduct };
