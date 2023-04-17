import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Login from "../compo/Login/Login";
import { useLayoutEffect } from "react";

const Navbar = () => {
  const [AnimationClass, setAnimationClass] = useState("");
  const [isLogin, setisLogin] = useState(false);
  const [displayLogin, setDisplayLogin] = useState("none");
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useLayoutEffect(()=>{
    console.log(cookies.login);
    if(cookies.login){
      setisLogin(true)
      console.log("nav lay called");
    }
  },[])
  function noneLoginModel() {
    setDisplayLogin("none");
  }
  const LogoutFun = () => {
    setisLogin(false);
    removeCookie("userid");
    removeCookie("username");
    removeCookie("login");
    // setCookie('login', false);
    console.log(cookies);
  };

  return (
    <>
      <div className="header">
        <div className="nav-container">
          <nav className="navbar navbar-expand-lg navbar-light container-fluid">
            <button
              className="collepsBtn"
              onMouseEnter={() => setAnimationClass("collapse-list-nav-anim")}
              onMouseLeave={() =>
                setTimeout(
                  () => setAnimationClass("collapse-list-nav-anim-1"),
                  1500
                )
              }
            >
              <i className="fa-sharp fa-solid fa-bars line navbar-brand iconCollops"></i>
            </button>
            <div className={`collapse-list-nav ${AnimationClass}`}>
              <Link to="channels" className="link-collapse-list-nav">
                <div
                  className="row collapse-items-nav"
                  style={{ paddingTop: "15px" }}
                >
                  <i className="col-4 fab fa-buffer text-center ps-4 pt-1"></i>
                  <p className="col-8">Channels</p>
                </div>
              </Link>
              <Link to="languages" className="link-collapse-list-nav">
                <div className="row collapse-items-nav">
                  <i className="col-4 fas fa-language text-center ps-4 pt-1"></i>
                  <p className="col-8">Languages</p>
                </div>
              </Link>
              <Link to="genres" className="link-collapse-list-nav">
                <div className="row collapse-items-nav">
                  <i className="col-4 fas fa-star-half-stroke text-center ps-4 pt-1"></i>
                  <p className="col-8">Genres</p>
                </div>
              </Link>
            </div>

            <Link to="/" className="navbar-brand navLogoImg">
              <img className="" src="./disney-hotstar-logo-dark.svg" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link color-w arncherInList" href="#">
                    TV <span className="sr-only">(current)</span>
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "0px" }}
                    >
                      <ul className="">
                        <li className="mt-1">
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-w arncherInList" href="#">
                    Movies
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "0px" }}
                    >
                      <ul>
                        <li className="mt-1">
                          <Link to="#">Bollywood</Link>
                        </li>
                        <li>
                          <Link to="#">Hollywood</Link>
                        </li>
                        <li>
                          <Link to="#">Tollywood</Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link  color-w arncherInList" href="#">
                    Sport
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "6px" }}
                    >
                      <ul className="">
                        <li className="mt-1">
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  color-w arncherInList" href="#">
                    Disney+
                    <div
                      className="hover-navbar rounded"
                      style={{ left: "4px" }}
                    >
                      <ul className="">
                        <li className="mt-1">
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                        <li>
                          <Link to="#">d=abc</Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  color-w arncherInList" href="#">
                    <img
                      className="kidLogo"
                      src="./4aa70ede8904e16b7630300c09219c8e.svg"
                    />
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="search-container right-element">
                  <input
                    className="input-open"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="searchIcon">
                    <MDBIcon fas icon="search" />
                  </div>
                </div>
                <div className="right-element">
                  <Link
                    to="subscribe"
                    type="button"
                    className="subscribe-btn btn-sm"
                  >
                    Subscribe
                  </Link>
                </div>
                {!isLogin ? (
                  <div className="right-element user-profile">
                    <div
                      role="presentation"
                      className="signIn"
                      onClick={() => setDisplayLogin("flex")}
                    >
                      LOGIN
                    </div>
                  </div>
                ) : (
                  <div class="dropdown right-element user-profile ms-3 ">
                    <a
                      class="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        class="rounded-circle"
                        height="35"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end drop-ul-user"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link class="dropdown-item drop-a-user" to="profile">
                          My profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item drop-a-user" to="watchlist">
                          Watch list
                        </Link>
                      </li>
                      <li>
                        <Link
                          class="dropdown-item drop-a-user"
                          onClick={LogoutFun}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </nav>
        </div>
      </div>
      <Login
        display={displayLogin}
        noneLogin={noneLoginModel}
        isLoginIn={() => setisLogin(true)}
        flexLogin={() => setDisplayLogin("flex")}
      />
    </>
  );
};

export default Navbar;
