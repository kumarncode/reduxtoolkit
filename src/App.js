import Home from './components/Home';
import Cart from './components/Cart';
import Demo from './components/Demo';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const state =useSelector((state)=> state);
  const theme=state.theme.theme;
  const font=state.font.fontSize;
  return (
   <div className={theme} style={{fontSize:`${font}px`}}>
   <Router>
   <Navbar />
   <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/demo" element={<Demo />} />
   </Routes>
   </Router>

   </div>
  );
}

export default App;
