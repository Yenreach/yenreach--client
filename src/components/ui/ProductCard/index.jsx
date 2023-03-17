import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../assets/image.svg'
import Button from '../Button'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product?.product_string}`}>
      <div className='flex flex-col rounded-t-3xl overflow-hidden py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-fit justify-between'>
        <img src={Image} className='h-40 w-full object-cover object-center rounded-xl' alt="" />
        <div className="flex flex-col border-[#777777]">
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-medium h-5 my-1.5 overflow-hidden">
              {product?.product_name}
            </h2>
            <p className="text-xs h-[26px] mb-4 overflow-hidden">
              {product?.product_description}
            </p>
          </div>
          <div>
            <span className='text-sm font-medium'>
              Price: ₦{product?.product_price}
            </span>
            <Button variant='product' className='mt-1.5 w-full text-xs rounded-lg py-2 px-4 font-semibold text-center'>
              View More
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard