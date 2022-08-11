import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Buttons } from './buttons';
import './navbar.css';
import {low_item, find_low_item, find_low} from "./InventoryData";

export const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1);
  
  }

function Navbar() {
    const forceUpdate = useForceUpdate();
    const [clicks, setClicks] = useState(false);
    const[button, setButton] = useState(true);
    const [notifs, setNotifs] = useState(false);

    const handleClicks = () => setClicks(!clicks);
    const closeMobileMenu = () => setClicks(false);
    
    const handleNotifs = () => setNotifs(!notifs);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Hope Center Delaware
            </Link>  
            <button className="notification-button" onClick={() => { find_low(); find_low_item(); handleNotifs(); forceUpdate();}}> <i class={notifs? "fa-solid fa-bell": "fa-regular fa-bell"}></i></button>

            <div className='menu-icon' onClick={handleClicks}>
                <i className={clicks ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        <ul className={clicks ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Inventory' className='nav-links' onClick={closeMobileMenu}>
                    Inventory
                </Link>
            </li>
           
            <li className='nav-item'>
                <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                   My Account
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                 My Cart
                </Link>
            </li>
            
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Log In
                </Link>
            </li>
                
        </ul>
        {button && <Buttons buttonStyle='btn--outline'>SIGN UP</Buttons>}
    

        
        </div>

        


    </nav>
    {notifs?
                <div className="notification-wall" > 
                <div className="notification-title">
                   Notifications
                  </div>
                  <div className="notification-section-low">
                   <p> LOW ON THESE ITEMS </p>
                    </div>
                    <div className="low-items">
                    <div className="low-images">
                        <image src="https://th.bing.com/th/id/R.2a9b0995245663c3c44b058366bbd6ea?rik=4SDSu1FyDuodaQ&pid=ImgRaw&r=0" alt="Chicken"> </image>
                    </div>
                    <div className='notification-low-text'>
                    <ul>
                            <li>
                                {/* <p> Low On Chicken</p> */}
                                <p>{low_item[0]}</p>
                                <p>{low_item[1]}</p>
                                <p>{low_item[2]}</p>
                                <p>{low_item[3]}</p>
                                <p>{low_item[4]}</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="notification-section-pending">
                       <p> Pending Requests </p>
                    </div>
                    <div className='notification-pending-text'>
                        <ul>
                            <li>
                                <p> Pending Chicken Noodle Soup Donation</p>
                            </li>
                            <li>
                                <p> Pending Pizza Donation</p>
                            </li>
                            <li>
                                <p> Pending Cotton Candy Donation</p>
                            </li>
                        </ul>
                    </div>

                </div>
                : null}
    </>
  )
}



export default Navbar;