"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import AddCustomerModal from "../../components/modal/AddCustomerModal";
// Define the TypeScript interface for the table rows
interface client {
  id: number;
  customer_name: string;
  id_card_number: string;
  last_purchase_date: string;
  number:string;
  total_purchase: string;
}

// Define different table data for each tab
const AllClient: client[] = [
  {
    id: 1,
    customer_name: "Omar Rizwan",
    id_card_number: "313024266578",
    last_purchase_date: "12-06-2025",
    number: "03002654789",
    total_purchase: "35,000",
  },
  {
    id: 2,
    customer_name: "Omar Rizwan",
    id_card_number: "313024266578",
    last_purchase_date: "12-06-2025",
    number: "03002654789",
    total_purchase: "35,000",
  },
  {
    id: 3,
    customer_name: "Omar Rizwan",
    id_card_number: "313024266578",
    last_purchase_date: "12-06-2025",
    number: "03002654789",
    total_purchase: "35,000",
  },
  {
    id: 4,
    customer_name: "Omar Rizwan",
    id_card_number: "313024266578",
    last_purchase_date: "12-06-2025",
    number: "03002654789",
    total_purchase: "35,000",
  },
  {
    id: 5,
    customer_name: "Omar Rizwan",
    id_card_number: "313024266578",
    last_purchase_date: "12-06-2025",
    number: "03002654789",
    total_purchase: "35,000",
  },
];

export default function Managewarehouses() {
     const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between pt-5">
          <div className="w-full">
            <div className="flex justify-between items-center mb-[16px]">
                <h2>All Clients</h2>
                <div>
                <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0b78ec] hover:text-[#fff] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.0001 4.16669V15.8334M4.16675 10H15.8334"
                stroke="white"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Customer
          </button>
                </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1 dark:border-gray-800 dark:bg-white/[0.03]">
              <Table>
                <TableHeader className="border-gray-100 dark:border-gray-800 border-b">
                  <TableRow className="w-full mx-3 col-span-12">
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                    Customer Name
                    </TableCell>

                   
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                    ID card number
                    </TableCell>

                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                    Last purchase date
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                    Number
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                    Total Purchase
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 ">
                  {AllClient.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal col-span-12">
                        {client.customer_name}
                      </TableCell>
                     
                  
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {client.id_card_number}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {client.last_purchase_date}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {client.number}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
                        {client.total_purchase}
                      </TableCell>
                      <TableCell className=" py-[26px] p-3 text-[#475467] font-normal">
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
      <AddCustomerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
