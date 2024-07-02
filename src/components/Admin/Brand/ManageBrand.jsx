import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import { getAllBrandNotDetele , updateBrand } from "../../../api/Brand.js"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  
const TABLE_HEAD = ["Id", "Tên Thương Hiệu" , "Trạng Thái Ẩn Hiện","Hành Động"];

const TABLE_ROWS = 
[
  {
    name: "Cà phê",
    job: "Gia Lai",
    online: 112000, 
    date: "Carbon",
    actions: "Sell, Export",
  },
  {
    name: "Hồ tiêu",
    job: "Tây Nguyên",
    online: 203000,
    date: "Viettel",
    actions: "Buy, Process",
  },
  {
    name: "Gạo",
    job: "Đồng Bằng Sông Cửu Long",
    online: 89500,
    date: "Vinaphone",
    actions: "Export",
  },
  {
    name: "Cao su",
    job: "Tây Nguyên",
    online: 145000,
    date: "Nokia",
    actions: "Sell, Process",
  },
  {
    name: "Điều",
    job: "Bình Phước",
    online: 67800,
    date: "Suzuki",
    actions: "Buy, Export",
  },
];

const ManageBrand= ({setSelectedItem}) => {
  const navigate = useNavigate();
  const [brands, setbrands] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBrandNotDetele();
        console.log("dữ liệu gọi đc " , response.data)
        setbrands(response.data); 
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);


  const handleDelete = async (item) =>{
    if(confirm("bạn có chắc chẵn xóa ? ")){

        item.delete = true ;
      const response = await updateBrand(item.idBrand , item)
      if(response.data){
        alert("xóa thành công");
        window.location.reload();
      }
      console.log("item ",item )

    }
  }


  const handleEdit = (item) =>{
    setSelectedItem(item);
    navigate(`/admin/edit-brand/${item.idBrand}`);

  };

  return (
    <Card className="m-10 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-4xl mb-3"
            >
              Quản lý Thương Hiệu
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-0">   
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="black"
                    className="flex items-center text-xl justify-between gap-2 font-bold leading-none"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {brands.map((item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.idBrand}>

                {/* id nguồn gốc */}
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {item.idBrand}
                        </Typography>
                      </div>
                    </div>
                  </td>


                      {/* tên nguồn gốc */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                  
                        {item.nameBrand }
                      </Typography>
                    </div>
                  </td>



                  {/* nguồn gốc xuất xứ */}
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color=""
                        className="font-normal text-2xl text-black"
                      >
                        {(item.delete).toString()}
                      </Typography>
                    </div>
                  </td>






                  <td className={`${classes} flex gap-2`}>
                    <button 
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={()=>handleEdit(item)}
                    >
                      Sửa
                    </button>
                    <button 
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-red-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleDelete(item)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ManageBrand;