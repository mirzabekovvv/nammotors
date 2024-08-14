import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Biz blan bog'lanish</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Tel: +998 99 366 62 35
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Tel: +998 90 222 48 60               </a>
              </li>
              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                 Usta kerak bolsa tel: +998 90 000 00 00              </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Foydalanuvchilarga</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Biz bilan bog'lanish
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Savol-Javob
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
            <h4 className="footer-container-title">Manzil</h4>

            <ul className="footer-container-list">
              <li className="footer-container-item">
                <a className="footer-container-link" href="">
                  Namangan Viloyat Toshbuloq
                </a>
              </li>

              <li className="footer-container-list">
                <a className="footer-container-link" href="">
                  Dokon: Toshkent Olmazor
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-container-internal-wrapper">
           
            <div className="footer-container-internal-wrapper-bottom">
              <h4 className="footer-container-bottom-contact-title">
                Nammotors ijtimoiy tarmoqlarda
              </h4>

              <ul className="footer-container-bottom-contact-list">
                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaInstagram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaTelegram />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaYoutube />
                  </a>
                </li>

                <li className="footer-container-bottom-contact-item">
                  <a className="footer-container-bottom-contact-link" href="">
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
