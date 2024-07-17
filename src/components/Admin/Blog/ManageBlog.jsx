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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDeleteBlog, apiGetListBlog } from "../../../api/User";

const TABLE_HEAD = ["Tên bài viết", "Đăng bởi", "Ngày đăng", "Hành động"];

const ManageBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    apiGetListBlog().then((res) => {
      setBlogs(res?.data);
    });
  }, []);

  const handleDelete = async (item) => {
    if (confirm("Bạn có chắc chẵn xóa ? ")) {
      const response = await apiDeleteBlog(item.idBlog);
      if (response?.data) {
        alert("Xóa thành công");
        window.location.reload();
      }
    }
  };

  const handleEdit = (item) => {
    navigate(`/admin/edit-blog/${item.idBlog}`);
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
            {blogs.map((item, index) => {
              const isLast = index === blogs.length - 1;
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
                          {item.title}
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
                        {item?.userCreate?.fullName}
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
                        {item?.timeCreate}
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
  );
};

export default ManageBlog;
