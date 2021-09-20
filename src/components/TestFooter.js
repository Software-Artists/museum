import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

export class TestFooter extends Component {
  render() {
    return (
      <div id="footerDiv">
        <footer>
          <h2>SIGN UP TO EMAILS</h2>

          <div className="signFooter ">
            <label id="newsletter-label" for="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="form-item__input form-item__input--text"
              name="email"
              placeholder="Email address"
              aria-label="Subscribe to email newsletter"
              autocomplete="email"
            />
          </div>
          {/* <div class="signButtonFooter">
            <button type="submit" class="btn btn--submit">
              Submit
            </button>
          </div> */}
          <div id="social">
            <SocialIcon url="https://twitter.com/jaketrent" />
            <SocialIcon url="https://www.facebook.com/jaketrent" />
            <SocialIcon url="https://www.youtube.com/jaketrent" />
            <SocialIcon url="https://www.google.com/jaketrent" />
            <SocialIcon url="https://www.instagram.com/jaketrent" />
          </div>

          <p id="copyRights">
            &copy;2021 Liza Museum Arts. All rights reserved
          </p>

          <div id="contactDiv">
            <font> Get in touch via the channels below, or by emailing </font>{" "}
            <font color="orange"> contact@liza.com</font>{" "}
          </div>
        </footer>
      </div>
    );
  }
}

export default TestFooter;

