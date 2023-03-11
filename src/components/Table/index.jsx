import React from "react";


const testData = [
  {
    name: "Frozen yoghurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
];

const testColumns = [
  {
    name: "Product Name",
    label: "Dessert (100g serving)",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "Price",
    label: "Calories",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Modified date",
    label: "Fat (g)",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Created Date",
    label: "Carbs (g)",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "Action",
    label: "Protein (g)",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "In - Stock",
    label: "Protein (g)",
    options: {
      filter: true,
      sort: false,
    },
  },
];



const Table = ({ data, columns }) => {
  return (
        <div class="overflow-x-auto bg-white p-6 px-7 pb-10 rounded-xl">
          <table class="min-w-full text-center text-sm font-light">
            <thead class="font-normal bg-[#FAFAFA] text-[#5F6868]">
              <tr>
                {testColumns?.map((item, index) => (
                <th key={index} scope="col" class="px-5 py-5 font-medium whitespace-nowrap">Product Name</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#737B7B] text-xs">
              {testData?.map((item, index) => (
                <tr key={index} class="border-b border-[#F2F2F2]">
                  <td class="whitespace-nowrap px-5 py-5">Turbo Engine</td>
                  <td class="whitespace-nowrap px-5 py-5">N 1, 150, 000</td>
                  <td class="whitespace-nowrap px-5 py-5">28 May 2021</td>
                  <td class="whitespace-nowrap px-5 py-5">28 May 2021</td>
                  <td class="whitespace-nowrap px-5 py-5">Cell</td>
                  <td class="whitespace-nowrap px-5 py-5">Cell</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>

  )
};

export default Table;