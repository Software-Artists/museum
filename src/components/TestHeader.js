import React, { Component } from "react";

export class TestHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <img
            id="logiImage"
            src="https://img.favpng.com/17/8/21/png-logo-png-favpng-bnQXBdspUxidhRGqSV3Z6hM3w.jpg"
            alt="Logo Image"
          />

          <p id="logiText">Liza Museum Arts</p>

          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Collections">Collections</a>
              </li>
              <li>
                <a href="/Event">Event</a>
              </li>
              <li>
                <a href="/Aboutus">About us</a>
              </li>
              <li>
                <a href="/Feedback">Feedback</a>
              </li>
              {/* <li class="dropdown">
                <a href="/Aboutus" class="dropbtn">
                  About us
                </a>

                <div class="dropdown-content">
                  <a class="dropElement" href="/Aboutus">
                    About The Team
                  </a>
                  <a class="dropElement" href="/Feedback">
                    Feedback
                  </a>
                </div>
              </li> */}
              <li>
                <a href="/profile">profile</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default TestHeader;
