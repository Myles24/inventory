import React, {useState} from "react"
import "./main.css"
import "../App.css"
import {alphabatize, inventory_list, left_amount, needed_amount, house, food, quantity_more, much_more, getColor, color_list} from "./InventoryData"
import list_maker from "./InventoryData";




export const useForceUpdate = () => {
  // eslint-disable-next-line
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1);

}


function InventoryGrid2() {

  const [click, setClick] = useState(false); 
  const openFood = () => setClick(true);
  const forceUpdate = useForceUpdate();
  // eslint-disable-next-line
  const [show, setShow] = useState(true);
  

  return (

    <html>
      <head>
        <title>Hope Center</title>
        <link rel="stylesheet" href="main.css" />
      </head>

      <body>

        <main>
        <section class="sort-options">
          <h2>Categories</h2> 
        <button class="sort-more" onClick={() => {food(); much_more(); getColor(); list_maker(); openFood(); forceUpdate(); }}>Food</button>
            <button class="sort-more" onClick={() => { house(); much_more();  getColor(); list_maker(); openFood(); forceUpdate(); }}>Household Items</button>
          </section>
          <section class="sort-options">
            <h3>SORT BY</h3>
            <button class="sort-name" onClick={() => { alphabatize(); getColor(); forceUpdate(); }}>Sort By Name</button>
            <button class="sort-left" onClick={() => { left_amount(); getColor(); forceUpdate(); }}>Sort By Amount Left</button>
            <button class="sort-needed" onClick={() => { needed_amount(); getColor(); forceUpdate(); }}>Sort By Amount Needed</button>
            <button class="sort-more" onClick={() => { quantity_more(); getColor(); forceUpdate(); }}>Sort By How much more</button>


          </section>
          <section class="list-headers">
            <div class="header-title">Name</div>
            <div class="header-left">Amount Left</div>
            <div class="header-needed">Amount Needed</div>
            <div class="header-more">How much More Needed</div>


          </section>
          

            <section className="list">
            {click?
            <div className="list-item">
              
              <div className="item-title">
             

                <div className="item">{inventory_list[0]}</div>
                <div className="item">{inventory_list[4]}</div>
                <div className="item">{inventory_list[8]}</div>
                <div className="item">{inventory_list[12]}</div>
                <div className="item">{inventory_list[16]}</div>
              </div>
              <div className="item-left">
                <div className="item" style={{ color: color_list[0] }}>{inventory_list[1]}</div>
                <div className="item" style={{ color: color_list[1] }}>{inventory_list[5]}</div>
                <div className="item" style={{ color: color_list[2] }}>{inventory_list[9]}</div>
                <div className="item" style={{ color: color_list[3] }}>{inventory_list[13]}</div>
                <div className="item" style={{ color: color_list[4] }}>{inventory_list[17]}</div>
              </div>
              <div className="item-more">
                <div className="item" >{inventory_list[2]}</div>
                <div className="item">{inventory_list[6]}</div>
                <div className="item">{inventory_list[10]}</div>
                <div className="item">{inventory_list[14]}</div>
                <div className="item">{inventory_list[18]}</div>
              </div>
              <div className="item-needed">
                <div className="item" style={{ color: color_list[0] }}>{inventory_list[3]}</div>
                <div className="item" style={{ color: color_list[1] }}>{inventory_list[7]}</div>
                <div className="item" style={{ color: color_list[2] }}>{inventory_list[11]}</div>
                <div className="item" style={{ color: color_list[3] }}>{inventory_list[15]}</div>
                <div className="item" style={{ color: color_list[4] }}>{inventory_list[19]}</div>
              </div>
              
            </div>
            :null
            }
          </section>


        </main>
      
        
        

      </body>

    </html>

    
  )

}


export default InventoryGrid2;

