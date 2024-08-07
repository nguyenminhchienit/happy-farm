/* eslint-disable react/prop-types */
import { memo } from "react";
import clsx from "clsx";

const SelectForm = ({
  label,
  register,
  errors,
  options = [],
  id,
  validate,
  style,
  fw,
  defaultValue,
}) => {
  return (
    <div className={clsx("flex flex-col gap-1 w-full my-4", style)}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        {...register(id, validate)}
        className={clsx("form-select", fw && "w-full")}
        defaultValue={defaultValue}
      >
        <option value="">Choose</option>
        {options?.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      {errors[id] && (
        <small className="text-red-500 pt-1">{errors[id]?.message}</small>
      )}
    </div>
  );
};

export default memo(SelectForm);
