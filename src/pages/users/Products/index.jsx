import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '/src/hooks/useFetch'
import { useMutation } from "@tanstack/react-query";
import { apiUpdateProductStatus, apiDeleteProduct, apiGetAllBusinessProducts } from '../../../services/ProductService'
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import Header from "/src/components/users/Header"
import { AiOutlinePlus } from 'react-icons/ai'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Table from '/src/components/Table'
import Loader from '../../../components/Loader'
import NoBusiness from '../../../assets/dashboard/no-business.svg'
import FullImage from '../../../components/FullImage';

const Products = () => {
  const { id } = useParams()
  const [deleteProductDetails, setDeleteProductDetails] = useState({})
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [image, setImage] = useState('')

  
  const { isLoading, error: errorProducts, data: products, refetch: refetchProducts, remove: removeProductsCache } = useFetch({
    key: ['userProducts', id],
    api: apiGetAllBusinessProducts,
    param: { id },
  })



  console.log("products", products)

  const columns = [
    {
      name: "name",
      label: "Product Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "price",
      label: "Product Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "photos",
      label: "Photos",
      options: {
        filter: true,
        sort: false,
      },
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <div className="underline text-orange cursor-pointer" onClick={() => {
            setImage(value[0].mediaPath)
            setImageModalOpen(true)
          }}>
            {/* <a target='_blank' href={`${value[0].mediaPath}`}>view photo</a> */}
            view photo
          </div>
        )
      },
    },
    {
      name: "updatedAt",
      label: "Modified date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "createdAt",
      label: "Created at",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "color",
      label: "Action",
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <div className="flex items-center gap-3 justify-cente">
            <Link to={`/users/products/${id}/edit-product/${meta?.id}`}>
              <BiEdit size="1.2rem" className="text-orange" />
            </Link>
            <MdOutlineDelete size="1.2rem" className="text-red-400 cursor-pointer" onClick={() => delteteProduct(meta)} />
          </div>
        )
      },
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "In - Stock",
      extra: true,
      custom: (value, meta) => {
        // console.log("meta", meta)
        return  (
          <label htmlFor={`status${meta?.id}`} className="flex justify-cente cursor-pointer select-none items-center">
            <div className="relative">
              <input id={`status${meta?.id}`} type="checkbox" className="sr-only peer" onChange={() => 
              updateProductStatus({
                  "id": meta?.id,
                  "status": value==="Available" ? false : true
                })} checked={value==="Available"} />
              <div
                className="dot shadow-switch-1 absolute left-0.5 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full shadow-lg bg-white transition peer-checked:translate-x-4"
              ></div>
              <div className={`h-5 w-9 rounded-full ${value==="Available" ? "bg-orange" : "bg-orange/40"} shadow-inner`}></div>
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


  const deletedProductMutation = useMutation({
    mutationFn: (data) => {
      console.log("data", data)
      return apiDeleteProduct(data)
    },
    onSuccess: (data, variables, context) => {
        console.log("success deleting product", data)
        setDeleteProductDetails({})
        removeProductsCache()
        refetchProducts()
    },
    onError: (error, variables, context) => {
      console.log("error deleting product", error)
    },
  })
   
  const updateProductStatusMutation = useMutation({
    mutationFn: (data) => {
        console.log("mutating state", data)
        return apiUpdateProductStatus(data)
    },
    onSuccess: (data, variables, context) => {
        console.log("success updating product state", data)
        refetchProducts()
    },
    onError: (error, variables, context) => {
      console.log("error updating product state", error)
    },
  })
   
  const updateProductStatus = (data) => {
      console.log("data is here", data)
      updateProductStatusMutation.mutate(data)
  }


  const delteteProduct = (data) => {
    setDeleteProductDetails(data)
    deletedProductMutation.mutate(data)
  }
  // console.log("deleteProduct", deletedProduct)
  return (
    <Dashboard>
        <main className='flex-1 overflow-y-auto overflow-hidden'>
          {(isLoading || updateProductStatusMutation?.isLoading || (deletedProductMutation?.isLoading)) && <Loader loader={4} />}
          {imageModalOpen && (
         <FullImage  setImageModalOpen={setImageModalOpen} image={image} />
          )}
          <Header business_string={id} type="product" />
          <section className='p-8 px-4 sm:px-8'>
           {!!products?.data?.length &&
            <div className='flex items-center justify-between mb-4'>
              <h2 className='text-lg text-orange font-medium'>Listed Products</h2>
              <Link to={`/users/products/${id}/add-product`}>
                <Button variant='product' className='px-2 py-2 text-xs flex items-center'>
                      <AiOutlinePlus className='mr-2' />
                  Add new Product
                </Button>
              </Link>
            </div>}
            {!!products?.data?.length && <Table data={products?.data} columns={columns} />}
          </section>
          {!isLoading &&
              !products?.data?.length && 
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