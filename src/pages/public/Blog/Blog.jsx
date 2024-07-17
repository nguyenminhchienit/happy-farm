/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { apiGetListBlog } from "../../../api/User";
import { Link } from "react-router-dom";
import { TablePrice } from "../../../components/TablePrice/TablePrice";

export function Blog() {
  const [blogs, setBlogs] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    apiGetListBlog().then((res) => {
      if (res?.status) {
        setBlogs(res?.data);
      }
    });
  }, []);

  console.log(blogs);
  return (
    <div className="mt-[200px]">
      <div className="bg-gray-100 px-2 py-10 flex">
        <div>
          {blogs?.map((item, index) => {
            return (
              <article
                key={index}
                className="mx-20 my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center"
              >
                <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
                  <img
                    className="rounded-2xl"
                    src={item?.imagePresent}
                    alt=""
                  />
                </div>
                <div className="py-4 sm:py-8">
                  <Link
                    to={`/bai-viet/${item?.idBlog}`}
                    className="mb-6 block text-2xl font-medium text-gray-700"
                  >
                    {item?.title}
                  </Link>

                  <div className="flex items-center">
                    <p className="w-56 text-gray-400">
                      <strong className="block font-medium text-xl">
                        {item?.userCreate?.fullName}
                      </strong>
                      <span className="text-sm ">{item?.timeCreate}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {windowWidth > 992 && (
          <div>
            <TablePrice side={true} />
          </div>
        )}
      </div>
    </div>
  );
}
