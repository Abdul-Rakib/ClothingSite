import './App.css';
import HeroComponent from './components/Hero/hero';
import Navbar from './components/Navbar/navbar';
import Login from './pages/ AuthPages/login';
import Register from './pages/ AuthPages/register';
import ForgetPassword from './pages/ AuthPages/forgetpassword';
import AboutPage from './pages/About/about';
import AllProducts from './pages/AllProducts/allproducts';
import Contact from './pages/Contact/contact';
import Footer from './pages/Footer/footer';
import Homepage from './pages/Homepage/homepage';
import ProductPage from './pages/ProductPage/productpage';
import Cart from './pages/Cart/cart';
import Checkout from './pages/Checkout/checkout';

function App() {
  return (
    <>
    <Navbar/>
    {/* <HeroComponent/> */}
    {/* <Homepage /> */}
    {/* <AllProducts/> */}
    {/* <Footer/> */}
    {/* <AboutPage/> */}
    {/* <Contact/> */}
    {/* <Login/>  */}
    {/* <Register/> */}
    {/* <ForgetPassword/> */}
    {/* <ProductPage/> */}
    {/* <Cart/> */}
    <Checkout/>
    </>
  );
}

export default App;
