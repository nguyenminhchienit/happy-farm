/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const QuantityBox = (props) => {
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    if (props.quantity >= 1) {
      setInputValue(props.quantity);
    }
  }, [props.quantity]);

  const plus = () => {
    setInputValue(inputValue + 1);
    props.handleQuantity(inputValue + 1);
  };

  const minus = () => {
    if (inputValue !== 1) {
      setInputValue(inputValue - 1);
      props.handleQuantity(inputValue - 1);
    }
  };

  return (
    <div className="addCartSection pt-4 pb-4 d-flex align-items-center ">
      <div className="counterSec mr-3">
        <input type="number" value={inputValue} />
        <span
          className="arrow plus"
          onClick={() => {
            plus();
          }}
        >
          <KeyboardArrowUpIcon />
        </span>

        <span
          className="arrow minus"
          onClick={() => {
            if (inputValue !== 1) {
              minus();
            }
          }}
        >
          <KeyboardArrowDownIcon />
        </span>
      </div>
    </div>
  );
};

export default QuantityBox;
