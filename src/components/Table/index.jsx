import React from "react";


const testData = [
  {
    "product_name": "Turbo Engine",
    "product_price": "N 1, 150, 000",
    "updated_at": "28 May 2021",
    "created_at": "28 May 2021",
    "product_color": "Cell",
    "product_status": "Cell",
  },
  {
    "product_name": "Turbo Engine",
    "product_price": "N 1, 150, 000",
    "updated_at": "28 May 2021",
    "created_at": "28 May 2021",
    "product_color": "Cell",
    "product_status": "Cell",
  },
  {
    "product_name": "Turbo Engine",
    "product_price": "N 1, 150, 000",
    "updated_at": "28 May 2021",
    "created_at": "28 May 2021",
    "product_color": "Cell",
    "product_status": "Cell",
  },
];

const testColumns = [
  {
    name: "product_name",
    label: "Product Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "product_price",
    label: "Product Price",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "updated_at",
    label: "Modified date",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "created_at",
    label: "Created at",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "product_color",
    label: "Action",
    extra: true,
    custom: (value, meta) => {
      // console.log("meta", meta)
      return  (
        <div className="flex items-center gap-4 justify-center">
          <BiEdit size="1.2rem" className="text-orange" />
          <MdOutlineDelete size="1.2rem" className="text-red-400" />
        </div>
      )
    },
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "product_status",
    label: "In - Stock",
    extra: true,
    custom: (value, meta) => {
      console.log("meta", meta)
      return  (
        <label htmlFor={`status${meta?.id}`} className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input id={`status${meta?.id}`} type="checkbox" className="sr-only peer" onChange={() => null} checked={meta?.status==="1"} />
            <div
              className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
            ></div>
            <div className="h-5 w-9 rounded-full bg-orange shadow-inner"></div>
          </div>
        </label>
      )
    },
    options: {
      filter: true,
      sort: false,
    },
  },
];



const Table = ({ data, columns }) => {
  // console.log("data", data)
  return (
      <div className="overflow-x-auto bg-white p-6 px-7 pb-10 rounded-xl">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="font-normal bg-[#FAFAFA] text-[#5F6868]">
            <tr>
              {columns?.map((item, index) => (
              <th key={index} scope="col" className="px-5 py-5 font-medium whitespace-nowrap">{item?.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#737B7B] text-xs">
            {data?.map((item, index) => (
              <tr key={index} className="border-b border-[#F2F2F2]">
                {columns?.map((column, index) => {
                  // console.log("column", column)
                  if (column?.extra) {
                    return ( 
                      <td key={index} className="whitespace-nowrap px-5 py-5">
                        {column?.custom(item[column?.name], item)}
                      </td>
                    )
                  }
                  return <td key={index} className="whitespace-nowrap px-5 py-5">{item[column?.name]}</td>
                }
                )}
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
  )
};

export default Table;