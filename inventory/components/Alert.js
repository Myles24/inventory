 import React,{useState} from 'react';
import { IconButton, Popover, Typography } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import '../App.css';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
function Notification()
{
const [show,setShow]=useState(true)
return(
    <div>
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
    </div>

); 
}
export default Notification;





















/*import { Button, Popover, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import {AddShoppingCart} from "@mui/icons-material/AddShoppingCart";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Notification() {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    }
return(
<div>
    <IconButton
    onClick={openPopover}
    style={{marginLeft: 80}}
    color="primary"
    >
        <NotificationsActiveIcon/>
        
    <Popover
    open={Boolean(anchor)}
    anchorEl={anchor}
    anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
    }}
    transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
    }}>

    
     
<Typography variant='h6'>
    <h2>Notifications</h2>
    <p> <font color="grey"> _______________</font></p>
    <h3> <font color="red">WARNING</font> </h3>
    <p> <font color="grey"> _______________</font></p>
    <p>Low On Chicken</p>
    <p> Low on Tajin</p>
    <p> NO SALT LEFT</p>

 </Typography>
    </Popover>
    </IconButton>
</div>
)
}
export default Notification
*/