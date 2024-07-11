import axios from "../../axios"


const getListUserRoles = () =>{
    return axios.get("/api/userrole/getListUserRoles")
}

const UserroleAddNew = (data) =>{
    return axios.post("/api/userrole/addNew",data)
}


const editUserRole = (id,data) =>{
    return axios.put(`/api/userrole/editUserRole/${id}`,data)
}


const DeleteUserRole = (id) =>{
    return axios.delete(`/api/userrole/deleteUserRole/${id}`)
} 

 
export {
    getListUserRoles ,
    UserroleAddNew ,
    editUserRole ,
    DeleteUserRole

}