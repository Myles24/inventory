import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';
import "./main.css";
import './navbar.css';
import { house_items, house_quantity_left, food_items, food_quantity_left } from "./InventoryData";
import { Link } from 'react-router-dom';




export const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1);
  
  }

export var house_list = [0,0,0,0,0,0,0,0,0,0,0]
export var food_list = [0,0,0,0,0,0,0,0,0,0,0]


 

const Shopping=()=> {
const paperStyle={
    padding: "20px",
    height: "130vh",
    width: 280,
    margin: "20px auto"  
}
const avatarStyle={
    backgroundColor:"black"
}
const btnstyle={
    margin:"8px 0"
}

const forceUpdate = useForceUpdate();

    return(
        <Grid>
             <Paper elevation={10} style={paperStyle}>
                <Grid align="right">
                
                <Grid align="center">
                <Avatar style={avatarStyle}><ShoppingCartIcon></ShoppingCartIcon></Avatar>
                <h2>Welcome To your Online Shopping Cart</h2>
                </Grid>
                </Grid>

                <div className="things">
                    <div className="buttons">
                        <p>{house_items[0]}</p>
                        <Button onClick={() => {house_quantity_left[0] = house_quantity_left[0] - 1; house_list[0]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{house_list[0]}</p>
                    </div>
                    <div className="buttons">
                        <p>{house_items[1]}</p>
                        <Button onClick={() => {house_quantity_left[1] = house_quantity_left[1] - 1; house_list[1]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{house_list[1]}</p>
                    </div>
                    <div className="buttons">
                        <p>{house_items[2]}</p>
                        <Button onClick={() => {house_quantity_left[2] = house_quantity_left[2] - 1; house_list[2]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{house_list[2]}</p>
                    </div>
                    <div className="buttons">
                        <p>{house_items[3]}</p>
                        <Button onClick={() => {house_quantity_left[3] = house_quantity_left[3] - 1; house_list[3]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{house_list[3]}</p>
                    </div>
                    <div className="buttons">
                        <p>{food_items[0]}</p>
                        <Button onClick={() => {food_quantity_left[0] = food_quantity_left[0] - 1; food_list[0]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{food_list[0]}</p>
                    </div>
                    <div className="buttons">
                        <p>{food_items[1]}</p>
                        <Button onClick={() => {food_quantity_left[1] = food_quantity_left[1] - 1; food_list[1]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{food_list[1]}</p>
                    </div>
                    <div className="buttons">
                        <p>{food_items[2]}</p>
                        <Button onClick={() => {food_quantity_left[2] = food_quantity_left[2] - 1; food_list[2]+=1; forceUpdate();}}>+</Button>
                        <Button>-</Button>
                        <p>{food_list[2]}</p>
                    </div>



                </div>
                
                <Link to='/check_out'>
                 
                
                <Button
                    type="Submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                    >
                        <p>CheckOut</p>
                     </Button>
                     </Link>
                     
<p> Thank you so much for Donating to the Hope Center!</p>
<p></p>
<font font-size="100px"><p>Provided by Code Differently Dev Shop </p></font>



                     
                </Paper>
                </Grid>

    )
}
export default Shopping;