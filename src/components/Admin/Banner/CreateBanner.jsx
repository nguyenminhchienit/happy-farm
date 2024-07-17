import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Addbanner } from "../../../api/Banner.js";

const CreateBanner = () => {
  const [myformData, setMyFormData] = useState({
    image: null, // Lưu trữ đối tượng File
    expireDate: "",
    url: "",
  });
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value, files } = event.target;
    if (id === "image") {
      // Xử lý file hình ảnh được chọn
      if (files.length > 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviewUrl(reader.result); // Đọc và hiển thị xem trước hình ảnh
        };
        reader.readAsDataURL(files[0]); // Đọc file dưới dạng base64 để hiển thị xem trước
        setMyFormData({
          ...myformData,
          image: files[0], // Lưu trữ đối tượng File vào state
        });
      }
    } else {
      // Xử lý các trường thông tin khác (expireDate, url)
      setMyFormData({
        ...myformData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", myformData.image); // Thêm file hình ảnh vào FormData
    formData.append("expireDate", myformData.expireDate); // Thêm các trường thông tin khác
    formData.append("url", myformData.url);

    try {
      const response = await Addbanner(formData); // Gửi FormData lên server
      console.log("Response:", response);
      if (response) {
        alert("Tạo thành công");
        navigate("/admin/manage-banner");
      }
      // Xử lý thành công ở đây
    } catch (error) {
      console.error("Error creating banner:", error);
      // Xử lý lỗi ở đây
    }
  };

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm Banner</h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Ngày hết hạn */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="expireDate"
            >
              Ngày Hết Hạn
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="expireDate"
              name="expireDate"
              type="text"
              placeholder="ngày/tháng/năm"
              value={myformData.expireDate}
              onChange={handleInputChange}
            />
          </div>

          {/* URL */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="url"
            >
              URL
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="url"
              name="url"
              type="text"
              placeholder="đường dẫn khi click vào banner"
              value={myformData.url}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Hình banner */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Hình Banner
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="image"
              name="image"
              type="file"
              onChange={handleInputChange}
            />
            {imagePreviewUrl && (
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="mt-3 rounded-lg shadow-md"
                style={{width:"1000px"}}
              />
            )}
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

export default CreateBanner;
