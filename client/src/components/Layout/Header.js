import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  // const addClass = () => {
  //   document.querySelector('.katalog').classList.toggle('show')

  // }
  const showDropdown = () => {
    document.getElementById("showDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  return (
    <>
    <header className="header">
      <div className="head">
          <div className="head-logo">
          <Link to="/" className="head-logo">
              <div className="logo"><p>Mr</p></div> <b>GROCC</b>
            </Link>
          </div>
          <ul className="head-menu">
          <div className="dropdown">
          <button onClick={showDropdown} className="dropbtn">
            
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-41ba8b3e>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 3C6.67157 3 6 3.67157 6 4.5H18C18 3.67157 17.3284 3 16.5 3H7.5ZM4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5H4.5ZM3 11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.25ZM5.25 10.5C4.83579 10.5 4.5 10.8358 4.5 11.25V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V11.25C19.5 10.8358 19.1642 10.5 18.75 10.5H5.25Z" fill="#3131C4"></path>
                    </svg>
            Katalog</button>
          <div className="max-container">
          <div id="showDropdown" className="dropdown-content">
          <div className="row">
          {categories?.map((c) => (
                    <div className="col-md-1">
                      <Link
                        className="dropdown-text"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </div>
                  ))}
          </div>
        </div>
          </div>
          </div>
            <SearchInput />            
            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 24 24">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
<path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg> <p>Ro'yxatdan o'tish</p>

                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 24 24">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg> <p>Kirish</p>

                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle ttu"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 24 24">
<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg><p>{auth?.user?.name}</p>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.name == 'admin' && auth?.user?.phone == '+998938623880' ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Shaxsiy kabinet
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Chiqish
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <Badge count={cart?.length} showZero offset={[10, -5]}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgb(238, 96, 53)" class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                    </svg>
                   
             </Badge>
             <p className="ms-1">Savat</p>
              </NavLink>
            </li>
          </ul>
      </div>
      <div className="foot d-flex">
      <div className="row all-katalog">
        {categories?.map((c) => (
                     <div  className="fromLeft col-14">
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </div>
               ))}
               </div>
               <ul>
               <button onClick={showDropdown} className="single ">
                      Yana <span>
                        <MdArrowForwardIos/>
                      </span>
                    </button>
               </ul>
      </div>
    </header>
    </>
  );
};

export default Header;
