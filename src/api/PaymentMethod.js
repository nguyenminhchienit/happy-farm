import axios from "../../axios"

const GetListPaymentNotDelete = () =>{
    return axios.get("/api/paymentmethod/getlistpaymentnotdel")
} 

const AddPaymentMethod = (data) =>{
    return axios.post("/api/paymentmethod/addnew",data)
}

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