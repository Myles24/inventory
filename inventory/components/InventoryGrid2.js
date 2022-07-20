import React, {useState, useEffect} from "react"
import * as ReactDOM from 'react-dom/client';
import {Button} from "@mui/material"
import "./main.js"
import "./main.css"
import "../App.css"
import {alpha, sort_amount_left, inventory_list} from "./InventoryData"
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

//import alpha from "./InventoryData"


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

//var food_list = ["Ketchup", "2", "3", "1"];

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1);
  
}

function InventoryGrid2() {
  const forceUpdate = useForceUpdate();
  const [show,setShow]=useState(true);
  const [showMessage, setShowMessage] = useState(true);
  return(

  <html>
    <head>
      <title>Hope Center</title>
      <link rel="stylesheet" href="main.css" />
    </head>
 
    <body>
    <header>
      
      <div className="">
        {
            
        }
        {
            <button
            onClick={()=> setShow(!show)} >
                <NotificationsActiveIcon></NotificationsActiveIcon>

            </button>
             
        }
        <button 
    href="https://3000-zaynahahmad-userstory-yksre0a3h45.ws-us54.gitpod.io">
        <AddShoppingCart/>
    </button>
    
    <h1>Inventory</h1>
    </div>
      </header>
    <main>
      <section class="sort-options">
        <button class="sort-name" onClick={() => {alpha(); forceUpdate();}}>Sort By Name</button>
        <button class="sort-left">Sort By Amount Left</button>
        <button class="sort-needed">Sort By Amount Needed</button>
        <button class="sort-more">Sort By How much more</button>


      </section>
      <section class="list-headers">
        <div class="header-title">Name</div>
        <div class="header-left">Amount Left</div>
        <div class="header-needed">Amount Needed</div>
        <div class="header-more">How much More Needed</div>
       

      </section>
      
      <section className="list">
        <div className="list-item">
          <div className="item-title">
            <div className="item">{inventory_list[0]}</div>
            <div className="item">{inventory_list[4]}</div>
            <div className="item">{inventory_list[8]}</div>
          </div>
          <div className="item-left">
            <div className="item">{inventory_list[1]}</div>
            <div className="item">{inventory_list[5]}</div>
            <div className="item">{inventory_list[9]}</div>
          </div>
          <div className="item-more">
            <div className="item">{inventory_list[2]}</div>
            <div className="item">{inventory_list[6]}</div>
            <div className="item">{inventory_list[10]}</div>
          </div>
          <div className="item-needed">
            <div className="item">{inventory_list[3]}</div>
            <div className="item">{inventory_list[7]}</div>
            <div className="item">{inventory_list[11]}</div>
          </div>
        </div>
       
       </section>
    </main>
    
    </body>

  </html>
  
  )
  
}

root.render(InventoryGrid2);


export default InventoryGrid2;

