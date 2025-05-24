import React, { useRef } from "react";


// const testData = [
//   {
//     "product_name": "Turbo Engine",
//     "product_price": "N 1, 150, 000",
//     "updated_at": "28 May 2021",
//     "created_at": "28 May 2021",
//     "product_color": "Cell",
//     "product_status": "Cell",
//   },
//   {
//     "product_name": "Turbo Engine",
//     "product_price": "N 1, 150, 000",
//     "updated_at": "28 May 2021",
//     "created_at": "28 May 2021",
//     "product_color": "Cell",
//     "product_status": "Cell",
//   },
//   {
//     "product_name": "Turbo Engine",
//     "product_price": "N 1, 150, 000",
//     "updated_at": "28 May 2021",
//     "created_at": "28 May 2021",
//     "product_color": "Cell",
//     "product_status": "Cell",
//   },
// ];

// const testColumns = [
//   {
//     name: "product_name",
//     label: "Product Name",
//     options: {
//       filter: true,
//       sort: true,
//     },
//   },
//   {
//     name: "product_price",
//     label: "Product Price",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "updated_at",
//     label: "Modified date",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "created_at",
//     label: "Created at",
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "product_color",
//     label: "Action",
//     extra: true,
//     custom: (value, meta) => {
//       // console.log("meta", meta)
//       return  (
//         <div className="flex items-center gap-4 justify-center">
//           <BiEdit size="1.2rem" className="text-orange" />
//           <MdOutlineDelete size="1.2rem" className="text-red-400" />
//         </div>
//       )
//     },
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
//   {
//     name: "product_status",
//     label: "In - Stock",
//     extra: true,
//     custom: (value, meta) => {
//       console.log("meta", meta)
//       return  (
//         <label htmlFor={`status${meta?.id}`} className="flex cursor-pointer select-none items-center">
//           <div className="relative">
//             <input id={`status${meta?.id}`} type="checkbox" className="sr-only peer" onChange={() => null} checked={meta?.status==="1"} />
//             <div
//               className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
//             ></div>
//             <div className="h-5 w-9 rounded-full bg-orange shadow-inner"></div>
//           </div>
//         </label>
//       )
//     },
//     options: {
//       filter: true,
//       sort: false,
//     },
//   },
// ];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  const newDate = new Date(date * 1000); // convert to milliseconds
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day} ${months[month+1]} ${year}`;
};


const Table = ({ data=[], columns, className }) => {
  const [filtererdData, setFilteredData] = React.useState(null);

  const handleFilter = (e) => {
    const { value } = e.target
    // console.log("function ran")
    const filtered = data?.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key]?.toString().toLowerCase().includes(value?.toLowerCase());
      });
    });
    setFilteredData(filtered);
  };
  const debounce =  (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        func(...args);
      }, wait);
    };
  };
  
  const search = debounce(handleFilter, 1000)

  return (
      <div className="overflow-hidden bg-white p-4 px-4 md:px-7 md:p-6 pb-10 rounded-xl">
        {/* <div className="flex items-center gap-8">
         <input onChange={search} type="text" placeholder="search" className="my-2 border-orange p-2 rounded-lg border-2 outline-none" />
        </div> */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm font-light">
            <thead className="font-normal bg-[#FAFAFA] text-[#5F6868]">
              <tr>
                {columns?.map((item, index) => (
                <th key={index} scope="col" className="px-5 py-5 font-medium whitespace-nowrap">{item?.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#737B7B] text-xs md:text-sm">
              {(filtererdData || data)?.map((item, index) => (
                <tr key={index} className="border-b border-[#F2F2F2]">
                  {columns?.map((column, index) => {
                    // console.log("column", column)
                    if (column?.extra) {
                      return ( 
                        <td key={index} className="whitespace-nowrap px-5 py-5">
                          {column?.custom(item[column?.name], item)}
                        </td>
                      )
                    } else if (column?.name === "updated_at" || column?.name === "created_at" || column?.name === "created") {
                      return <td key={index} className="whitespace-nowrap px-5 py-5">{formatDate(item[column?.name])}</td>
                    }
                    return <td key={index} className="whitespace-nowrap px-5 py-5">{item[column?.name]}</td>
                  }
                  )}
                </tr>
              )
              )}
              {!data?.length > 0  && (
                <tr>
                  <td colSpan={columns?.length} className="text-center py-10">
                    <p className="text-[#737B7B] text-sm">No data found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  )
};

export default Table;