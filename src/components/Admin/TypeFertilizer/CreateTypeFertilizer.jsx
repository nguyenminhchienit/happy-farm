import { CreateTypefertilizer } from "../../../api/TypeFertilizer";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const CreateTypeFertilizer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [myformData, setMyFormData] = useState({
  //   nameTypeFertilizer: "",
  //   delete: "false", // Default value as a string
  // });

  const navigate = useNavigate();

  // const handleInputChange = (event) => {
  //   const { id, value } = event.target;
  //   setMyFormData({
  //     ...myformData,
  //     [id]: value,
  //   });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log("Data to be sent:", myformData);
  //   try {
  //     const response = await CreateTypefertilizer(myformData);
  //     if(response){
  //       alert("tạo thành công");
  //       navigate("/admin/manage-typefertilizer");
  //     }
  //   } catch (error) {
  //     console.error("Error creating origin:", error);
  //     // Handle error here
  //   }
  // };

  const onSubmit = async (myformData) => {
    console.log("data ", myformData);
    try {
      const response = await CreateTypefertilizer(myformData);
      if (response) {
        alert("tạo thành công");
        navigate("/admin/manage-typefertilizer");
      }
    } catch (error) {
      console.error("Error creating origin:", error);
      // Handle error here
    }
  };

  return (
    <div className="flex flex-col align-items-center">
      <h2 className="my-10 title font-bold text-3xl">Thêm Loại Phân Bón</h2>
      <form
        className="w-full max-w-screen-xl flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="nameOrigin"
            >
              Tên Loại Phân Bón
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nameTypeFertilizer"
              name="nameTypeFertilizer"
              type="text"
              placeholder="Enter brand name"
              // value={myformData.nameTypeFertilizer}
              // onChange={handleInputChange}
              {...register("nameTypeFertilizer", {
                required: "khong de rong",
                maxLength: {
                  value: 50,
                  message: "khong vuot qua 50 ky tu",
                },
              })}
            />
            {errors.nameTypeFertilizer && (
              <span className="text-red-500 text-xs">
                {errors.nameTypeFertilizer.message}
              </span>
            )}
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
              // value={myformData.delete}
              // onChange={handleInputChange}
              {...register("delete", {})}
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
            {errors.delete && (
              <span className="text-red-500 text-xs">
                {errors.delete.message}
              </span>
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

export default CreateTypeFertilizer;
