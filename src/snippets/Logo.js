import React from "react"
import { Link } from 'react-router-dom';
import logoimage from '../styles/header/logo.webp'
export default (props) => {
  return (
    <React.Fragment>
      {/* Logo */}
      <h1 className="header__logo">
        <Link to="/home">
            <img alt="Image" data-sizes="auto" data-srcset={logoimage} src={logoimage} className="lazyload" />
        </Link>
      </h1>
      {/* End logo */}
    </React.Fragment>
  )
}