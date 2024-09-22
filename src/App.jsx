import './App.css';
import HeroComponent from './components/Hero/hero';
import Navbar from './components/Navbar/navbar';
import Footer from './pages/Footer/footer';
import Homepage from './pages/Homepage/homepage';

function App() {
  return (
    <>
    <Navbar/>
    <HeroComponent/>
    <Homepage />
    <Footer/>
    </>
  );
}

export default App;
