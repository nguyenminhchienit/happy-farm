import axios from "../../axios";

const apiGetPaymentMethod = () => {
  return axios({
    url: `/api/paymentmethod/getlistpayment`,
    method: "get",
  });
};

export { apiGetPaymentMethod };
