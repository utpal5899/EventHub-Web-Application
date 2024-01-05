import logo from './logo.svg';
import './App.css';
import Addproduct from './Components/Addproduct';
import EventDisplay from './Components/EventDisplay';
 
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import SingleProduct_detailPage from './Components/SingleProduct_detailPage';
import Checkout_page from './Components/Checkout_page';
import Login_page from './Components/Login_page';
import Thank_you from './Components/Thank_you';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/new_event" element={<Addproduct />} />
          <Route path="/login_page" element={<Login_page />} />
          <Route path="/event" element={<EventDisplay />} />
          <Route path="/about" element={<About />} />
          <Route path="/all_events" element={<EventDisplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SingleProduct_detailPage" element={<SingleProduct_detailPage />} />
          <Route path="/checkout" element={<Checkout_page />} />
          <Route path="/thankyou" element={<Thank_you />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
