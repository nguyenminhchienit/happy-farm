import axios from "../../axios";

const apiCheckCode = (code) => {
  return axios({
    url: `/api/voucher/checkvalid?code=${code}`,
    method: "get",
  });
};

const apiGetBanner = () => {
  return axios({
    url: `/api/banner/getall`,
    method: "get",
  });
};

export { apiCheckCode, apiGetBanner };
