import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserroleAddNew } from "../../../api/UserRoles.js";
import { useForm } from "react-hook-form";

const CreateUserRole = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [myformData, setMyFormData] = useState({
    nameRoles: "",
    
  });

  const navigate = useNavigate();

  // const handleInputChange = (event) => {
  //   const { id, value } = event.target;
  //   setMyFormData({
  //     ...myformData,
  //     [id]: id === "idDelete" ? value === "true" : value, // Adjust boolean values for idDelete
  //   });
  // };

  // const handleSubmitRole = async (event) => {
  //   event.preventDefault();
  //   console.log("Data to be sent:", myformData);
  //   try {
  //     const response = await UserroleAddNew(myformData);
  //     console.log("Response:", response);
  //     if (response) {
  //       alert("Tạo thành công");
  //       navigate("/admin/manage-voucher");
  //     }
  //     // Handle successful response here
  //   } catch (error) {
  //     console.error("Error creating origin:", error);
  //     // Handle error here
  //   }
  // };


  const handleSubmitRole = async (data) => {
    console.log("Data to be sent:", data);
    try {
      setMyFormData(...prev , data)
      // const response = await UserroleAddNew(myformData);
      console.log("Response:", response);
      if (response) {
        alert("Tạo thành công");
        navigate("/admin/manage-voucher");
      }
      // Handle successful response here
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };


  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm Quyền Người Dùng</h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit(handleSubmitRole)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nameRoles"
            >
              Tên Quyền Người Dùng
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nameRoles"
              name="nameRoles"
              type="text"
              placeholder="Enter Role User"
              {...register("nameRoles", {
                required: "Không để trống dữ liệu",
                maxLength: {
                  value: 50,
                  message: "Tên quyền người dùng không được dài quá 50 ký tự", 
                },
              })}
            />
            {errors.nameRoles && <span className="text-red-500 text-xs">{errors.nameRoles.message}</span>}
          </div>
        </div>

        <button
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Thêm
        </button>
      </form>
    </div>
  );
};

export default CreateUserRole;
