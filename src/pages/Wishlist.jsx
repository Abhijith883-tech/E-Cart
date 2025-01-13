import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
    const dispatch = useDispatch()
    const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)

    const handleCart = (product) => {
        dispatch(removeItem(product.id))
        dispatch(addToCart(product))
        const existingProduct = userCart?.find(item => item?.id == id)
        if (existingProduct) {
            alert("Product quantity is incrementing!!")
        } else {
            alert("Product added to cart!!")
        }
    }

    return (
        <>
            <Header />
            <div className="px-5" style={{ paddingTop: '100px' }} >
                {
                    userWishlist?.length > 0 ?
                        <>
                            <h1 className='text-4xl text-red-600 font-bold'>My WishList</h1>
                            <div className="grid grid-cols-4 gap-4 mt-5">
                                {
                                    userWishlist?.map(item => (
                                        <div className="rounded border p-2 shadow">
                                            <img src={item?.thumbnail} width={'100%'} height={'200px'} alt="" />
                                            <div className="text-center">
                                                <h3 className='text-xl font-bold'>{item?.name}</h3>
                                                <div className="flex justify-evenly mt-3">
                                                    <button onClick={() => dispatch(removeItem(item?.id))} className="text-2xl"><i className="fa-solid fa-heart-circle-xmark text-red-500"></i></button>
                                                    <button onClick={() => dispatch(handleCart(item))} className="text-2xl"><i className="fa-solid fa-cart-plus text-green-700"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <div className="flex justify-center items-center h-screen">
                            <img src="https://sa.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="Empty Wishlist" />
                            <h1 className="text-3xl text-red-600">Your Wishlist is empty!!!</h1>
                        </div>
                }
            </div>
        </>
    )
}

export default Wishlist