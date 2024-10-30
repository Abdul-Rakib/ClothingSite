import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import HeroComponent from './components/Hero/hero';
import Navbar from './components/Navbar/navbar';
import Login from './pages/ AuthPages/login';
import Register from './pages/ AuthPages/register';
import ForgetPassword from './pages/ AuthPages/forgetpassword';
import ResetPassword from './pages/ AuthPages/resetpassword';
import AboutPage from './pages/About/about';
import AllProducts from './pages/AllProducts/allproducts';
import Contact from './pages/Contact/contact';
import Footer from './pages/Footer/footer';
import TermsConditions from './pages/Footer/Policies/tnc';
import PrivacyPolicy from './pages/Footer/Policies/privacy';
import RefundPolicy from './pages/Footer/Policies/refund';
import ShippingPolicy from './pages/Footer/Policies/shipping';
import Homepage from './pages/Homepage/homepage';
import ProductPage from './pages/ProductPage/productpage';
import Cart from './pages/Cart/cart';
import Confirmation from './pages/confirmationPage/confirmation';
import Dashboard from './pages/UserDashboard/dashboard';
import NotFound from './components/ErrorPage/notfound';
import Orders from './pages/Orders/orders';
import OrderDetails from './pages/Orders/orderdetails';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/resetpassword/:userId/:token" element={<ResetPassword/>} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orderdetails" element={<OrderDetails/>} />

        <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
      </Routes>
      <Footer /> {/* Place Footer outside the Routes if you want it on every page */}
    </Router>
  );
}

export default App;
