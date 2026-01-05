import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import CustomNavbar from "./CustomNavbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main_header_area w-100 site-header position-absolute ${isScrolled ? "scrolled" : ""}`}>

      {/* Top bar with social and contact info */}
      <div className="header-content text-white">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  {/* <ul className="m-0 p-0 d-flex gap-2">
                    {[
                      "facebook",
                      "twitter",
                      "google",
                      "instagram",
                      "youtube-play",
                    ].map((icon, i) => (
                      <li key={i} className="d-inline">
                        <a href="#">
                          <i
                            className={`fa fa-${icon} border-social rounded-circle text-center`}
                          ></i>
                        </a>
                      </li>
                    ))}
                  </ul> */}
                  <ul className="m-0 p-0 d-flex gap-2">
                    {[
                      {
                        icon: "facebook",
                        url: "https://www.facebook.com/share/qVva5zrCuYdkqGJJ/?mibextid=qi2Omg",
                      },
                      {
                        icon: "twitter",
                        url: "https://x.com/profx_media",
                      },
                      {
                        icon: "instagram",
                        url: "https://www.instagram.com/profxmedia.official/",
                      },
                      {
                        icon: "youtube",
                        url: "https://www.youtube.com/@ProfxMedia",
                      },
                      {
                        icon: "linkedin",
                        url: "https://www.linkedin.com/company/profxmedia/",
                      },
                    ].map((item, i) => (
                      <li key={i} className="d-inline">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline-block rounded-circle bg-white  bg-opacity-25 social-url"
                        >
                          <i className={`fa fa-${item.icon} border-social rounded-circle text-center`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-phone pe-1"></i>
                      <small><a className="social-url" href="tel:+971 58 884 5033">+971 58 884 5033</a></small>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <small><a className="social-url" href="mailto:proof@profxsummit.com">info@profxsummit.com</a></small>
                    </li>
                    <li className="px-2 d-inline">
                      <i className="fa fa-clock-o pe-1"></i>
                      <small>Mon - Fri: 9:00 - 18:30</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              {/* <div className="col-lg-2 col-md-10 col-10">
                <div className="navbar-brand m-0">
                  <Link to="/">
                    <img
                      src="assets/images/logo/profx-white.png"
                      alt="Logo"
                      className=""
                      style={{ maxWidth: "125px" }}
                    />
                  </Link>
                </div>
              </div> */}
              <div className="col-lg-2 col-md-10 col-10">
                <div className="navbar-brand m-0">
                  <Link to="/">
                    <img
                      src={
                        isScrolled
                          ? "assets/images/logo/profx-dark.png" // 👈 on scroll
                          : "assets/images/logo/profx-white.png" // 👈 top
                      }
                      alt="Logo"
                      style={{ maxWidth: "125px", transition: "0.3s ease" }}
                    />
                  </Link>
                </div>
              </div>


              <div className="col-lg-7 col-md-2 col-2">
                {/* <Navbar /> */}
                <CustomNavbar />
              </div>

              <div className="col-lg-3 d-none d-lg-block">
                <div className="menu-search">
                  <Search className="d-md-none" />
                  <Link to="/Booknow" className="btn btn3">
                    Book Free Ticket <i className="fa fa-long-arrow-right ms-4"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div>

      {/* Search Overlay */}
      <div id="search1">
        <button type="button" className="close">
          &times;
        </button>
        <form>
          <input
            className="form-control form-control-lg rounded text-white"
            placeholder="Search..."
          />
        </form>
        <button type="button" className="btn">
          <i className="fa fa-search text-white" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
