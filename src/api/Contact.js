import axios from "../../axios";

const apiAddContact = (data) => {
  return axios({
    url: `/api/contacts/addcontact`,
    method: "post",
    data,
  });
};

export { apiAddContact };
