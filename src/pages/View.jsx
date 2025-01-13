import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
    const dispatch = useDispatch()
    const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)
    const { id } = useParams()
    console.log(id);

    const [product, setProduct] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem("allProducts")) {
            const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
            console.log(allProducts)
            setProduct(allProducts.find(product => product.id == id));
        }
    }, [])

    const handleWishlist = () => {
        const existingProduct = userWishlist?.find(item => item?.id == id)
        if (existingProduct) {
            alert("Productt already in your Wishlist!!")
        } else {
            dispatch(addToWishList(product))
        }
    }

    const handleCart = () => {
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
            <div className="flex flex-col mx-5">
                <div className="grid grid-cols-2 items-center h-screen">
                    <div className='flex flex-col items-center'>
                        <img src={product?.thumbnail} width={'450px'} height={'200px'} alt="" />
                        <div className="flex justify-evenly mt-5 w-full">
                            <button onClick={handleWishlist} className="bg-blue-600 text-white p-2 rounded">Add to Wishlist</button>
                            <button onClick={handleCart} className="bg-green-600 text-white p-2 rounded">Add to Cart</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold'>PID : {product?.id}</h3>
                        <h1 className='text-5xl font-bold'>{product?.title}</h1>
                        <h4 className="font-bold text-red-600 text-2xl my-2">$ {product?.price}</h4>
                        <h4>Brand : {product?.brand}</h4>
                        <h4>Category : {product?.category}</h4>
                        <p>
                            <span className="font-bold">Description</span> : {product?.description}
                        </p>
                        <h3 className='font-bold mt-5 text-xl mb-2'>Client Reviews</h3>
                        {
                            product?.reviews?.map(item => (
                                <div key={item?.date} className="shadow border rounded p-2 mb-2">
                                    <h5>
                                        <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
                                    </h5>
                                    <p>Rating: {item?.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default View