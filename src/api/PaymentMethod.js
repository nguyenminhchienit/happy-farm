import axios from "../../axios"

const GetListPaymentNotDelete = () =>{
    return axios.get("/api/paymentmethod/getlistpaymentnotdel")
} 

const AddPaymentMethod = async (data) => {
    try {
      const response = await axios.post('/api/paymentmethod/addnew', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response;
    } catch (error) {
      console.error("Error in AddPaymentMethod:", error);
      throw error;
    }
  };

const UpdatePaymentMethod = (data) =>{
    return axios.put("/api/paymentmethod/editpayment",data)
}

const DeletePaymentMethod = (id) =>{
    return axios.delete(`/api/paymentmethod/delete/${id}`)
}

export {
    GetListPaymentNotDelete ,
    AddPaymentMethod , 
    UpdatePaymentMethod ,
    DeletePaymentMethod
    
}