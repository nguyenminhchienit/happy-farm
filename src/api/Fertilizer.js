import axios from "../../axios";


const getAll = async ()=> {
    return await axios.get("/api/fertilizer/listallfer")
}


const getById = (id_Fertilizer) =>{
    return axios.get(`/api/fertilizer/getfertilizer/${id_Fertilizer}`)
}


export  {
    getAll , 
    getById ,

}