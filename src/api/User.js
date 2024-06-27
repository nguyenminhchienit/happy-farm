import axios from "../../axios";

const getAll = () =>{
    return axios.get("/api/user/getListUsers")
}

const createUser = (formData) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
  
    return axios.post("/api/user/addNew", formData, config);
  };

export {
    getAll  as getAllUsers,
    createUser 
}