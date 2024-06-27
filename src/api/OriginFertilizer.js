import axios from "../../axios";

const getAllOrigin = () => {
  return axios.get("/api/origin/getlistorigin");
};

const getById = (idOriginFertilizer) => {
  return axios.get(`/api/origin/getorigin/${idOriginFertilizer}`);
};

const findByName = (nameOriginFertilizer) => {
  return axios.get(`/api/origin/find/${nameOriginFertilizer}`);
};

const createOriginFertilizer = (data) => {
  return axios.post(`/api/origin/addnew`, data);
};

const updateOriginFertilizer = (idOriginFertilizer, data) => {
  return axios.put(`/api/origin/editorigin/${idOriginFertilizer}`, data);
};

const deleteOriginFertilizer = (idOriginFertilizer) => {
  return axios.delete(`/api/brand/deleteorigin/${idOriginFertilizer}`);
};

export {
  getAllOrigin,
  getById,
  findByName,
  createOriginFertilizer,
  updateOriginFertilizer,
  deleteOriginFertilizer,
};
