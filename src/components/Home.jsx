import { useDispatch, useSelector } from 'react-redux';
// import products from '../data/productList.json';
import {fetchAllProducts} from '../data/productSlice';
import cartSlice from '../data/cartSlice';
import { useEffect } from 'react';
const Home = ()=>{
   const {addToCart, removeFromCart} = cartSlice.actions;
   const dispatch = useDispatch();
   const state =useSelector((state)=> state);
   const {cart, products} = state
   //console.log(cartProductIds);
   useEffect(()=>{
     dispatch(fetchAllProducts('http://localhost:5000/products'));
   }, [dispatch])
    return(
        <>
    <div className='container'>
      <div className='row'>
      <div className='col-md-12'>
          <h1 className='my-3'>Home Page</h1>
        </div>
        {products.data?.map((item, index)=><div className='col-md-3 my-3' key={index}>
            <div className='card'>
                <img className="card-img-top1" alt={item.name} src={item.imgUrl} />
                <div className='card-body'>
                    <h5>{item.name}</h5>
                    <p><span className='d-block'>Rs. {item.price}</span></p>
                    {!cart.cartProductIds.includes(item.id) && (<button className='btn btn-primary' onClick={()=>dispatch(addToCart(item.id))}>Add to Cart</button>)}
                    {cart.cartProductIds.includes(item.id) &&(<button className='btn btn-primary' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</button>)}
                </div>
            </div>
        </div>)}
       
      </div>
   </div>
        </>
    )
}
export default Home;