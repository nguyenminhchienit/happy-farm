import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";

const Banners = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={Banner1}
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-105"
              alt=""
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={Banner2}
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-105"
              alt=""
            />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={Banner3}
              className="w-full h-64 object-cover transition duration-300 transform hover:scale-105"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
