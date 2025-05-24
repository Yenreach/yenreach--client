import React, { useState, useEffect } from 'react'
import useFetch from '/src/hooks/useFetch'
import { Link, useParams, useNavigate } from 'react-router-dom'
import usePost from '/src/hooks/usePost'
import useImage from '/src/hooks/useImage'
import { apiAddProduct, apiGetProductCategories } from '../../../services/ProductService'
import Header from "/src/components/users/Header"
import { RiAddFill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import Head from '../../../components/users/Head'
import Input from '../../../components/ui/Input'
import Button from '../../../components/ui/Button'
import Dashboard from "../../../components/layout/Dashboard"
import Loader from '/src/components/Loader'
import { apiGetOneBusiness } from '../../../services/UserService'


const initialProductState = { 
    quantity: 0,
    price: 0,
    safetyTip: '',
    name : "",
    businessId: '',
    description : "",
    categories : [],
    photos : [],
    color : "",
    // product_tags : [],
}

// const categories = [
//     {id: 1, name: "Electronics"},
//     {id: 2, name: "Fashion"},
//     {id: 3, name: "Home"},
//     {id: 4, name: "Beauty"},
//     {id: 5, name: "Health"},
//     {id: 6, name: "Sports"},
//     {id: 7, name: "Automobile"},
//     {id: 8, name: "Food"},
//     {id: 9, name: "Toys"},
//     {id: 10, name: "Books"},
//     {id: 11, name: "Others"},
// ]

const index = () => {
    const [product, setProduct] = React.useState(initialProductState)
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: categories } = useFetch({
        api: apiGetProductCategories,
        key: ['product-categories'],
      })
    
    const { url, uploadImage, error, progress, loading: uploadingImg } = useImage()
    
    // console.log(subscription?.subscription?.photos)
    
   useEffect(() => {
         if(url) {
                setProduct(prev => ({...prev, photos: [...product.photos, url] }))
            }
    }, [url])

    const removePhoto = (url) => {
        setProduct(prev => ({...prev, photos: product.photos.filter(photo => photo != url) }))
    }


    const handleProduct = (event) => {
        setProduct(prev => ({...prev, [event.target.name]: event.target.value }))
    }

    const handleProductNum = (event) => {
        setProduct(prev => ({...prev, [event.target.name]: Number(event.target.value) }))
    }


    const handleCategory = (event) => {
        setProduct(prev => ({...prev, [event.target.name]: [
            ...product.categories, { 
                id: event.target.value,
                category: categories?.find(cat => cat.id == event.target.value)?.category,
            },
        ] }))
    }
    const { data: business  } = useFetch({
        api: apiGetOneBusiness,
        param: { id },
        key: ['business', id],
      })
    

    const addProductMutation = usePost({ 
        api: apiAddProduct,
        success: (data) => {
            // console.log("success adding product", data)
            setProduct(initialProductState)
            navigate(`/users/products/${id}/product-success`)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("data", product)
        addProductMutation.mutate({...product, businessId: id, categories: product.categories.map(category => category.id )})
    }

    // const handleUploads = async (files) => {
    //     const current = product.photos?.length || 0
    //     const totalAllowed =  Number(subscription?.subscription?.photos) || 5
    //     const count = (totalAllowed - current) < files.length ? (totalAllowed - current) : files.length
    //     for (let i=0; i<count; i++) {
    //         await uploadImage(files[i])
    //     }
    // }

    return (
        <Dashboard> 
          {(addProductMutation?.isLoading || uploadingImg) && <Loader loader={4} />}
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
                            <select onChange={handleCategory} required className='w-full border-2 outline-none bg-inherit px-4 py-3 focus:invalid:border-red-400 border-orange cursor-pointer rounded-lg' name="categories" id="categories" placeholder='Enter Categoies'>
                                <option value="">Select Product Categories</option>
                                {categories?.map((category) => (
                                    <option key={category.id} value={category.id}>{category.category}</option>
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
                            <Input required value={product?.price ? product?.price : ''} onChange={handleProductNum} variant={"product"} className='border-gray rounded-lg mt-2' type="number" name="price" id="price" placeholder='Enter Price' />
                        </div>
                        <div className='mb-8 w-full'>
                            <label htmlFor="quantity" className='font-medium text-sm'>Quantity</label>
                            <Input required value={product?.quantity ? product?.quantity : ''} onChange={handleProductNum} variant={"product"} className='border-gray rounded-lg mt-2' type="number" name="quantity" id="quantity" placeholder='Enter Available Quantity' />
                        </div>
                        <div className='mb-8 w-full'>
                            <label htmlFor="color" className='font-medium text-sm'>Color</label>
                            <Input required value={product?.color} onChange={handleProduct} variant={"product"} className='border-gray rounded-lg mt-2' type="text" name="color" id="color" placeholder='Enter Color' />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <label htmlFor="safetyTip" className='font-medium text-sm'>Safety Tip</label>
                        <Input value={product?.safetyTip} onChange={handleProduct} variant={"product"} textarea name="safetyTip" id="safetyTip" cols="30" rows="4" className='border-gray rounded-lg' placeholder='Enter safety measures for product use if any' />
                    </div>
                    <div className='mb-8'>
                        <h6 className='font-medium text-sm'>Product Images</h6>
                        <div className='flex items-center flex-wrap gap-4 mt-2'>
                            {product.photos?.map((photo) => (
                                <div key={photo} className='bg-gray rounded-lg w-36 h-36 overflow-hidden relative'>
                                    <img src={photo} alt="" className='object-cover w-full h-full' />
                                    <div onClick={() => removePhoto(photo)} className='absolute top-0 left-0 bg-black/30 w-full h-full p-4 cursor-pointer hover:cursor-pointer md:opacity-0 md:hover:opacity-100'>
                                        <AiOutlineClose size="24px" color='gray' className='float-right' />
                                    </div>
                                </div>
                            ))}
                            <>
                            {(product.photos?.length < 5 || (product.photos?.length < Number(business?.subscription?.photos || 0))) ? 
                                <div className=''>
                                    <label htmlFor="add_image" className='font-medium text-sm bg-gray rounded-lg w-36 h-36 flex flex-col gap-2 justify-center items-center px-4 cursor-pointer'>
                                        <RiAddFill size="24px" color='gray' />
                                        <p className='text-center text-xs'>
                                            <span className='font-semibold'>Choose a file </span>
                                            <span className='font-normal'>or drag it here</span>
                                        </p>
                                    </label>
                                    
                                </div> 
                                :
                                <>
                                <div className=''>
                                    <label htmlFor="business_photo" className='font-medium text-xs bg-[#E5E5E5] p-4 flex flex-col items-center justify-center relative cursor-pointer sm:w-48 sm:h-40 text-center'>
                                        <span className='text-[#476788] text-xs sm:text-sm'>
                                         You have reached the maximum number of photos for your subscription. 
                                         <Link to={`/users/subscriptions/${id}`} className='text-[#476788] text-xs sm:text-sm'>
                                            {" "}Click here to Subscribe or upgrade your subscription
                                        </Link>
                                        </span>
                                    </label>
                                </div> 
                                </>

                            }

                                    <Input  
                                        onChange={(e) => uploadImage(e.target.files[0])}
                                        className='border-gray rounded-lg mt-2 cursor-pointer w-1 h-1 invisible overflow-hidden'
                                        type="file" name="add_image" id="add_image" accept="image/*"
                                    />

                            </>
                            {/* <label htmlFor="add_image" className='font-medium text-sm mb-2 bg-gray rounded-lg w-36 h-36 flex flex-col gap-2 justify-center items-center px-4 cursor-pointer'>
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
                            /> */}
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

export default index