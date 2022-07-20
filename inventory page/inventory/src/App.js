//import InventoryGrid from './components/InventoryGrid';
import Sidebar from './components/Sidebar';
import './App.css';
import Notification from './components/Alert';
import './components/InventoryGrid2';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Shopping from './components/shopping';
import React from 'react';
import InventoryGrid2 from './components/InventoryGrid2';
//var htmlContent = require('path/to/html/file.html');


// or you can also write
// import htmlContent from 'path/to/html/file.html');




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline">
        <Shopping />
          <Notification></Notification>
          </div>
        <InventoryGrid2></InventoryGrid2>
         
         
        
         
          
      </header>
    </div>
  );
}

export default App;
