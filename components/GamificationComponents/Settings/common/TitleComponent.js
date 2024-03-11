import React from "react";
import Label from "./Label";
function TitleComponent({ name, placeholder, id, data, setData }) {
  let arr = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  return (
    <div className="w-[330px] min-w-fit mt-3">
      <Label name={name} id={id} />
      <div className="flex gap-2">
        <div className="border-1 border-[#C8C8C8] max-w-fit rounded-md">
          <input
            placeholder={placeholder}
            type="text"
            id={id}
            value={data.title}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
            className="border-0 focus:ring-0 rounded-md placeholder:text-sm w-[330px]"
          />
        </div>
        <div className="border-1 border-[#C8C8C8] max-w-fit rounded-md flex justify-center items-center min-w-[42px] italic text-xl">
          <select
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, pixel: e.target.value };
              })
            }
            value={data.pixel}
            className="border-0 focus:ring-0 rounded-md"
          >
            {arr.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item} px
                </option>
              );
            })}
          </select>
        </div>
        <div
          className="border-1 border-[#C8C8C8] max-w-fit rounded-md flex justify-center items-center min-w-[42px] font-semibold text-xl"
          onClick={() =>
            setData((prev) => {
              return { ...prev, bold: !data.bold };
            })
          }
        >
          B
        </div>
        <div
          className="border-1 border-[#C8C8C8] max-w-fit rounded-md flex justify-center items-center min-w-[42px] italic text-xl"
          onClick={() =>
            setData((prev) => {
              return { ...prev, italic: !data.italic };
            })
          }
        >
          I
        </div>
      </div>
    </div>
  );
}

export default TitleComponent;
