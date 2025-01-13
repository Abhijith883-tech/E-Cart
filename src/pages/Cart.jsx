import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
    const [cartTotal, setCartTotal] = useState(0)
    const userCart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (userCart?.length > 0) {
            setCartTotal(userCart?.map(item => item.totalPrice).reduce((a1, a2) => a1 + a2))
        }
    }, [userCart])

    const handleDecrementQuantity = (product) => {
        if (product?.quantity > 1) {
            dispatch(decrementQuantity(product.id))
        } else {
            dispatch(removeCartItem(product.id))
        }
    }

    const checkout = () => {
        dispatch(emptyCart());
        alert("Order Confirmed.. Thamk you for purchasing with us....");
        navigate('/')
    }

    return (
        <>
            <Header />
            <div className="px-5" style={{ paddingTop: '100px', minHeight: '70vh' }}>
                {
                    userCart?.length > 0 ?
                        <>
                            <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
                            <div className='grid grid-cols-3 gap-4 mt-5'>
                                <div className="col-span-2 shadow border rounded p-5">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr>
                                                <td className="font-semi-bold">#</td>
                                                <td className="font-semi-bold">Name</td>
                                                <td className="font-semi-bold">Image</td>
                                                <td className="font-semi-bold">Quantity</td>
                                                <td className="font-semi-bold">Price</td>
                                                <td className="font-semi-bold">...</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userCart?.map((product, index) => (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{product?.title}</td>
                                                        <td><img src={product?.thumbnail} alt="" height={'70px'} width={'70px'} /></td>
                                                        <td>
                                                            <div className="flex">
                                                                <button onClick={() => handleDecrementQuantity(product) } className="font-bold">-</button>
                                                                <input type="text" style={{ width: '40px' }} className='border rounded p-1 mx-2' value={product?.quantity} readOnly />
                                                                <button onClick={() => dispatch(incrementQuantity(product?.id))} className="font-bold">+</button>
                                                            </div>
                                                        </td>
                                                        <td>$ {product?.totalPrice}</td>
                                                        <td><button onClick={() => dispatch(removeCartItem(product?.id))} className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className="float-right">
                                        <button onClick={() => dispatch(emptyCart())} className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
                                        <Link to={'/'} className='bg-blue-600 ms-3 p-2 rounded text-white'>Shop More</Link>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div className="border rounded shadow p-5">
                                        <h2 className="text-2xl font-bold my-4">Total Amount : <span className='text-red-600'>$ {cartTotal}</span></h2>
                                        <hr />
                                        <button onClick={checkout} className="bg-green-600 rounded p-2 text-white w-full mt-4">Check OUT</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <div className="flex justify-center items-center h-screen">
                            <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="Empty Wishlist" />
                            <h1 className="text-3xl text-red-600">Your Cart is empty!!!</h1>
                        </div>
                }
            </div>
        </>
    )
}

export default Cart