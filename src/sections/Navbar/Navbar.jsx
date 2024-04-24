import './Navbar.css'
import {  RiCloseFill, RiHeartFill, RiMenu3Fill, RiSearchLine, RiShoppingCartFill, RiUserFill } from 'react-icons/ri'
import { useState } from 'react'
const Navbar = () => {
     const [menuOpened, setmenuOpened] = useState(false)
    return (
        <header>
            <nav>
                <div className='tn-container container'>
                    <a href="" className="logo">NHS</a>
                    <div className="search-box">
                        <input type='search' name='search' id='' placeholder='Search For Products' />
                        <div className="search-icon"><RiSearchLine /></div>
                    </div>
                    <div className="tn-icons">
                        <a href=''><RiUserFill /></a>
                        <a href='' className='fav-icon'><RiHeartFill /><span className='count'>0</span></a>
                        <a href='' className='cart-icon'><RiShoppingCartFill /><span className='count'>0</span></a>
                    </div>
                </div>
                <hr />
                <div className="bn-container container">
                    <ul className="navlist">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#categories'>Categories</a></li>
                        <li><a href='#shop'>Shop</a></li>
                        <li><a href='#deal'>Deal</a></li>
                        <li><a href='#testimonial'>Testimonial</a></li>
                        <li><a href='#Blog'>Blog</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                    </ul>
                </div>
                <div className="nm-nav">
                    <div className="nm-container container">
                        <a href='' className='logo'>NHS</a>
                        <ul className="nav-menu" style={{transform:menuOpened && "translate(0%)"}}>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#categories'>Categories</a></li>
                            <li><a href='#shop'>Shop</a></li>
                            <li><a href='#deal'>Deal</a></li>
                            <li><a href='#testimonial'>Testimonial</a></li>
                            <li><a href='#Blog'>Blog</a></li>
                            <li><a href='#contact'>Contact Us</a></li>
                        </ul>
                        <div className="menu-btn">
                            {!menuOpened?
                            <RiMenu3Fill size={30} onClick={()=>setmenuOpened(true)}/>:
                            <RiCloseFill size={30} onClick={()=>setmenuOpened(false)}/>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar