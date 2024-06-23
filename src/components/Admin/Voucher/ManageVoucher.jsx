import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Tên loại", "Phân bón", "Giá", "Thương hiệu", "Hành động"];

const TABLE_ROWS = [
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

export function ManageVoucher() {
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
              Quản lý mã khuyến mãi
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
            {TABLE_ROWS.map(({ name, job, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color=""
                          className="font-normal text-2xl text-black"
                        >
                          {name}
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
                        {job}
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
                        {online}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="red"
                      className="font-normal text-2xl text-red-700"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-2`}>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-orange-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Sửa
                    </button>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-red-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
