import axios from "../../axios"

const getAll = () =>{
    return axios.get("/api/typefertilizer/getlisttype")
}


export {
    getAll ,

}