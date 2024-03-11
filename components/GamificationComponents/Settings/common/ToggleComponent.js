import React from "react";
import { cn } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";
import { TbCheck } from "react-icons/tb";
function ToggleComponent({ leftText, rightText, selected, setSelected }) {
  const classNamesforswitch = {
    base: cn("w-full"),
    wrapper:
      "p-0 ps-1 h-8 w-16 overflow-visible group-data-[selected=true]:bg-buttoncolor",
    thumb: cn(
      "w-6 h-6 border-2 shadow-lg",
      "group-data-[hover=true]:border-buttonopacitycolor",
      "group-data-[selected=true]:ml-8",
      "group-data-[pressed=true]:w-7",
      "group-data-[selected]:group-data-[pressed]:ml-4"
    ),
  };
  return (
    <div className="flex gap-1 w-fitt items-center my-2">
      {leftText ? (
        <p className="text-md font-medium">
          {leftText}
          <span className="text-red-600">*</span>
        </p>
      ) : null}
      <Switch
        isSelected={selected}
        classNames={classNamesforswitch}
        onValueChange={() => setSelected((prev) => !prev)}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <TbCheck className="text-buttoncolor" />
          ) : (
            <RxCross1 className={className} />
          )
        }
        endContent={<p>OFF</p>}
      />
      {rightText ? (
        <p className="text-md font-medium">
          {rightText}
          <span className="text-red-600">*</span>
        </p>
      ) : null}
    </div>
  );
}

export default ToggleComponent;
