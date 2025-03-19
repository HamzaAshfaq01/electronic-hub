"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

// Define the TypeScript interface for the table rows
interface supplier {
  id: number;
  dealer: string;
  categories: string;
  Last_order_date: string;
  total_orders: string;
  total_payments: string;
  credit: "Cash" | "Credit" | "Mix Cash/Credit";
  image: string;
  due_date?: string;
}

// Define different table data for each tab
const allSupplier: supplier[] = [
  {
    id: 1,
    dealer: "Dawlance",
    Last_order_date: "2023-08-01",
    categories: "5",
    total_orders: "123 Items",
    total_payments: "325,000 RS",
    credit: "Cash",
    
  },
  {
    id: 2,
    dealer: "TCL",
    Last_order_date: "2023-08-04",
    categories: "4",
    total_orders: "123 Items",
    total_payments: "325,000 RS",
    credit: "Credit",
    
    due_date: "2023-09-10",
  },
  {
    id: 3,
    dealer: "Omni",
    Last_order_date: "2023-08-06",
    categories: "3",
    total_orders: "123 Items",
    total_payments: "325,000 RS",
    credit: "Mix Cash/Credit",
    
  },
  {
    id: 4,
    dealer: "TCLLL",
    categories: "1",
    Last_order_date: "2023-08-06",
    total_orders: "123 Items",
    total_payments: "325,000 RS",
    credit: "Cash",
    
  },
  {
    id: 5,
    dealer: "Perty",
    Last_order_date: "2023-08-07",
    categories: "2",
    total_orders: "123 Items  ",
    total_payments: "325,000 RS",
    credit: "Mix Cash/Credit",
    
  },
];

export default function ManageSuppliers() {
  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5">
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]">
              <Table>
                <TableHeader className="border-gray-100 dark:border-gray-800 border-b">
                  <TableRow className="w-full mx-3">
                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Dealer
                    </TableCell>

                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Last Order Date
                    </TableCell>
                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Categories
                    </TableCell>
                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Total Orders
                    </TableCell>

                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Total Payments
                    </TableCell>
                    <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                      Credits
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 ">
                  {allSupplier.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.dealer}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.Last_order_date}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.categories}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.total_orders}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.total_payments}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {supplier.total_payments}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                      <a href="#" className="text-[#0BA5EC] hover:text-blue-700">
                        Download
                      </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
