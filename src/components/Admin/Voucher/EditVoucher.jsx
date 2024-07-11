/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { UpdateVoucher } from "../../../api/Voucher";
import { useNavigate } from "react-router-dom";

const EditVoucher = ({ item }) => {
  const navigate = useNavigate();

  const [myformData, setMyFormData] = useState({
    idVoucher: "",
    codeVoucher: "",
    discountPercent: "",
    startDate:"",
    endDate: "",
    delete: false,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setMyFormData({
      ...myformData,
      [id]: value,
    });
  };
  const isStartDateBeforeEndDate = (startDate, endDate) => {
    return new Date(startDate) < new Date(endDate);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // kiểm tra xem ngày kết thúc phải nhỏ hơn ngày tạo
    if (!isStartDateBeforeEndDate(myformData.startDate , myformData.endDate)) {
      alert("ngay bat dau < ngay ket thuc")
      return ;
    }

    console.log("Data to be sent:", myformData);




    try {
      const response = await UpdateVoucher(myformData);
      if (response) {
        console.log(response);
        alert("Sửa Thành Công");
        navigate("/admin/manage-Voucher");
      }
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };

  useEffect(() => {
    if (item) {
      const { idVoucher, codeVoucher , discountPercent ,startDate ,endDate } = item;
      console.log("item nhan dc ", item);
      setMyFormData({
        idVoucher,
        codeVoucher,
        discountPercent,
        startDate,
        endDate,
        
      });
    }
    console.log("đây là form data ", myformData);
  }, [item]);

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Sửa Mã Giảm Giá</h2>
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
              Tên Thương Hiệu
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="codeVoucher"
              name="codeVoucher"
              type="text"
              placeholder="Enter code Voucher name"
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


        <div className="flex flex-wrap -mx-3 mb-6">
          
       <select
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="delete"
              name="delete"
              placeholder="Enter banned"
              value={myformData.delete}
              onChange={handleInputChange}
       >
       <option value={true}>true</option> 
       <option value={false}>false</option> 
       </select>

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

export default EditVoucher;
