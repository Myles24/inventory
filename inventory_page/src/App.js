import './App.css';
//import Notification from './components/Alert';
import './components/InventoryGrid2';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React from 'react';
//import InventoryGrid2 from './components/InventoryGrid2';
import Inventory from './components/pages/Inventory';
import Navbar from './components/navbar'
import Footer from './components/Footer';
import Shopping from './components/Shopping';
import Homepage from './components/Homepage';
import Checkout from './components/checkout';



function App() {
  return (
 
    <>
    
   <Router>
    <Navbar />
       <Routes>
        <Route path='/Inventory' exact element={<Inventory />} />
        <Route path='/cart' exact element={<Shopping />} />
        <Route path='/' exact element={<Homepage />} />
        <Route path="/check_out" exact element={<Checkout />} />
      </Routes>
      <Footer />
         </Router>
          
    </>
  );
}

export default App;
