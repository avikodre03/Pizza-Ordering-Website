import React from 'react'
import './NavBar.css'
import { FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import logos from '../../Image/logo1.png'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className='NavOuterDiv'>
            <div className="navImageDiv">
                <img src={logos} alt="" />
            </div>
            <div className="navMenuDiv">
                <ul>
                <Link to="/"> <li>HOME</li></Link>
                   
                    <li>PAGES</li>
                 <Link to="./menupage"><li>MENU</li></Link>   
                    <li>EVENTS</li>
                    <li>BLOG</li>
                    <li>LANDING</li>
                </ul>
            </div>



            <div className="navIconDiv">
                <div className="navIconUpperDiv">
                    <FaTwitter className='fontAwesomeIcon' />
                    <FaFacebookF className='fontAwesomeIcon' />
                    <AiOutlineCamera className='fontAwesomeIcon' />
                    <FaLinkedinIn className='fontAwesomeIcon' />
                </div>
                <div className="navOnlineOrderDiv">
                    <p>ORDER </p>
                    <p>ONLINE </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar