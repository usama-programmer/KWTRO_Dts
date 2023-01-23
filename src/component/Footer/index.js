import React from "react";
// import logo from "../../assets/images/footer_logo.png";
import "./footer.css";
import { BackTop } from "antd";

function Footer() {
  return (
    <>
      <footer class="main__footer__container">
        <div class="footer__container">
          <div class="footer__row">
            <div class="footer__col">
              <h4>About Us</h4>

              <p className="footer__text">
                We work directly with top brands, global specialists and
                innovative technologies to find the right solution for each and
                every project. From remote industry to humanitarian aid, we have
                the experience and know-how to get your project done right.
              </p>
            </div>
            <div class="footer__col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>

                <li>
                  <a href="/waterTreatment">Water Treatment</a>
                </li>
                <li>
                  <a href="/infoCenter">Info Center</a>
                </li>
                <li>
                  <a href="/career">Career</a>
                </li>
                <li>
                  <a href="about">About Us</a>
                </li>
                <li>
                  <a href="contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="footer__col">
              <h4>Contact Us</h4>
              <ul>
                <li style={{ color: "white" }}>
                  <i class="fa-solid fa-location-dot">
                    <span style={{ marginLeft: "10px" }}>
                      Karachi, Pakistan
                    </span>
                  </i>
                </li>

                <li style={{ color: "white" }}>
                  <i class="fa-solid fa-phone-volume">
                    <span style={{ marginLeft: "10px" }}>+92 305344242</span>
                  </i>
                </li>
                <li style={{ color: "white" }}>
                  <i class="fa-solid fa-envelope">
                    <span
                      style={{ marginLeft: "10px", textTransform: "lowercase" }}
                    >
                      info@riwayat-e-mumtaz.com
                    </span>
                  </i>
                </li>
              </ul>
            </div>
            <div class="footer__col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.youtube.com/@safdarfarooqui"
                  target="_blank"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-skype"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="copyright">Copyright &copy; 2023 DTS .</div>
        <BackTop>
          <div className="goTop">
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        </BackTop>
      </footer>
    </>
  );
}

export default Footer;
