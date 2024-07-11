/* eslint-disable react/prop-types */
import moment from "moment/moment";
import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import SelectForm from "../Input/SelectForm";
import { getListUserRoles } from "../../../api/UserRoles.js";
import { updateUser } from "../../../api/User.js";
const EditUser = ({ item }) => {
  const [roles, setRoles] = useState([]);

  const [myformData, setMyFormData] = useState({
    idUser: "",
    username: "",
    fullName: "",
    dob: "",
    email: "",
    roles: "",
    banned: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function loaddata() {
      const response = await getListUserRoles();
      setRoles(response.data);
      console.log(response);
    }
    setMyFormData({
      idUser: item.idUser || "",
      username: item.username || "",
      fullName: item.fullName || "",
      dob: item.dob ? moment(item.dob, "DD/MM/YYYY").format("YYYY-MM-DD") : "",
      email: item.email || "",
      roles: item.roles?.idRoles || "",
      banned: item.banned || false,
    });
    loaddata();
  }, [item]);
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setMyFormData({
      ...myformData,
      [id]: value,
      // nameRoles: null,
      // banned: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedFormData = {
      ...myformData,
      dob: moment(myformData.dob).format("DD/MM/YYYY").toString(),
      //banned: myformData.banned === "true" ? true : myformData.banned === "false" ? false : myformData.banned, // Chuyển đổi thành boolean
    };
    console.log("Form Data Submitted:", formattedFormData);

    const formData = new FormData();
    for (const key in formattedFormData) {
      formData.append(key, formattedFormData[key]);
    }

    // Log FormData entries
    console.log("day la formdata");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    console.log(typeof formData.get("banned")) // hàm này kiểm tra xem giá trị banned là kiểu dữ liệu gì , boolean ....

    try {
      // console.log(formData.get('idUser'))
      const response = await updateUser(formData.get("idUser"), formData);
      if (response) {
        alert("sửa thành công");
        navigate("/admin/manage-users-NotBanned");
      }
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">
        Sửa Thông Tin người dùng
      </h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Tên */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="username"
            >
              Tên
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              name="username"
              type="text"
              placeholder="Jane"
              value={myformData.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Họ và tên */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="fullName"
            >
              Họ và Tên
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Doe"
              value={myformData.fullName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Ngày sinh */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="dob"
            >
              Ngày Sinh
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="dob"
              name="dob"
              type="date"
              placeholder="Albuquerque"
              value={myformData.dob}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                placeholder="Albuquerque"
                value={myformData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* quyền */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="roles"
            >
              quyền
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="roles"
              name="roles"
              type="input"
              placeholder="role"
              value={myformData.roles}
              onChange={handleInputChange}
            >
              {roles.map((item) => (
                <option key={item.idRoles} value={item.idRoles}>
                  {item.nameRoles}
                </option>
              ))}
            </select>
          </div>

          {/* bị khóa  */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="banned"
            >
              Bị Khóa
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="banned"
              name="banned"
              type="input"
              value={myformData.banned}
              onChange={handleInputChange}
            >
              <option value={true} >true</option>
              <option value={false} >false</option>
            </select>
          </div>


        </div>

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sửa
        </button>
        
        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button" 
          onClick={() =>  navigate("/admin/manage-users")}
        >
          tro lai
        </button>
     
      </form>
    </div>
  );
};

export default EditUser;
