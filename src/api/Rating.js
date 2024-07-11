import axios from "../../axios";

const apiAddRating = (data) => {
  return axios({
    url: `/api/ratings/addnew`,
    method: "post",
    data,
  });
};

const apiGetRating = (idFer) => {
  return axios({
    url: `/api/ratings/getListByIdFer/${idFer}`,
    method: "get",
  });
};

export { apiAddRating, apiGetRating };
