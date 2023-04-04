import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { useMutation } from "@tanstack/react-query";
import { apiUpdateProductStatus } from '../../../services/ProductService'
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { apiGetAllBusinessProducts } from '/src/services/ProductService'
import Header from "/src/components/users/Header"
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Table from '/src/components/Table'
import Loader from '../../../components/Loader'
import NoBusiness from '../../../assets/dashboard/no-business.svg'

const Products = () => {
  const { id } = useParams()
  
  const { isLoading, error: errorProducts, data: products, refetch: refetchProducts } = useFetch({
    key: ['userProducts', id],
    api: apiGetAllBusinessProducts,
    param: id,
  })

  // console.log("products", products, errorProducts)

  const columns = [
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
          <div className="flex items-center gap-3 justify-cente">
            {/* <BiEdit size="1.2rem" className="text-orange" /> */}
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
        // console.log("meta", meta)
        return  (
          <label htmlFor={`status${meta?.id}`} className="flex justify-cente cursor-pointer select-none items-center">
            <div className="relative">
              <input id={`status${meta?.id}`} type="checkbox" className="sr-only peer" onChange={() => updateProductStatus({
                  "product_string": meta?.product_string,
                  "business_string": meta?.business_string,
                  "status": value==="1" ? false : true
                })} checked={value==="1"} />
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

  
  const updateProductStatusMutation = useMutation({
    mutationFn: (data) => {
        // console.log("mutating state", data)
        return apiUpdateProductStatus(data)
    },
    onSuccess: (data, variables, context) => {
        // console.log("success updating product state", data)
        refetchProducts()
    },
    onError: (error, variables, context) => {
      console.log("error updating product state", error)
    },
  })
   
  const updateProductStatus = (data) => {
      // console.log("data is here", data)
      updateProductStatusMutation.mutate(data)
  }
  
  return (
    <Dashboard>
        <main className='flex-1 overflow-y-auto overflow-hidden'>
          {isLoading && <Loader loader={4} />}
          <Header business_string={id} type="product" />
          <section className='p-8 px-4 sm:px-8'>
           {products &&
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg text-orange font-medium'>Listed Products</h2>
              <Link to={`/users/products/${id}/add-product`}>
                <Button variant='product' className='px-2 py-2 text-xs flex items-center'>
                      <AiOutlinePlus className='mr-2' />
                  Add new Product
                </Button>
              </Link>
            </div>}
            {products && <Table data={products} columns={columns} />}
          </section>
          {!isLoading &&
              !products && 
                <div className='flex flex-col justify-center items-center rounded-lg font-arialsans h-[550px] sm:h-auto md:mt-14'>
                    <img src={NoBusiness} alt="" className='mb-7' />
                    <span className='text-center text-orange mb-9'>
                      You have not added any products to your marketplace
                    </span>                        
                    <Link to={`/users/products/${id}/add-product`}> 
                      <span href=""className='text-orange underline underline-offset-2'>Click here to add a new product</span>
                    </Link>
                </div>
            }

        </main>
    </Dashboard>
  )
}

export default Products