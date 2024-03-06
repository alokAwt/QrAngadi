import React, { useContext } from "react";
import { DataContext } from "@/app/gamification/[type]/page";
import { InfoIcon } from "lucide-react";
function General() {
  const { couponName, setCouponName } = useContext(DataContext);

  return (
    <div className="mt-5">
      <p>Enter the details and set up the general settings of your coupon.</p>
      <div className="min-h-[1px] bg-[#919191] my-3"></div>

      <div className="font-semibold text-lg mb-5">General Setting</div>
      <div>
        <div>
          <label htmlFor="couponName" className="text-sm font-[600]">
            Coupon Name
          </label>
          <span className="text-[#ED0000]">*</span>
        </div>
        <div className="border-1 border-[#919191] max-w-fit">
          <input
            type="text"
            id="couponName"
            value={couponName}
            onChange={(e) => setCouponName(e.target.value)}
            className="border-0 focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
}

export default General;
