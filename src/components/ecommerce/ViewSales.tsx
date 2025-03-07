import {
  ArrowDownIcon,
  BoxIconLine,
  UpGraphIcon
} from "../../icons";
import Badge from "../ui/badge/Badge";
import { Link } from "react-router";
export default function ViewSales() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <p className="text-[#878787] font-[400] text-[16px]">Today</p>

        <div className=" mt-[10px]">
          <div className="flex items-end gap-[14px] mb-[21px]">
        
           
           <h4 className="mt-2 font-[400] text-[#000] text-[22px] dark:text-white/90">
           10,512 pkr
           </h4>
      
           <Badge color="success">
           <UpGraphIcon />
           11.01%
         </Badge>
          </div>
          <span className="text-sm text-[#767C80] ">
            10 items sold today
            </span>
        </div>
        <div className="flex justify-end">
        <Link
                  to="/"
                  className="text-[#767676] hover:text-brand-600 dark:text-brand-400 underline"
                >
                  View Sales
                </Link>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <p className="text-[#878787] font-[400] text-[16px]">Credits</p>

        <div className=" mt-[10px]">
          <div className="flex items-end gap-[14px] mb-[21px]">
        
           
           <h4 className="mt-2 font-[400] text-[#000] text-[22px] dark:text-white/90">
           10,512 pkr
           </h4>
      
           <Badge color="success">
           <UpGraphIcon />
           11.01%
         </Badge>
          </div>
          <span className="text-sm text-[#767C80] ">
          10 items credits today
            </span>
        </div>
        <div className="flex justify-end">
        <Link
                  to="/"
                  className="text-[#767676] hover:text-brand-600 dark:text-brand-400 underline"
                >
                  View Credits
                </Link>
        </div>
      </div>

    </div>
  );
}
