import React, { Component } from "react";
import { Card } from "react-bootstrap";
export class Footer extends Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Footer className="text-muted"><h1>Footer</h1><p>contact us </p></Card.Footer>
      </Card>
    );
  }
}

export default Footer;
