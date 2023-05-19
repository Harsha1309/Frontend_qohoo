import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import Header from "./components/header/Header.jsx";
import Checkout from "./components/checkout/Checkout.jsx";
import Bootcamps from "./components/bootcamps/Bootcamps.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Checkout/>
    <Bootcamps/>
    <Footer/>
    </>
    );
}

export default App;
