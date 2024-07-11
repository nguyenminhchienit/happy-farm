import axios from "../../axios"

const Getallbanner = () =>{
    return axios.get("/api/banner/getall")
}
const Addbanner = (data) =>{
    return axios.post("/api/banner/addbanner",data)
}
const Deletebanner = (id) =>{
    return axios.delete(`/api/banner/deletebanner?id=${id}`)
}
export {
    Getallbanner ,
    Addbanner ,
    Deletebanner ,
}