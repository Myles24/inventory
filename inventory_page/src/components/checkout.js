import { house_items, food_items,} from "./InventoryData";
import { Paper, Button} from "@mui/material";
import "./main.css";
import {house_list, food_list} from "./Shopping";
import { Link } from "react-router-dom";
import { color } from "@mui/system";


// var temp_house_list = [];
// var temp_food_list = [];
// let temp_house_items = [];




// export const temp_lists = () => {
//     temp_house_list = []
//     temp_house_items = []
   

//     for (var index = 0; index < house_list.length; ++index) {
//         if (house_list[index] = 0) {
//         temp_house_list.splice(index, 1);
//         temp_house_items.splice(index, 1);
//         }

//         else {
//         }
//     }
// }

const paperstyle={
    width: "900px",
    height: "1500px",
    background: "#bac0ff"
    
}
const imgstyle={
    width: "500px",
    height: "350px",
    padding: "10px"
}

function Checkout() {
    return(
        <div className="paper">
        <Paper style={paperstyle}>
        <div>
            <div className="title">
                <h1>Hope Center Checkout Page</h1>
            </div>
            <div className="image"> 
                <img style={imgstyle} src="https://www.newcastlede.gov/ImageRepository/Document?documentID=46217" alt="hopecenter"></img>
            </div>
            <div className="text">
                <p>You have requested:</p>
                
            </div>
            <div className="list">
                <li>{house_list[0] + " " + house_items[0] }</li>
                <li>{house_list[1] + " " + house_items[1] }</li>
                <li>{house_list[2] + " " + house_items[2] }</li>
                <li>{food_list[0] + ' ' + food_items[0]}</li>
                <li>{food_list[1] + ' ' + food_items[1]}</li>
                <li>{food_list[2] + ' ' + food_items[2]}</li>
            </div>
            <div className="text">
                <Link to="/sign-up">Please review your user information</Link>
            </div>
            <div className="text">
                <p>Would you like to confirm this order?</p>
            </div>
            <div className="yesnobutton">
                <Button>Yes</Button>
                <Link to="/cart"><Button><p>No</p></Button></Link>
            </div>
         
        </div>
        </Paper>
        </div>
        
    );

        
}

export default Checkout;