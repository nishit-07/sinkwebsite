import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <>
   <Router>
      <Navbar/>
    <Routes>
    <Route exact path="/"     element={<Home />}></Route> 
    <Route exact path="/Product"     element={<Product />}></Route> 
    <Route exact path="/About"     element={<About />}></Route> 
    <Route exact path="/Contact"     element={<Contact />}></Route> 
    </Routes>
      <Footer/>
      
      </Router>
    </>
  );
}

export default App;
