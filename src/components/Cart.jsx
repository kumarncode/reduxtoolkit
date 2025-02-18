import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import products from '../data/productList.json';
import cartSlice from '../data/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();
    const {cartProductIds}=useSelector((state)=> state.cart);
    const {lang} = useSelector((state)=>state.lang)
    const cartProductsData = products.products.filter((product)=>cartProductIds.includes(product.id))
    const {removeFromCart,clearAllProduct} = cartSlice.actions;
    return (
        <div className='container'>
            {lang === "en" ?
            <>
            <div className='row'>
          <div className='offset-md-3 col-md-6 mt-3'>
                <h3>Your Cart</h3>
             </div>
             <div className='offset-md-3 col-md-6 my-3 py-3'>
                <div className='card'>
                    {cartProductsData.length > 0 && (<div className='card-body'>
                        {cartProductsData.map((item, index)=><div className='d-flex border p-3' key={index}>
                            <div className='col-md-9'>
                             <h6>{item.name} </h6>
                             <p>{item.price}</p>
                            </div>
                            <div className='col-md-3 text-end'><button className='btn btn-sm btn-danger' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button></div>
                        </div>)}
                        <div className='col-md-12'>
                            <Link className='btn btn-sm btn-danger' onClick={()=>dispatch(clearAllProduct())}>Reset Cart</Link>
                            <Link className='m-1 btn btn-sm btn-primary' to='/'>Continue Shoping</Link>
                        </div>
                    </div>)}
                    {cartProductsData.length < 1 && (<div className='card-body'>
                        <div className='d-flex border p-3'>
                            <div className='col-md-9'>
                             <h6>Empty Card </h6>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <Link className='m-1 btn btn-sm btn-primary' to='/'>Continue Shoping</Link>
                        </div>
                    </div>)}
                </div>                
             </div>
             
          </div>
            </>
            :
            <>
            <div className='row'>
          <div className='offset-md-3 col-md-6 mt-3'>
                <h3>आपकी कार्ट</h3>
             </div>
             <div className='offset-md-3 col-md-6 my-3 py-3'>
                <div className='card'>
                    {cartProductsData.length > 0 && (<div className='card-body'>
                        {cartProductsData.map((item, index)=><div className='d-flex border p-3' key={index}>
                            <div className='col-md-9'>
                             <h6>{item.hname} </h6>
                             <p>{item.price}</p>
                            </div>
                            <div className='col-md-3 text-end'><button className='btn btn-sm btn-danger' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button></div>
                        </div>)}
                        <div className='col-md-12'>
                            <Link className='btn btn-sm btn-danger' onClick={()=>dispatch(clearAllProduct())}>Reset Cart</Link>
                            <Link className='m-1 btn btn-sm btn-primary' to='/'>खरीदारी जारी रखें</Link>
                        </div>
                    </div>)}
                    {cartProductsData.length < 1 && (<div className='card-body'>
                        <div className='d-flex border p-3'>
                            <div className='col-md-9'>
                             <h6>खाली कार्ट </h6>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <Link className='m-1 btn btn-sm btn-primary' to='/'>खरीदारी जारी रखें</Link>
                        </div>
                    </div>)}
                </div>                
             </div>
             
          </div>
            </>
        }
          
        </div>
    );
};

export default Cart;