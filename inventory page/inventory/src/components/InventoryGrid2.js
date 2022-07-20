import {Button} from "@mui/material"
import "./main.js"
import "./main.css"
import "../App.css"
import {inventory_list} from "./InventoryData"
import alpha from "./InventoryData"



//var food_list = ["Ketchup", "2", "3", "1"];


function InventoryGrid2() {
  return(
  <html>
    <head>
      <title>Hope Center</title>
      <link rel="stylesheet" href="main.css" />
    </head>
    <body>
    <header>
      <h1>Inventory</h1>
      </header>
    <main>
      <section class="sort-options">
        <Button class="sort-name" onClick={alpha}>Sort By Name</Button>
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
        {/*}
        <div className="list-item">
          
          <div className="item-title">{inventory_list[0]}</div>
          <div class="item-left">{inventory_list[1]}</div>
          <div class="item-more">{inventory_list[2]}</div>
          <div class="item-needed">{inventory_list[3]}</div>
          <div class="item-title">{inventory_list[4]}</div>
          <div class="item-left">{inventory_list[5]}</div>
          <div class="item-more">{inventory_list[6]}</div>
          <div class="item-needed">{inventory_list[7]}</div>
          <div class="item-title">{inventory_list[8]}</div>
          <div class="item-left">{inventory_list[9]}</div>
          <div class="item-more">{inventory_list[10]}</div>
          <div class="item-needed">{inventory_list[11]}</div>
          
          
        </div>
        {*/}
       </section>
  
    </main>
    
    </body>

  </html>
  
  )
}

export default InventoryGrid2;

