import React from 'react'
import { Link } from 'react-router-dom'
const Footer = (insideHome) => {
  return (
    <div style={{ height: '300px' }} className='mt-5 w-full p-6 text-white w-100 bg-violet-600'>
      <div className="flex justify-between items-center">
        {/* Intro */}
        <div style={{ width: '400px' }}>
          <h5><i className="fa-solid fa-music me-2"></i>
            E-Cart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div className="flex flex-col">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
        </div>
        {/* Guides */}
        <div className="flex flex-col">
          <h5>Guides</h5>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target='_blank'>React</a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://tailwindcss.com/" target='_blank'>React Tailwind</a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/" target='_blank'>React Router</a>
        </div>
        {/* Contact */}
        <div className="flex flex-col">
          <h5>Contact</h5>
          { 
            <div className="flex">
            <input className='w-full rounded me-2 p-2' type="email" name="" id="" placeholder='Enter your email here' />
            <button className='bg-violet-400 rounded p-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          }
          <div className="flex justify-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-8'>Copyright &copy; 2024</p>
    </div>

  )
}

export default Footer