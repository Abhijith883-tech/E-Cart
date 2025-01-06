import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
const Home = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
      <Header insideHome/>
      <div style={{padding:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://thumbs.dreamstime.com/z/full-grocery-cart-shopping-isolated-white-background-35581745.jpg?w=576" alt="" />
            <div className='text-center'>
              <h3 className='text-x1 font-bold'>Product</h3>
              <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white
              inline-block'>View More...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home