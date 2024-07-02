import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBrand } from "../../../api/Brand.js";

const CreateBrand = () => {
  const [myformData, setMyFormData] = useState({
    nameBrand: "",
    isDelete: "false", // Default value as a string
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
    console.log("Data to be sent:", myformData);
    try {
      const response = await createBrand(myformData);
      console.log("Response:", response);
      if(response){
        alert("Tạo thành công");
        navigate("/admin/manage-brand")
      }
      // Handle successful response here
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm Thương Hiệu</h2>
      <form className="w-full max-w-screen-xl flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nameOrigin"
            >
              Tên Thương Hiệu
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nameBrand"
              name="nameBrand"
              type="text"
              placeholder="Enter brand name"
              value={myformData.nameBrand}
              onChange={handleInputChange}
            />
          </div>

          {/* Is Delete */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="isDelete"
            >
              Hiển Thị
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="isDelete"
              name="isDelete"
              value={myformData.idDelete}
              onChange={handleInputChange}
            >
              <option value="false">True</option>
              <option value="true">False</option>
            </select>
          </div>
        </div>

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default CreateBrand;