import React from 'react'
import Navbar from './components/Navbar'
// import Footer from "./components/Footer";
import 'remixicon/fonts/remixicon.css'
import AddProducts from "./Pages/AddProducts"
// import { Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
import UserHome from './Pages/UserHome'
import Cart from './Pages/Cart'
import UserProduct from './Pages/UserProduct'
import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import { CartProvider } from "./Pages/CartContext";
// import  Login from './Pages/Login'
import Login from './Pages/Login'
import Admin from   './Pages/admin'
import Footer from './components/Footer'





const App = () => {
  const location = useLocation();
  // const isRootPath = location.pathname === '/';
  const showFooterPaths = ['/', '/admin/'];
  const shouldShowFooter = showFooterPaths.includes(location.pathname);

  return (
    <div>
      {/* <CartProvider> */}
      {/* <Router> */}
        
        <Routes>
          <Route path='/' element={<UserHome/>}/>
          <Route path="/products/detail/:productId" element={<UserProduct/>} />
          <Route path="/cart" element={<Cart />} />
          <Route  path='/admin/' element={<Home/>}/>
          <Route  path='/admin/products/add' element={<AddProducts/>}/>
          <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
          <Route  path='/users/' element={<Login/>}/>
          <Route  path='/adminlogin/' element={<Admin/>}/>
          </Routes>
          {/* {isRootPath && <Footer />} */}
          {shouldShowFooter && <Footer />}
          

      {/* </Router> */}
    {/* </CartProvider> */}

      {/* <Routes>
        <Route  path='/admin/' element={<Home/>}/>
        <Route  path='/admin/products/add' element={<AddProducts/>}/>
        <Route  path='/admin/products/detail/:productId'  element={<ProductDetail/>}/>
      </Routes>  */}
      
    </div>


  )
}
const AppContent = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};


export default App