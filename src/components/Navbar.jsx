import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import themeSlice from "../data/themeSlice";
import langSlice from "../data/langSlice";

const Navbar = ()=>{
  // const {cartProductIds} = useSelector((state)=>state.cart)
  // const {theme}=useSelector((state)=> state.theme)
  // const {toggleTheme} = themeSlice.actions;
  // const dispatch = useDispatch();
  const {toggleTheme} = themeSlice.actions;
  const {toggleLang} = langSlice.actions;
  const dispatch = useDispatch();
  const state =useSelector((state)=> state);
  const cartProductIds = state.cart.cartProductIds;
  const theme = state.theme.theme;
  const lang = state.lang.lang;

    return(
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
            <Link className="nav-link" to="/demo">Demo</Link>
           </li>
      {/* <li className="nav-item">
         <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/demo">Demo</Link>
        </li> */}
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
           <span className="cartNo">{cartProductIds.length}</span>
        </Link>
           </li>
           
        <li className="nav-item"><a className="toggle ms-2" onClick={() => dispatch(toggleLang())}>{lang==="en"?"eng":"हिन्दी"} </a></li> 
          <li className="ms-3 mt-2">
          <div className="form-check form-switch">
  <input onClick={() => dispatch(toggleTheme())} className={theme==="light"?"form-check-input bg-white":"form-check-input bg-dark"} type="checkbox" id="mySwitch" name="darkmode" value="no" />
</div>
          </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;