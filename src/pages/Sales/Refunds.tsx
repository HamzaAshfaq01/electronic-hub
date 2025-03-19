"use client";

import { useState } from "react";
import AddRefundModal from "../../components/modal/AddRefund";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

// Define the TypeScript interface for the table rows
interface Invoice {
  id: number;
  invoice_number: string;
  customer_name: string;
  sku: string;
  date: string;
  price: string;
  payment_status: "Cash" | "Credit" | "Mix Cash/Credit";
  refund_status: "Done" | "Pending";
  image: string;
  due_date?: string;
}

// Define different table data for each tab
const allInvoices: Invoice[] = [
  {
    id: 1,
    invoice_number: "#12345678",
    customer_name: "John Doe",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$500.00",
    payment_status: "Cash",
    refund_status: "Done",
    
  },
  {
    id: 2,
    invoice_number: "#12345681",
    customer_name: "Bob Williams",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-04",
    price: "$1000.00",
    payment_status: "Credit",
    refund_status: "Done",
    
    due_date: "2023-09-10",
  },
  {
    id: 3,
    invoice_number: "#12345680",
    customer_name: "Alice Johnson",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-03",
    price: "$250.00",
    payment_status: "Mix Cash/Credit",
    refund_status: "Pending",
    
  },
];

const walkinInvoices: Invoice[] = [
  {
    id: 1,
    invoice_number: "#12345678",
    customer_name: "John Doe",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$500.00",
    payment_status: "Cash",
    refund_status: "Done",
    
  },
  {
    id: 3,
    invoice_number: "#12345680",
    customer_name: "Alice Johnson",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-03",
    price: "$250.00",
    payment_status: "Mix Cash/Credit",
    refund_status: "Pending",
    
  },
];

const registeredInvoices: Invoice[] = [
  {
    id: 4,
    invoice_number: "#12345681",
    customer_name: "Bob Williams",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-04",
    price: "$1000.00",
    payment_status: "Credit",
    refund_status: "Done",
    
    due_date: "2023-09-10",
  },
];

export default function Refunds() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const getFilteredData = () => {
    switch (activeFilter) {
      case "walkin":
        return walkinInvoices;
      case "registered":
        return registeredInvoices;
      default:
        return allInvoices;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between px-4">
          <div>
            <h3 className="text-lg font-semibold text-[#212121] dark:text-white/90">
            Refunds Summary
            </h3>
          </div>

          <div className="flex items-center gap-3 max-w-[320px] w-full">
            <div className="hidden lg:block w-full">
              <form>
                <div className="relative">
                  <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                    <svg
                      className="fill-gray-500 dark:fill-gray-400"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                        fill=""
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-white dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200  py-2.5 pl-12 pr-14 text-sm text-[#212121] shadow-theme-xs placeholder:text-[#667085]  focus:outline-hidden  focus:ring-brand-500/10 dark:border-gray-800  dark:text-white/90 dark:placeholder:text-white/30  xl:w-[100%]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="p-4 flex md:justify-between lg:justify-between justify-end items-center flex-wrap gap-4">
          {/* Tabs */}
          <div className="inline-flex rounded-md border border-gray-200 p-1 bg-white  ">
            {["all", "walkin", "registered"].map((tab) => (
              <button
                key={tab}
                className={`rounded-sm lg:px-4 px-2 py-2 text-sm font-medium transition-all ${
                  activeFilter === tab
                    ? "bg-blue-50 text-[#0086C9] rounded-[4px]"
                    : "bg-transparent text-[#667085] hover:bg-gray-50"
                }`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab === "all"
                  ? "All"
                  : tab === "walkin"
                  ? "Walkin Customers"
                  : "Registered Customers"}
              </button>
            ))}
          </div>
          <button  onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0BA5EC] hover:text-[#fff]  dark:bg-gray-800 dark:text-[#667085] dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
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
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Add Refunds
          </button>
        </div>

        <div className="px-4">
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
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3">
                    Pay
                    </TableCell>
                 
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3">
                      Payment
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3">
                    Refund status
                    </TableCell>
                    <TableCell
                      isHeader
                      className="font-medium text-gray-500 text-start text-theme-xs dark:text-[#667085] p-3"
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 ">
                  {getFilteredData().map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="py-[26px] px-[15px] ">
                        <p className="font-medium text-[#212121] text-theme-sm dark:text-white/90">
                          {invoice.invoice_number}
                        </p>
                      </TableCell>
                      <TableCell className="py-[26px] px-[15px]">
                        <div className="flex items-center gap-3 ">
                         
                          {invoice.customer_name}
                        </div>
                      </TableCell>
                      <TableCell className="py-[26px] px-[15px]"> {invoice.sku}</TableCell>
                      <TableCell className="py-[26px] px-[15px]">{invoice.date}</TableCell>
                      <TableCell className="py-[26px] px-[15px]">
                        {invoice.price}
                      </TableCell>
                      <TableCell className="py-[26px] px-[15px]">
                        {invoice.payment_status === "Cash" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-transparent  text-[#079455] border border-[#079455]">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#079455]"></span>{" "}
                            Cash
                          </span>
                        )}
                        {invoice.payment_status === "Credit" && (
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 border border-[#DC6803]  text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                                <span className="w-[6px] h-[6px] rounded-full bg-[#DC6803]"></span>{" "}
                                Credit
                              </span>
                              <p className="text-[#0BA5EC] decoration-underline text-[12px] cursor-pointer">
                                Remind
                              </p>
                            </div>
                            {invoice.due_date && (
                              <div className="text-xs text-gray-500">
                                Due date: {invoice.due_date}
                              </div>
                            )}
                          </div>
                        )}
                        {invoice.payment_status === "Mix Cash/Credit" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 border border-[#DC6803]  text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#DC6803]"></span>{" "}
                            Mix Cash/Credit
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-[26px] px-[15px]">
                        {invoice.refund_status === "Done" && (
                          <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-[6px] font-medium text-theme-xs bg-[#EFF8FF] text-[#079455] border border-[#B2DDFF] dark:bg-success-500/15 dark:text-success-500">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#079455]"></span>{" "}
                            Done
                          </span>
                        )}
                        {invoice.refund_status === "Pending" && (
                          <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                              <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-[6px] font-medium text-theme-xs bg-[#F9F5FF] border border-[#E9D7FE]  text-[#6941C6] dark:bg-warning-500/15 dark:text-[#6941C6]">
                                <span className="w-[6px] h-[6px] rounded-[6px] bg-[#9E77ED]"></span>{" "}
                                Pending
                              </span>
                             
                            </div>
                           
                          </div>
                        )}
                    
                      </TableCell>
                      <TableCell className="py-[26px] px-[15px]">
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
        </div>
      </div>
      <div className="flex justify-end items-center p-4 border-t border-[#EAECF0] mx-5  ">
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
      <AddRefundModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
