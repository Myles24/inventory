import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import './Side.css';
import InventoryGrid2 from './InventoryGrid2';
import {alphabatize} from './InventoryData';
import { Button } from "@mui/material";
import {useForceUpdate} from "./InventoryGrid2";


function Sidebar() {
    

    const [click, setClick] = useState(false); 

    const openFood = () => setClick(true);
    const closeFood = () => setClick(false);

    const forceUpdate = useForceUpdate();


    return (
        <>
            <nav className="Sidebar">
                <div className="sidebar-container">
                    <button className={click ? 'Sidebar-Button' : "Selected-Button"} onClick={closeFood}>
                        CLOSE FOOD

                    </button>

                    <button className={click ? 'Selected-Button' : "Sidebar-Button"} onClick={openFood}>
                        OPEN FOOD
                    </button>

                    <div className='menu-icon' >

                        <div>
                            {
                                click ? <food_list_maker /> : null
                            }
                        </div>



                    </div>


                </div>
            </nav>


        </>
    )
}


export default Sidebar;


