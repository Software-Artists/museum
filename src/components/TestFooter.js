import React, { Component } from "react";

export class TestFooter extends Component {
  render() {
    return (
      <div id="footerDiv">
        <footer>
          <h2>Stay Conected</h2>

          {/* <div id="social">
            <a href="#" class="fa fa-facebook" style="width: 60px"></a>
            <a href="#" class="fa fa-twitter" style="width: 60px"></a>
            <a href="#" class="fa fa-google" style="width: 60px"></a>
            <a href="#" class="fa fa-linkedin" style="width: 60px"></a>
            <a href="#" class="fa fa-youtube" style="width: 60px"></a>
          </div> */}

          <p id="copyRights">Software Artists&copy;Liza Museum Arts</p>
        </footer>
      </div>
    );
  }
}

export default TestFooter;
