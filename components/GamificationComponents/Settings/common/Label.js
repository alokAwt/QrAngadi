import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
function Label({ name, id }) {
  return (
    <div className="flex items-center">
      <label className="text-sm font-[600]" htmlFor={`${id ? id : ""}`}>
        {name}
      </label>
      <span className="text-[#ED0000]">*</span>
      <BsInfoCircleFill className="text-[#1877f2] ms-2" />
    </div>
  );
}

export default Label;
