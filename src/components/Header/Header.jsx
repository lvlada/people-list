import React, { useEffect } from "react";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "materialize-css/dist/css/materialize.min.css";
import { useState } from "react";

export default function Header({changeState}) {
  const [value, setValue] = useState(true);

  const changView = () => {
    value ? setValue(false) : setValue(true);
    changeState(value);
  };
  const pageRefresh = () => window.location.reload(true)

  return (
    <nav>
      <div className="container">
        <div class="nav-wrapper">
          <a href="/" class="brand-logo">
            BIT People
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="">
                <i class="material-icons" onClick={pageRefresh}>refresh</i>
              </a>
            </li>
            <li onClick={changView}>
              {value ? (
                <a href="#">
                  <i class="material-icons">view_list</i>
                </a>
              ) : (
                <a href="#">
                  <i class="material-icons">view_module</i>
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
