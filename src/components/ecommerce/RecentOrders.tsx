import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

// Define the TypeScript interface for the table rows
interface Product {
  id: number;
  Invoice_number: string; // Unique identifier for each product
  customer_name: string; // Product name
  sku: string; // Number of variants (e.g., "1 Variant", "2 Variants")
  date: string;
  price: string; // Price of the product (as a string with currency symbol)
  image: string; // URL or path to the product image
  payment_status: "Cash" | "Credit" | "Mix Cash/Credit"; // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    Invoice_number: "#12345678",
    customer_name: "Omar Rizwan",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$2399.00",
    payment_status: "Cash",
    image: "/images/sales/Avatar.jpg", // Replace with actual image URL
  },
  {
    id: 2,
    Invoice_number: "#12345678",
    customer_name: "Omar Rizwan",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$879.00",
    payment_status: "Credit",
    image: "/images/sales/Avatar.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    Invoice_number: "#12345678",
    customer_name: "Omar Rizwan",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$1869.00",
    payment_status: "Credit",
    image: "/images/sales/Avatar.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    Invoice_number: "#12345678",
    customer_name: "Omar Rizwan",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$1699.00",
    payment_status: "Mix Cash/Credit",
    image: "/images/sales/Avatar.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    Invoice_number: "#12345678",
    customer_name: "Omar Rizwan",
    sku: "Dawlance SBS 600 INV GD Black",
    date: "2023-08-01",
    price: "$240.00",
    payment_status: "Cash",
    image: "/images/sales/Avatar.jpg", // Replace with actual image URL
  },
];

export default function RecentOrders() {
  return (
    <div>
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Total sales
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
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
                  className="bg-white dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200  py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[100%]"
                />
              </div>
            </form>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Filter
            </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6666 17.5C16.6666 16.337 16.6666 15.7555 16.5231 15.2824C16.1999 14.217 15.3662 13.3834 14.3009 13.0602C13.8277 12.9167 13.2462 12.9167 12.0832 12.9167H7.91659C6.75362 12.9167 6.17213 12.9167 5.69897 13.0602C4.63363 13.3834 3.79995 14.217 3.47678 15.2824C3.33325 15.7555 3.33325 16.337 3.33325 17.5M13.7499 6.25C13.7499 8.32107 12.071 10 9.99992 10C7.92885 10 6.24992 8.32107 6.24992 6.25C6.24992 4.17893 7.92885 2.5 9.99992 2.5C12.071 2.5 13.7499 4.17893 13.7499 6.25Z"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Create Invoice
          </button>
          <button className="inline-flex items-center gap-2 bg-[#0BA5EC] rounded-lg border border-gray-300  px-4 py-2.5 text-theme-sm font-medium text-[#fff] shadow-theme-xs hover:bg-[#0b78ec] hover:text-[#fff] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
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
            Add Coustomer
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-b border-gray-200 bg-white  pb-1  dark:border-gray-800 dark:bg-white/[0.03] ">
        <div className="max-w-full overflow-x-auto">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-b">
              <TableRow className="w-full">
                <TableCell
                  isHeader
                  className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Invoice number
                </TableCell>
                <TableCell
                  isHeader
                  className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Customer Name
                </TableCell>
                <TableCell
                  isHeader
                  className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  SKU
                </TableCell>
                <TableCell
                  isHeader
                  className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Date
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Price
                </TableCell>
                <TableCell
                  isHeader
                  className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Payment
                </TableCell>
                <TableCell
                  isHeader
                  className="font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400 p-3"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800 ">
              {tableData.map((product) => (
                <TableRow key={product.id} className="">
                  <TableCell className="py-3 p-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {product.Invoice_number}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                        <img
                          src={product.image}
                          className="h-[50px] w-[50px]"
                          alt={product.image}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {product.customer_name}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 p-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {product.sku}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 p-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {product.date}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {product.price}
                  </TableCell>

                  <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        product.payment_status === "Cash"
                          ? "success"
                          : product.payment_status === "Credit"
                          ? "warning"
                          : product.payment_status === "Mix Cash/Credit"
                          ? "warning"
                          : "error"
                          
                      }
                    >
                      {product.payment_status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-3 p-3">
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
      <div className="flex justify-end items-center space-x-2 p-4">
      <button className="p-3 py-2 border rounded-lg hover:bg-gray-100">
        ←
      </button>

      <button className="p-3 py-2 border rounded-lg bg-gray-200 font-semibold">
        1
      </button>

      <button className="p-3 py-2 border rounded-lg hover:bg-gray-100">
        2
      </button>

      <span className="p-3 py-2">...</span>

      <button className="p-3 py-2 border rounded-lg hover:bg-gray-100">
        9
      </button>

      <button className="p-3 py-2 border rounded-lg hover:bg-gray-100">
        10
      </button>

      <button className="p-3 py-2 border rounded-lg hover:bg-gray-100">
        →
      </button>
    </div>
    </div>
  );
}
