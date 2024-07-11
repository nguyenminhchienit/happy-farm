/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { editUserRole } from "../../../api/UserRoles.js";
import { useNavigate } from "react-router-dom";

const EditUserRole = ({ item }) => {
  const navigate = useNavigate();

  const [myformData, setMyFormData] = useState({
    idRoles: "",
    nameRoles: "",
    // delete : false
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setMyFormData({
      ...myformData,
      [id]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Data to be sent:", myformData);
    try {
      const response = await editUserRole(myformData.idRoles , myformData);
      if (response) {
        console.log(response);
        alert("Sửa Thành Công");
        navigate("/admin/manage-userRoles");
      }
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };

  useEffect(() => {
    if (item) {
      const { idRoles, nameRoles , delete : deleteItem} = item;
      console.log("item nhan dc ", item);
      setMyFormData({
        idRoles,
        nameRoles,
        delete : deleteItem
      });
    }
    console.log("đây là form data ", myformData);
  }, [item]);

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Sửa Quyền Người Dùng</h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nameOrigin"
            >
              Tên Quyền Người Dùng
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nameRoles"
              name="nameRoles"
              type="text"
              placeholder="Enter code role user "
              value={myformData.nameRoles}
              onChange={handleInputChange}
            />
          </div>




      
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="delete"
            >
              Hiển Thị
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="delete"
              name="delete"
              type="text"
              placeholder="Enter code role user "
              value={myformData.delete}
              onChange={handleInputChange}
              >
            <option value={true}> true </option>
            <option value={false}> false </option>
            </select>
          </div> 





        </div>

        <button
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Sửa
        </button>
      </form>
    </div>
  );
};

export default EditUserRole;
