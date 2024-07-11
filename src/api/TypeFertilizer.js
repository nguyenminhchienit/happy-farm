import axios from "../../axios";

const getAllTypeProduct = () => {
  return axios.get("/api/typefertilizer/getListType");
};

const CreateTypefertilizer = (data) =>{
  return axios.post("/api/typefertilizer/addnew",data)
}

const getAllTypeFertilizer = () =>{
  return axios.get("/api/typefertilizer/getListType")
}

const getAllTypeFertilizerNotDelete = () =>{
  return axios.get("/api/typefertilizer/notDelType")
}

const editTypeFertilizer = (id , data ) =>{
  return axios.put(`/api/typefertilizer/editTypeFertilizer/${id}`, data)
}

export { getAllTypeProduct , CreateTypefertilizer  , 
    getAllTypeFertilizer  , getAllTypeFertilizerNotDelete , editTypeFertilizer};
