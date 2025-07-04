import React from 'react'
import { paginate } from '/src/utils/pagination'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Pagination = ({ page=1, num_per_page=40, data=[], handlePageChange, total, totalPages }) => {
  
  return (
    <>
    {(totalPages || total) > 0 &&  
        <div className="flex justify-center items-center flex-wrap my-6 w-fit text-sm mx-auto">
            <MdChevronLeft size={"1.5rem"} />
            {[...Array(totalPages ? totalPages : paginate({ page, num_per_page, data, total })?.pages).keys()]?.map((page_num) => 
            <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
            )}
            <MdChevronRight size={"1.5rem"} />
        </div>
    }
    </>
  )
}

export default Pagination


// const Pagination = ({ page=1, num_per_page=40, data=[], handlePageChange, total }) => {
//   return (
//     <>
//     {total > 0 &&  
//         <div className="flex justify-center items-center flex-wrap my-6 w-fit text-sm">
//             <MdChevronLeft size={"1.5rem"} />
//             {[...Array(paginate({page, num_per_page, data})?.pages).keys()]?.map((page_num) => 
//             <span key={page_num+1} onClick={() => handlePageChange(page_num+1)} className={`${page===page_num+1 && "border-b"} mx-2 font-medium cursor-pointer`}>{page_num + 1}</span>
//             )}
//             <MdChevronRight size={"1.5rem"} />
//         </div>
//     }
//     </>
//   )
// }

// export default Pagination