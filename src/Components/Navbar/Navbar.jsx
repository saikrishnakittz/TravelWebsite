import React from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import {AiFillCloseCircle} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <section className="navBarSection">
        <div className="header">
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1 className="flex ">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>

          <div className="navBar">
            <ul className="navLists Flex">
              <li className="navItem">
                <a href="Home" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Products
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Resources
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Contacts
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Blog
                </a>
              </li>

              <div className="headersBtns flex">
                <button className="btn loginBtn">
                  <a href="#">Login </a>
                </button>
                <button className="btn">
                  <a href="#">Sign Up</a>
                </button>
              </div>
            </ul>

            <div className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
