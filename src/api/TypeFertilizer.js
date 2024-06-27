import axios from "../../axios";

const getAllTypeProduct = () => {
  return axios.get("/api/typefertilizer/getListType");
};

export { getAllTypeProduct };
