import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div>
        {this.state.data.map((value) => {
          return (
            <div>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={value.event_description_image} />
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Text>{value.event_description}</Card.Text>
                  <Card.Title>{value.ticket_price}</Card.Title>
                  <Button variant="primary">Join The Event</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Event;
