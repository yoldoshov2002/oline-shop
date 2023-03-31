import React from "react";
import { NavLink, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="row">
        <div className="col-3">
              <div className="footer-box">
                  <h3>Biz haqimizda</h3>
                <ul>
                  <li>
                      <NavLink to='/exaple'>Topshirish punkitlari</NavLink>
                  </li>
                  <li>
                      <NavLink to='/vakansi'>Vakansiyalar</NavLink>
                  </li>
                </ul>
              </div>
        </div>
        <div className="col-3">
              <div className="footer-box">
                  <h3>Foydalanuvchilarga</h3>
                <ul>
                  <li>
                    <NavLink to='/contact'>Biz bilan bogʻlanish</NavLink>
                  </li>
                  <li>
                    <NavLink to='/question-answer'>Savol-javob</NavLink>
                  </li>
                </ul>
              </div>
        </div>
        <div className="col-3">
              <div className="footer-box">
                  <h3>Tadbirkorlarga</h3>
                <ul>
                  <li>
                      <NavLink to='/online'>Online soting</NavLink>
                  </li>
                  <li>
                    <NavLink to='/product'>Sotuvchi kabinetiga kirish</NavLink>
                  </li>
                </ul>
              </div>
        </div>
        <div className="col-3">
              <div className="footer-box">
                  <h3>Biz haqimizda</h3>
                <ul>
                  <li>
                      <NavLink to='/about'>About us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/policy'>Privacy policy</NavLink>
                  </li>
                </ul>
              </div>
        </div>
      </div>
      <div className="text-center foot">
        Copyright  &copy; copy
      </div>
    </div>
  );
};

export default Footer;
