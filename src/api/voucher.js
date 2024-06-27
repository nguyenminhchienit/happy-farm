import axios from "../../axios";

const apiCheckCode = (code) => {
  return axios({
    url: `/api/voucher/checkvalid?code=${code}`,
    method: "get",
  });
};

export { apiCheckCode };
