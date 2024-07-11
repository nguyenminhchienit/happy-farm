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
import { useEffect, useState } from "react";
import {
  getListUsersNotBanned,
  updateUser,
  bannedUser,
} from "../../../api/User";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Tên", "Họ và Tên", "Email", "Quyền", "Hành động"];

export function ManageUser({ setSelectedItem }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListUsersNotBanned();
        console.log("Fetched data:", response);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (item) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      const {
        roles: { idRoles, ...rolesWithoutId },
        ...userWithoutIdRoles
      } = item;
      const user = {
        ...userWithoutIdRoles,
        nameRoles: rolesWithoutId.nameRoles,
      };
      console.log("User without idRoles:", user);
      // Handle deletion logic here

      const response = await bannedUser(user.idUser);
      if (response) {
        alert("xóa thành công");
        window.location.reload();
      }
      console.log(response);
    }
  };

  const handleEidt = (item) => {
    console.log(item);
    setSelectedItem(item);
    navigate("/admin/edit-user/" + item.idUser);
  };

  return (
    <Card className="m-10">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="text-4xl mb-3"
            >
              Quản lý người dùng
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
                    {head}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.username}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          className="font-normal text-2xl text-black"
                        >
                          {item.username}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        className="font-normal text-2xl text-black"
                      >
                        {item.fullName}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        className="font-normal text-2xl text-black"
                      >
                        {item.email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-2xl text-red-700"
                    >
                      {item.roles.nameRoles}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-2`}>
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      onClick={() => handleEidt(item)}
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
