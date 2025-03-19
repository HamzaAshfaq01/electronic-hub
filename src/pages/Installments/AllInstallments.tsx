"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Badge from "../../components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
interface Order {
  id: string;
  customer_name: string;
  sku: string;
  purchase_date: string;
  price: string;
  payment: "Completed" | "Due" | "Pending";
  due_date?: string;
}

export default function AllInstallments() {
  const [orders] = useState<Order[]>([
    {
      id: "INV-3066",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Completed",
      price: "35,000 ",
    },
    {
      id: "INV-3065",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Completed",
      price: "35,000",
    },
    {
      id: "INV-3064",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Due",
      price: "35,000",
      due_date: "2023-09-10",
    },
    {
      id: "INV-3063",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Pending",
      price: "35,000",
    },
    {
      id: "INV-3062",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Pending",
      price: "35,000",
    },
    {
      id: "INV-3061",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Pending",
      price: "35,000",
    },
    {
      id: "INV-3060",
      customer_name: "Omar Rizwan",
      sku: "Dawlance SBS 600 INV GD Black",
      purchase_date: "12-06-2025",
      payment: "Due",
      price: "35,000 ",
      due_date: "2023-09-10",
    },
  ]);
  return (
    <div className="">
      <div className="flex justify-between items-center mb-[16px]">
        <h2>All Installments</h2>
        <div>
          <button className="inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 4.16669V15.8334M4.16675 10H15.8334"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create Installment
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-[#FFFFFF] p-[20px] rounded-[8px]   border-white border-2">
        <div>
          <label
            htmlFor="search"
            className="block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]"
          >
            Search for client
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#667085]" />
            </div>
            <input
              type="text"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]"
          >
            Status
          </label>
          <div className="relative">
            <div className="flex items-center">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <select
                id="status"
                className="appearance-none block w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                defaultValue="paid"
              >
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-[#667085]" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="dealer"
            className="block text-[14px] font-medium text-[#344054] mb-[6px] leading-[20px]"
          >
            Dealer
          </label>
          <div className="relative">
            <select
              id="dealer"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              defaultValue="all"
            >
              <option value="all">All</option>
              <option value="dealer1">Dealer 1</option>
              <option value="dealer2">Dealer 2</option>
              <option value="dealer3">Dealer 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-[#667085]" />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-gray-100 dark:border-gray-800 border-b">
              <TableRow className="w-full mx-3">
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Invoice number
                </TableCell>
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Customer Name
                </TableCell>
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  SKU
                </TableCell>
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Purchase Date
                </TableCell>
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Price
                </TableCell>
                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Payment
                </TableCell>

                <TableCell className="font-medium text-[#494949] text-start text-theme-xs dark:text-[#667085] p-3">
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 ">
              {orders.map((order) => (
                <TableRow key={order.id} className="w-full mx-3">
                  <TableCell className="py-3 p-3">{order.id}</TableCell>
                  <TableCell className="py-3 p-3">
                    {order.customer_name}
                  </TableCell>
                  <TableCell className="py-3 p-3">{order.sku}</TableCell>
                  <TableCell className="py-3 p-3">
                    {order.purchase_date}
                  </TableCell>
                  <TableCell className="py-3 p-3">{order.price}</TableCell>
                  <TableCell className="py-3 p-3">
                    {order.payment === "Completed" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-white text-[#079455] border border-[#079455] dark:bg-success-500/15 dark:text-[#079455]">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#079455]"></span>{" "}
                        Completed
                      </span>
                    )}
                    {order.payment === "Due" && (
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-white border border-[#DC6803]  text-[#B54708] dark:bg-warning-500/15 dark:text-[#B54708]">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#DC6803]"></span>{" "}
                            Due
                          </span>
                          <p className="text-[#0BA5EC] decoration-underline text-[12px] cursor-pointer">
                            Remind
                          </p>
                        </div>
                        {order.due_date && (
                          <div className="text-xs text-[#494949]">
                            Due date: {order.due_date}
                          </div>
                        )}
                      </div>
                    )}
                    {order.payment === "Pending" && (
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-white   border border-[#DC6803]  text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#DC6803]"></span>{" "}
                        Pending
                      </span>
                    )}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91794 1.81477 9.81384C1.84654 9.67525 1.90328 9.5854 2.01677 9.40571C2.95461 7.92072 5.74617 4.16669 10.0003 4.16669C14.2545 4.16669 17.0461 7.92072 17.9839 9.4057C18.0974 9.5854 18.1541 9.67525 18.1859 9.81384C18.2098 9.91794 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8334 10.0003 15.8334C5.74617 15.8334 2.95461 12.0793 2.01677 10.5943Z"
                            stroke="#475467"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61931 11.381 7.50002 10.0003 7.50002C8.61962 7.50002 7.50034 8.61931 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                            stroke="#475467"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.39662 15.0964C2.43491 14.7518 2.45405 14.5795 2.50618 14.4185C2.55243 14.2756 2.61778 14.1396 2.70045 14.0142C2.79363 13.8729 2.91621 13.7504 3.16136 13.5052L14.1666 2.49999C15.0871 1.57951 16.5795 1.57951 17.4999 2.49999C18.4204 3.42046 18.4204 4.91285 17.4999 5.83332L6.49469 16.8386C6.24954 17.0837 6.12696 17.2063 5.98566 17.2995C5.86029 17.3821 5.72433 17.4475 5.58146 17.4937C5.42042 17.5459 5.24813 17.565 4.90356 17.6033L2.08325 17.9167L2.39662 15.0964Z"
                            stroke="#475467"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-end items-center py-4 border-t border-[#EAECF0] ">
        <button className="p-3 py-2 border hover:bg-gray-100 bg-white">
          ←
        </button>

        <button className="p-3 py-2 border  bg-gray-200 font-semibold">
          1
        </button>

        <button className="p-3 py-2 border hover:bg-gray-100 bg-white">
          2
        </button>

        <span className="p-3 py-2 border hover:bg-gray-100 bg-white">...</span>

        <button className="p-3 py-2 border hover:bg-gray-100 bg-white">
          9
        </button>

        <button className="p-3 py-2 border hover:bg-gray-100 bg-white">
          10
        </button>

        <button className="p-3 py-2 border hover:bg-gray-100 bg-white">
          →
        </button>
      </div>
    </div>
  );
}
