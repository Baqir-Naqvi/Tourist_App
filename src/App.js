import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import ContactUs from "./pages/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
         
          <Route path="/" element={<Hero />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Cards />
      <Footer/>
      </Router>
     
     
      
    </div>
  );
}

export default App;
