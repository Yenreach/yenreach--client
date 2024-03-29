import React from "react";

const Table = () => {
  return (
    <div class="flex flex-col overflow-x-auto">
    <div class="sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm font-light">
            <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4">#</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
                <th scope="col" class="px-6 py-4">Heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
                <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
              </tr>
              <tr class="border-b ">
                <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                <td class="whitespace-nowrap px-6 py-4">Cell</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Table;


{/* <div class="flex flex-col overflow-x-auto">
      <div class="sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                  <th scope="col" class="px-6 py-4">Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
                <tr class="border-b dark:border-neutral-500">
                  <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4 ">Cell</td>
                </tr>
                <tr class="border-b ">
                  <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                  <td class="whitespace-nowrap px-6 py-4">Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}