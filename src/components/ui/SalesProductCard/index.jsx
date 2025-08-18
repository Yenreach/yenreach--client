import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../../assets/image.svg'
import Button from '../Button'
import Image from './Image';
// import Image from '/src/components/Image';

const SalesProductCard = ({ product }) => {
  const price = Number(product?.product?.price);
  const hasDiscount = product?.discountedPrice && product?.discountedPrice < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - product?.discountedPrice) / price) * 100)
    : 5;
  const defaultDiscount = Math.round(price - (price * 0.05))
  // console.log(product)
  return (
    <Link to={`/products/${product?.product?.id}`}>
      <div className='flex flex-col rounded-t-3xl overflow-hidden py-2.5 px-2 border-2 border-[#D3DAE6] rounded-2xl h-fit justify-between relative'>
        {/* <img src={Img} className='object-cover object-center w-full h-40 rounded-xl' alt="" /> */}
        <div className="absolute top-2 left-2 bg-orange text-white text-xs font-bold px-2 py-1 rounded z-30">
          -{discountPercentage}%
        </div>
        <Image
          url={product?.product?.photos[0]?.mediaPath}
          name={product?.product?.name}
          alt={product?.product?.name}
          className='object-contain object-center w-full pt-[50%] pb-[50%] mx-auto rounded-xl'
          data={product}
        />
        <div className="flex flex-col border-[#777777]">
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-medium h-5 my-1.5 overflow-hidden">
              {product?.product?.name}
            </h2>
            <p className="text-xs h-[34px] mb-4 overflow-hidden">
              {product?.product?.description}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 line-through">
                ₦{product?.product?.price.toLocaleString()}
              </span>
              <span className="text-base font-bold text-orange">
                ₦{(product?.discountedPrice || defaultDiscount).toLocaleString()}
              </span>
            </div>
            <Button
              variant="product"
              className="mt-2 w-full text-xs rounded-lg py-2 px-4 font-semibold text-center"
            >
              View More
            </Button>
          </div>

          {/* <div>
            <span className='text-sm font-medium'>
              Price: ₦{product?.product?.price}
            </span>
            <Button variant='product' className='mt-1.5 w-full text-xs rounded-lg py-2 px-4 font-semibold text-center'>
              View More
            </Button>
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default SalesProductCard