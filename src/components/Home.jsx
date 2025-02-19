import { useDispatch, useSelector } from 'react-redux';
// import products from '../data/productList.json';
import {fetchAllProducts} from '../data/productSlice';
import cartSlice from '../data/cartSlice';
import { useEffect, useState } from 'react';
const Home = ()=>{
const [modelId, setModelId] = useState({
    id:'',
    name:'',
    imgUrl:''
});
   const {addToCart, removeFromCart} = cartSlice.actions;
   const dispatch = useDispatch();
   const state =useSelector((state)=> state);
   const {cart, products, lang} = state
   useEffect(()=>{
     dispatch(fetchAllProducts('http://localhost:5000/products'));
   }, [dispatch])

   
    return(
        <>
    <div className='container'>
{lang.lang==="en"?
<>
<div className='row'>
      <div className='col-md-12'>
          <h1 className='my-3'>Home Page</h1>
        </div>
        {products.data?.map((item, index)=><div className='col-md-3 my-3' key={index}>
            <div className='card'>
                <img className="card-img-top1" onClick={()=>setModelId({ id: item.id, name: item.name, imgUrl: item.imgUrl })} alt={item.name} src={item.imgUrl} data-bs-toggle="modal" data-bs-target="#myModal" />
                <div className='card-body'>
                    <h5>{item.name}</h5>
                    <p><span className='d-block'>Rs. {item.price}</span></p>
                    {!cart.cartProductIds.includes(item.id) && (<button className='btn btn-primary' onClick={()=>dispatch(addToCart(item.id))}>Add to Cart</button>)}
                    {cart.cartProductIds.includes(item.id) &&(<button className='btn btn-primary' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</button>)}
                </div>
            </div>
        </div>)}
        
      </div>

</>
:
<>
<div className='row'>
      <div className='col-md-12'>
          <h1 className='my-3'>होम पेज</h1>
        </div>
        {products.data?.map((item, index)=><div className='col-md-3 my-3' key={index}>
            <div className='card'>
                <img className="card-img-top1" alt={item.name} src={item.imgUrl} />
                <div className='card-body'>
                    <h5>{item.hname}</h5>
                    <p><span className='d-block'>रु. {item.price}</span></p>
                    {!cart.cartProductIds.includes(item.id) && (<button className='btn btn-primary' onClick={()=>dispatch(addToCart(item.id))}>Add to Cart</button>)}
                    {cart.cartProductIds.includes(item.id) &&(<button className='btn btn-primary' onClick={()=>dispatch(removeFromCart(item.id))}>Remove from Cart</button>)}
                </div>
            </div>
        </div>)}
      </div>
</>
}
     
   </div>

<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h4 className="modal-title">Modal Heading</h4> */}
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div className="modal-body">
       <img className="w-100" alt={modelId.name} src={modelId.imgUrl} />
      </div>

      {/* <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div> */}

    </div>
  </div>
</div>

        </>
    )
}
export default Home;