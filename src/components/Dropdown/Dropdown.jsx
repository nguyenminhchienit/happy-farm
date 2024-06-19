/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-2.5 px-4 rounded transition bg-black duration-200 hover:bg-gray-700 focus:outline-none"
      >
        {title}
      </button>
      {open && (
        <div className="absolute left-0 w-full mt-2 bg-gray-800 rounded shadow-lg z-20">
          {" "}
          {/* Thêm z-20 */}
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
