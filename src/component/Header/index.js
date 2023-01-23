import React, { useRef, useState } from "react";
import "./header.css";
import Logo from "../../assets/images/kwtro.png";
import Image1 from "../../assets/images/image1.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("app__header__list");
  const ref = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const showNavbar = () => {
    ref.current.classList.toggle("responsive__nav");
  };
  return (
    <>
      <div className="app__header__container">
        <div className="app__header_navbar">
          <div className="app__header__left">
            <p>
              <Link to="/home">
                <img src={Logo} width="80px" height="110px" />
              </Link>
            </p>
          </div>

          {/* <div className="app__header__right"> */}
          <ul
            className={`app__header__list ${menuOpen ? "open" : "closed"}`}
            ref={ref}
          >
            <li className="app__header__item">
              <Link
                to="/covid"
                className="__li__"
                style={{ color: "red" }}
                onClick={toggleMenu}
              >
                Covid-19
              </Link>
            </li>
            <li className="app__header__item">
              <Link to="/home" className="__li__" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="app__header__item dropdown__li">
              <Link className="__li__">Product & Services</Link>
              <i class="fa-solid fa-angle-down"></i>
              <div className="dropdown-content">
                <Link
                  className="__li__"
                  to="/waterTreatment"
                  onClick={toggleMenu}
                >
                  Water Treatment
                </Link>
                <Link
                  className="__li__"
                  to="/wasteWaterTreatment"
                  onClick={toggleMenu}
                >
                  Waste Water Treatment
                </Link>
                <Link
                  className="__li__"
                  to="/processWaterTreatment"
                  onClick={toggleMenu}
                >
                  Process Water Treatment
                </Link>
                <Link
                  className="__li__"
                  to="/specialtyChemicals"
                  onClick={toggleMenu}
                >
                  Specialty Chemicals
                </Link>
                <Link
                  className="__li__"
                  to="/spareAndConsumables"
                  onClick={toggleMenu}
                >
                  Spare & Consumables
                </Link>
                <Link
                  className="__li__"
                  to="/afterSaleService"
                  onClick={toggleMenu}
                >
                  After Sale Service
                </Link>
              </div>
            </li>
            <li className="app__header__item">
              <Link to="/infoCenter" className="__li__" onClick={toggleMenu}>
                Info Center
              </Link>
            </li>
            <li className="app__header__item">
              <Link to="/career" className="__li__" onClick={toggleMenu}>
                Careers
              </Link>
            </li>
            <li className="app__header__item">
              <Link to="/about" className="__li__" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="app__header__item">
              <Link to="/contact" className="__li__" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <div className="nav__btn nav__btn__close" onClick={showNavbar}>
              <i class="fa-regular fa-xmark" />
            </div>
          </ul>
          <div className="nav__btn" onClick={showNavbar}>
            <i className="fa-regular fa-bars" />
          </div>
          {/* </div> */}
        </div>
        <div className="app__header_hero">
          <div className="app__hero__left">
            <h1 className="app__hero__left__heading">
              Karachi Water
              <span style={{ color: "#21B6FF" }}> Technology</span>
            </h1>
            <br />
            <p className="app__hero__left__text">
              We’re the solution focused company which provides innovative
              customer services and thinking outside the bottle.
            </p>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-beween",
              }}
            >
              <button
                className="app__header__btn"
                style={{ marginRight: "10px" }}
                onClick={() => navigation("/infoCenter")}
              >
                Read More
              </button>
              <button
                className="app__header__btn1"
                onClick={() => navigation("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="app__hero__right">
            <img src={Image1} width="70%" height="65%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
