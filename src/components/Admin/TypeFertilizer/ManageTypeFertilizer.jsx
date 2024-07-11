/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import {
  getAllTypeFertilizerNotDelete,
  editTypeFertilizer,
  getAllTypeFertilizer,
} from "../../../api/TypeFertilizer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Id", "Tên Thương Hiệu", "Trạng Thái Ẩn Hiện", "Hành Động"];

const ManageTypeFertilizer = ({ setSelectedItem }) => {
  const [TypeFertilizers, setTypeFertilizers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllTypeFertilizer();
        console.log("dữ liệu gọi đc ", response.data);
        setTypeFertilizers(response.data); // Giả sử response.data chứa danh sách phân bón
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (item) => {
    console.log("day la item ", item);
    setSelectedItem(item);
    navigate(`/admin/edit-type-fertilizer/${item.idTypeFertilizer}`);
  };

  const handleDelete = async (item) => {
    if (window.confirm("bạn có muốn xóa ")) {
      console.log("đây là giá trị  muốn xoă ", item);
      item.delete = true;
      try {
        const response = await editTypeFertilizer(item.idTypeFertilizer, item);
        console.log("dữ liệu nhận đc ", response);
        if (response.data) alert("xóa thành công");
        window.location.reload();
      } catch (error) {
        console.log(error.response);
      }
    } else {
      console.log("đây", item);
    }
  };

  return (
    <div>
      <Card className="m-10">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex items-center justify-between gap-8">
            <div>
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-4xl mb-3"
              >
                Quản lý Loại Phân Bón
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
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TypeFertilizers.map((item, index) => {
                const isLast = index === TypeFertilizers.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={item.idTypeFertilizer}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color=""
                            className="font-normal text-2xl text-black"
                          >
                            {item.idTypeFertilizer}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {item.nameTypeFertilizer}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {item.delete.toString()}
                        </Typography>
                      </div>
                    </td>

                    <td className={`${classes} flex gap-2`}>
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => handleEdit(item)}
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
    </div>
  );
};

export default ManageTypeFertilizer;
