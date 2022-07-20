import React, { useState, useEffect } from "react";
import "../App.css";
import {Paper, Button} from "@mui/material";
import "./main.css"
import { NavLink as Link, NavLink } from "react-router-dom";

//import {displayList, List_items} from "./main"
import "../App.css"
import InventoryGrid2 from "./InventoryGrid2";


import './main.css';





const paperStyle={
    backgroundColor: "white",
    //padding: "5px",
    height: "70vh",
    width: 200,
    margin: "20px auto",
}

const btnstyle={
    backgroundColor: "#dde5ea",
    height: "100px",
    width: "200px"
}




function Sidebar(){
    return(
        
        
        <Paper style={paperStyle}>
        <div className="Sidebar">
           
            <Button style={btnstyle} 
            className="Button1"
            //onClick={displayList(List_items)}
            >
                Food
            </Button>



            <Button style={btnstyle} className="Button2">
                Household Items
            </Button>


        </div>
        </Paper>
    )
    
}



export default Sidebar;