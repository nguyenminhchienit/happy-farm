import { useState , useEffect } from "react";
import { updateOriginFertilizer } from "../../../api/OriginFertilizer";
import { useNavigate } from "react-router-dom";

const EditOrigin = ({item}) => {

  const navigate = useNavigate();
  const [myformData, setMyFormData] = useState({
    idOrigin:"",
    nameOrigin: "",
    delete: "false", 
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
      const response = await updateOriginFertilizer(myformData.idOrigin , myformData);
      if(response){
        console.log(response)
        alert("Sửa Thành Công")
        navigate("/admin/manage-origin")
      }
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };



  useEffect(() => {
    if (item) {
      const {idOrigin , nameOrigin , delete: isDeleted} = item
      console.log("item nhan dc ", item )
      setMyFormData({
        idOrigin , 
        delete : isDeleted.toString() ,
        nameOrigin
      })
    }
    console.log("đây là form data ", myformData)
  }, [item]);

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Sửa Tên Nguồn Gốc Xuất Xứ</h2>
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
              id="nameOrigin"
              name="nameOrigin"
              type="text"
              placeholder="Enter orgin name"
               value={myformData.nameOrigin}
              onChange={handleInputChange}
            />
          </div>

          {/* Is Delete */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="delete"
            >
              Hiển Thị
            </label>
            <select
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="delete"
              name="delete"
              value={myformData.delete}
              onChange={handleInputChange}
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>


        </div>

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Sửa
        </button>

        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Trở Lại
        </button>

      </form>
    </div>
  );
};

export default EditOrigin;