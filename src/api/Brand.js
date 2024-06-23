import axios from "../../axios";

const getAll = () =>{
    return axios.get("/api/brand/getlistbrand")
}

const findByName = (brandName) =>{
    return axios.get(`/api/brand/find/${brandName}`)
}
/* 
const data = {
    nameBrand: "trung nguyen",
    idDelete: false
};
*/
const createBrand = (data) =>{
    return axios.post("/api/brand/addnew",data)
}

const deleteBrand = (idBrand) =>{
    return axios.delete(`/api/brand/deletebrand/${idBrand}`)
}

const updateBrand = (idBrand,data) =>{
    return axios.put(`/api/brand/editbrand/${idBrand}`,data)
}

export {
    getAll ,
    findByName ,
    createBrand ,
    deleteBrand ,
    updateBrand
}