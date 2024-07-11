import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewVoucher } from "../../../api/Voucher";
const CreateVoucher = () => {

  

  const [myformData, setMyFormData] = useState({
    codeVoucher: "",
    discountPercent: "",
    startDate:"",
    endDate: "",
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
      const response = await addNewVoucher(myformData);
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
      <h2 className="my-10 title font-bold text-3xl">Thêm Mã Giảm Giá</h2>
      <form className="w-full max-w-screen-xl flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="codeVoucher"
            >
              Tên Mã Giảm Giá
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="codeVoucher"
              name="codeVoucher"
              type="text"
              placeholder="Enter Voucher Code"
              value={myformData.codeVoucher}
              onChange={handleInputChange}
            />
          </div>

          {/* Discount Percent */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="discountPercent"
            >
              Phần Trăm Giảm Giá
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="discountPercent"
              name="discountPercent"
              type="number"
              min="0"
              max="100"
              placeholder="Enter Discount Percent"
              value={myformData.discountPercent}
              onChange={handleInputChange}
            />
          </div>

        </div>



        <div className="flex flex-wrap -mx-3 mb-6">
          
          
          
          {/* Ngày Bắt Đầu */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="startDate"
            >
              Ngày Bắt Đầu
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="startDate"
              name="startDate"
              type="datetime-local"
              placeholder="dd/mm/yyyy"
              value={myformData.startDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Ngày Kết Thúc */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="endDate"
            >
                Ngày Kết Thúc
              </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="endDate"
              name="endDate"
              type="datetime-local"
              min="0"
              max="100"
              placeholder="dd/mm/yyyy"
              value={myformData.endDate}
              onChange={handleInputChange}
            />
          </div>

        </div>

        

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Thêm
        </button>
      </form>
    </div>
  );
};

export default CreateVoucher;
