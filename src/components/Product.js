import Image from 'next/image'
import { useState } from 'react'
import {StarIcon} from '@heroicons/react/24/solid'
import {Currency} from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import {addToBasket} from "../slices/basketSlice"

function Product({id,title,price,description,category,image}) {

  const dispatch=useDispatch();

  const[rating]=useState(
    Math.floor(Math.random()* 5) + 1
    )

   const[hasPrime]=useState(Math.random()<0.5) 

   const addItemtoBasket=()=>{
     // to push an item to the global store we have to dispatch an action => add to basket action
     const product={
      id,title,price,description,category,image
     };

     // sending the product as an action to the REDUX store...the basket slice
     dispatch(addToBasket(product))
   }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-3 text-xs italic text-gray-400'>{category}</p>

      <Image src={image} height={200} width={200} objectFit='contain'/>

      <h4 className='my-3'>{title}</h4>
      
      <div className='flex'>
        {Array(rating)
        .fill()
        .map((_,i)=>(
            <StarIcon className='h-5 text-yellow-500 '/>
        ))}
      </div>
      
      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <h2 className='mb-5'>Rs{Math.floor(price*50)}</h2>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <img className="w-12" src='https://links.papareact.com/fdw'/>
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemtoBasket} className='mt-auto button bg-yellow-500'>Add to Basket</button>

    </div>
  )
}

export default Product
