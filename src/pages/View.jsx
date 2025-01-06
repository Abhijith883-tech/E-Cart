import React from 'react'
import Header from '../components/Header'
const View = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
        <img width={'450px'} height={'200px'} src="https://thumbs.dreamstime.com/z/full-grocery-cart-shopping-isolated-white-background-35581745.jpg?w=576" alt="" />
        <div>
          <h3 className='font-bold'>PID : ID</h3>
          <h1 className='text-5x1 font-bold'>Product Name</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <p>
            <span className='font-bold'>Lorem </span>ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum vitae voluptatum quisquam magni perferendis hic minima dolor veritatis obcaecati culpa fugiat qui accusantium, laudantium pariatur sequi at nemo numquam!
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default View