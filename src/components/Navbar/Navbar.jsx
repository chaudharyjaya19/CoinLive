import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext.jsx'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch(event.target.value) {
            case "usd":{
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case "eur":{
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case "inr":{
                setCurrency({name: "inr", symbol: "₹"});
                break;
            }
            default:{
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }
    }
    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt="" className="logo" />
            </Link>
            <ul className='nav-links'>
                <Link to={'/'}><li>Home</li></Link>
                <li><a href="#about">Features</a>
                    {/* <ul>
                        <li><a href="#about">Fear & Greed Index</a></li>
                        <li><a href="#about">Gas Fee Tracker</a></li>
                        <li><a href="#about">Trending Tokens</a></li>
                    </ul> */}
                </li>
                <li><a href="#services">Pricing</a></li>
                <li><a href="#portfolio">Blog</a></li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                {/* <button>Sign up <img src={arrow_icon} alt="" /></button> */}
            </div>
        </div>
    )
}

export default Navbar
