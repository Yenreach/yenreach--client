import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import usePost from '/src/hooks/usePost'
import useImage from '/src/hooks/useImage'
import { apiAddProduct, apiGetProduct, apiUpdateProduct } from '../../../services/ProductService'
import Header from "/src/components/users/Header"
import { RiAddFill } from 'react-icons/ri'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Loader from '/src/components/Loader'
import useFetch from '/src/hooks/useFetch'

const initialProductState = { 
    business_string : "",
    name : "",
    description : "",
    categories : [],
    price : "",
    quantity : "",
    color : "",
    safety_tip : "",
    photos : [],
    // product_tags : [],
}



const categories = [
    {id: 1, name: "Electronics"},
    {id: 2, name: "Fashion"},
    {id: 3, name: "Home"},
    {id: 4, name: "Beauty"},
    {id: 5, name: "Health"},
    {id: 6, name: "Sports"},
    {id: 7, name: "Automobile"},
    {id: 8, name: "Food"},
    {id: 9, name: "Toys"},
    {id: 10, name: "Books"},
    {id: 11, name: "Others"},
]

const EditProduct = () => {
    const [product, setProduct] = React.useState(initialProductState)
    const { id, productId } = useParams()
    const navigate = useNavigate()

    const { data, error: errorProduct, isLoading } = useFetch({
        api: apiGetProduct,
        param: productId,
        key: ['product', productId],
    })

    // console.log("data", product)

    useEffect(() => {
        if (data) {
            setProduct({
                business_string : data?.business_string,
                product_string : data?.product_string,
                name : data?.product_name,
                description : data?.product_description,
                categories : data?.categories,
                price : data?.product_price,
                quantity : data?.product_quantity,
                color : data?.product_color,
                safety_tip : data?.product_safety_tip,
                photos : data?.photos,
            })
        }
    }, [data])


    const { url, uploadImage, error, progress, loading: uploadingImg } = useImage()

   useEffect(() => {
         if(url) {
                setProduct(prev => ({...prev, photos: [...product.photos,  { filename: url }] }))
            }
    }, [url])



    const handleProduct = (event) => {
        setProduct(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleCategory = (event) => {
        setProduct(prev => ({...prev, [event.target.name]: [...product.categories, {category: event.target.value}] }))
    }


    const updateProductMutation = usePost({ 
        api: apiUpdateProduct,
        success: (data) => {
            // console.log("success adding product", data)
            setProduct(initialProductState)
            navigate(`/users/products/${id}`)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("data", product)
        updateProductMutation.mutate({...product, business_string: id})
    }


    return (
        <Dashboard> 
          {(updateProductMutation?.isLoading || uploadingImg) && <Loader loader={4} />}
            <div className='flex-1 overflow-y-auto overflow-hidden'>
                <Header business_string={id} type="product" />
            <section className='p-8 px-4 sm:px-8'>
                <form className='p-8 px-4 sm:px-8 bg-white rounded-2xl' onSubmit={handleSubmit}>
                    <div className='mb-8'>
                        <label htmlFor="name" className='font-medium text-sm'>Product Name</label>
                        <Input required value={product?.name} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="text" name="name" id="name" placeholder='Enter product name' />
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="description" className='font-medium text-sm'>Description</label>
                        <Input required value={product?.description} onChange={handleProduct} variant={"product"} textarea name="description" id="description" cols="30" rows="10" className='border-gray rounded-lg' placeholder='Enter your business Discription' />
                    </div>
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='mb-8 w-full'>
                            <label htmlFor="categories" className='font-medium text-sm'>Categories</label>
                            <select value={product?.categories?.slice(-1)[0]?.category} onChange={handleCategory} required className='w-full border-2 rounded-sm outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-orange cursor-pointer rounded-lg' name="categories" id="categories" placeholder='Enter Categoies'>
                                <option value="">Select Product Categories</option>
                                {categories?.map((category) => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                            <div>
                                {product.categories?.map((category) => (
                                    <span key={category?.category} className='bg-gray-200 text-gray-600 text-xs py-1 rounded-full mr-2'>{category?.category}</span>
                                ))}
                            </div>
                        </div>
                        {/* <div className='w-full'>
                            <label htmlFor="name" className='font-medium text-sm'>Add Tags</label>
                            <Input required value={product?.name} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="text" name="" id="" placeholder='Enter your business Email Address' />
                        </div> */}
                    </div>
                    <div className='mb-8 md:flex justify-between gap-9'>
                        <div className='mb-8 w-full'>
                            <label htmlFor="price" className='font-medium text-sm'>Price</label>
                            <Input required value={product?.price} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="number" name="price" id="price" placeholder='Enter Price' />
                        </div>
                        <div className='mb-8 w-full'>
                            <label htmlFor="quantity" className='font-medium text-sm'>Quantity</label>
                            <Input required value={product?.quantity} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="number" name="quantity" id="quantity" placeholder='Enter Available Quantity' />
                        </div>
                        <div className='mb-8 w-full'>
                            <label htmlFor="color" className='font-medium text-sm'>Color</label>
                            <Input required value={product?.color} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="text" name="color" id="color" placeholder='Enter Color' />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="safety_tip" className='font-medium text-sm'>Safety Tip</label>
                        <Input required value={product?.safety_tip} onChange={handleProduct} variant={"product"} textarea name="safety_tip" id="safety_tip" cols="30" rows="4" className='border-gray rounded-lg' placeholder='Enter safety measures for product use if any' />
                    </div>
                    <div className='mb-8'>
                        <h6 className='font-medium text-sm'>Product Images</h6>
                        <div className='flex items-center flex-wrap gap-4 mt-2'>
                            {product.photos?.map((photo) => (
                                <div key={photo?.filename} className='bg-gray rounded-lg w-36 h-36 overflow-hidden'>
                                    <img src={photo?.filename} alt="" className='object-cover w-full h-full' />
                                </div>
                            ))}
                            <label htmlFor="add_image" className='font-medium text-sm mb-2 bg-gray rounded-lg w-36 h-36 flex flex-col gap-2 justify-center items-center px-4 cursor-pointer'>
                                <RiAddFill size="24px" color='gray' />
                                <p className='text-center text-xs'>
                                    <span className='font-semibold'>Choose a file </span>
                                    <span className='font-normal'>or drag it here</span>
                                </p>
                            </label>
                            <Input  
                                onChange={(e) => uploadImage(e.target.files[0])}
                                className='border-gray rounded-lg mt-2 cursor-pointer w-1 h-1 invisible overflow-hidden'
                                type="file" name="add_image" id="add_image"
                            />
                        </div>
                    </div>
                    <div className='flex sm:justify-end gap-2'>
                        <Button variant="product" override={true} inverse={true} className='p-2 px-12 md:px-20 rounded text-gray border-2 font-medium'>
                            Cancel
                        </Button>
                        <Button type='submit' variant="product" className='p-2 px-12 md:px-20 rounded'>
                            Save
                        </Button>
                    </div>
                </form>
            </section>
            </div>
        </Dashboard>
    )
}

export default EditProduct