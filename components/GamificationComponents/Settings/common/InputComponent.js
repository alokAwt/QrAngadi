import React from "react";
import Label from "./Label";
function InputComponent({ name, id, placeholder, value, setValue, type }) {
  return (
    <div className="mt-3">
      <Label name={name} id={id} />
      <div className="border-1 border-[#C8C8C8] max-w-fit rounded-md">
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-0 focus:ring-0 rounded-md placeholder:text-sm w-[330px]"
        />
      </div>
    </div>
  );
}

export default InputComponent;
