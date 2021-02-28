import React from "react";
import headerStyles from "./header.module.css";
import Logo from "../../images/siteLogo.svg"
import CartIcon from "../../images/cartIcon.svg"
import Profile from "../../images/profile.svg"
import SearchIcon from "../../images/searchIcon.svg"
import WhatsappIcon from "../../images/whatsappIcon.svg"

export default function Header() {
    return (
        <header className={`d-flex align-items-center justify-content-center ${headerStyles.header}`}>
            <div className={`d-flex justify-content-between ${headerStyles.innerHeader}`}>
                <div className="site-logo">
                    <img className="site-logo__graphic" alt="be BodyWise" src={Logo} />
                </div>
                <ol className={headerStyles.headerLinks}>
                    <li>Shop</li>
                    <li>Take Self-Assesment</li>
                    <li>Choose Cancers</li>
                    <li>All Products</li>
                    <li>Book Consultation</li>
                </ol>
                <div className={`d-flex justify-content-between ${headerStyles.actionBar}`}>
                    <div className="search-icon">
                        <img src={SearchIcon} alt="Search Icon"/>
                    </div>
                    <div className="whatsapp">
                        <img src={WhatsappIcon} alt="WhatsApp Number"/>
                    </div>
                    <div className="profile">
                        <img src={Profile} alt="Profile Icon"/>
                    </div>
                    <div className="cart">
                        <img src={CartIcon} alt="Cart Icon"/>
                    </div>
                </div>
            </div>
        </header>
    )
}