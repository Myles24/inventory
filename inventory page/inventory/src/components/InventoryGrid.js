import React, { useState, useEffect } from "react";
import '../App.css'
import { Button, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';





const InventoryGrid = () => {
// const [showMessage, setShowMessage] = useState(true);
return(


  <div className='FoodGrid'>
    <div className='LoginButtons'>
    <IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
    <Button variant="contained">Sign Up</Button>
    </div>
    <html>
    <head>
    <style>
    </style>
    <script>
      var 
    </script>
    </head>
    <body>
    
    <div>
    <div class="grid-container">
      <div class="grid-item" >Item Name</div>
      <div class="grid-item">Amount Left</div>
      <div class="grid-item">Amount Needed</div>  
      <div class="grid-item">How Much More Is Needed</div>
    
    </div>
    
    </div>
    </body>
    </html>
  </div>
  
)

}
export default InventoryGrid;