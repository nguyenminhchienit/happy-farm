import moment from "moment/moment";
import { useEffect, useState } from "react";
import { createUser } from "../../../api/User";
import { useNavigate } from "react-router-dom";
import {getListUserRoles} from "../../../api/UserRoles"

const ChangePasswordUser = () => {
  const [roles , setRoles] = useState([])
  const [myformData, setMyFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    dob: "",
    email: "",
    roleName: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setMyFormData({
      ...myformData,
      [id]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedFormData = {
      ...myformData,
      dob: moment(myformData.dob).format("DD/MM/YYYY"),
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

    try {
      const response = await createUser(formData); 
      if (response) {
        alert("tạo thành công");
        navigate("/admin/manage-users");
      }
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error.response);
    }
  };

  useEffect(()=>{
    getListUserRoles()
    .then( response =>{
      setRoles(response.data)
    })
  },[])

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm người dùng</h2>
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

        {/* Mật khẩu */}
        <div className="flex flex-wrap -mx-3 mb-6">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Mật Khẩu
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              name="password"
              type="password"
              placeholder="mật khẩu"
              value={myformData.password}
              onChange={handleInputChange}
            />
          </div>

          {/* roles  */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="roleName"
            >
              Quyền
            </label>
            <div className="relative">

            <select
             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="roleName"
                name="roleName"
                type="roleName"
                placeholder="Albuquerque"
                value={myformData.roleName}
                onChange={handleInputChange}
            >
              {
                roles.map((item)=>(
                  <option key={item.idRoles} value={item.nameRoles} >
                    {item.nameRoles}
                  </option>
                ))
              }

            </select>
            
            </div>
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

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordUser;
