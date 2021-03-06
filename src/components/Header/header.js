import React from "react"
import headerStyles from "./header.module.css"
import Logo from "../../images/siteLogo.svg"
import CartIcon from "../../images/cartIcon.svg"
import Profile from "../../images/profile.svg"
import SearchIcon from "../../images/searchIcon.svg"
import WhatsappIcon from "../../images/whatsappIcon.svg"

export default function Header() {
  return (
    <header
      className={`d-flex align-items-center justify-content-center ${headerStyles.header}`}
    >
      <div
        className={`d-flex justify-content-between row ${headerStyles.innerHeader}`}
      >
        <div
          className={`d-flex align-items-center justify-content-center flex-column col-md-1 col-2 d-xl-none d-lg-none ${headerStyles.sandwichMenu}`}
        >
          <span></span>
          <span></span>
        </div>
        <div className={`col-lg-2 col-md-8 col-6 ${headerStyles.siteLogo}`}>
          <img className="site-logo__graphic" alt="be BodyWise" src={Logo} />
        </div>
        <ol
          className={`col-lg-8 d-xl-block d-lg-block d-md-none d-sm-none d-none ${headerStyles.headerLinks}`}
        >
          <li>Shop</li>
          <li>Take Self-Assesment</li>
          <li>Choose Cancers</li>
          <li>All Products</li>
          <li>Book Consultation</li>
        </ol>
        <div
          className={`d-flex justify-content-between col-lg-2 col-md-3 col-4 ${headerStyles.actionBar}`}
        >
          <div className="search-icon">
            <img src={SearchIcon} alt="Search Icon" />
          </div>
          <div className="whatsapp">
            <img src={WhatsappIcon} alt="WhatsApp Number" />
          </div>
          <div className="profile d-xl-block d-lg-none d-md-none d-sm-none d-none">
            <img src={Profile} alt="Profile Icon" />
          </div>
          <div className="cart">
            <img src={CartIcon} alt="Cart Icon" />
          </div>
        </div>
      </div>
    </header>
  )
}
