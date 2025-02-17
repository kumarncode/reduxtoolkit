import Home from './components/Home';
import Cart from './components/Cart';
import Demo from './components/Demo';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
   <>
   <Router>
   <Navbar />
   <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/demo" element={<Demo />} />
   </Routes>
   </Router>

   </>
  );
}

export default App;
