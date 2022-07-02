import "../resources/css/header.css";
import {Link, useLocation, useNavigate } from "react-router-dom";

import hamburger from "../resources/icon-hamburger.svg";
import close from "../resources/icon-close.svg";
import { useEffect, useState } from "react";

function Header(props) {
  const [menuStatus, setMenuStatus] = useState("close");
  const [linkActive, setActiveLink] = useState(1);
  const [menuActive,setMenuActive] = useState();

  const location = useLocation()

  useEffect(()=>{
    if(menuActive=='active') setMenuActive('inactive');
    else setMenuActive('active')
  },[menuStatus])

  useEffect(()=>{
    if(location.pathname==='/'){setActiveLink(1)}
    else if(location.pathname==='/dest'){setActiveLink(2)}
    else if(location.pathname==='/crew'){setActiveLink(3)}
    else if(location.pathname==='/tech'){setActiveLink(4)}
  },[location])

  const menuIcon =
    menuStatus == "close" ? (
      <img
        src={hamburger}
        alt="menu"
        className="hamburger"
        onClick={() => setMenuStatus("open")}
      />
    ) : (
      <img
        src={close}
        alt="close"
        className="close"
        onClick={() => setMenuStatus("close")}
      />
    );

  return (
    <>
      <nav id="nav-bar">
        <section id="nav-container">
          <div className="logo-container">
            <img src="images/logo.svg" alt="logo" className="logo" />
            {menuIcon}
          </div>
          <ul className={menuStatus == "open" ? "active" : "inactive"}>

            <Link to="/">
              <li className={linkActive==1?'active-link':''} onClick={()=>setActiveLink(1)}>
                <span>00</span> Home
              </li>
            </Link>
            <Link to="/dest">
              <li className={linkActive==2?'active-link':''} onClick={()=>setActiveLink(2)}>
                <span>01</span> Destination
              </li>
            </Link>
            <Link to="/crew">
              <li className={linkActive==3?'active-link':''} onClick={()=>setActiveLink(3)}>
                <span>02</span> Crew
              </li>
            </Link>
            <Link to="/tech">
              <li className={linkActive==4?'active-link':''} onClick={()=>setActiveLink(4)}>
                <span>03</span> Technology
              </li>
            </Link>
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Header;
