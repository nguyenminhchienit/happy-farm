import axios from "../../axios"

const getAllTypeFertilizer = () =>{
    return axios.get("/api/typefertilizer/getListType")
}


export {
    getAllTypeFertilizer ,

}