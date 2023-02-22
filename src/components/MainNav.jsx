import React from "react";
import { Navbar } from './Navbar';

export const MainNav = () => {
  return (
    <>
      <div className="main-menu landing-layer">
        <Navbar />
        <div className="container ">
          <div className="search-box">
            <input
              type="search"
              placeholder="   search..."
              className="search"
            />
            <div className="search-icon">
              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


