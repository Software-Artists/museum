import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Profile from "./Profile";
import Swal from 'sweetalert2';
// npm install sweetalert2
export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  handelClick = (e) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    // Swal.fire({
    //   title: 'congratulations!',
    //   text: 'you buyed a ticket for the event,see you there',
    //   imageUrl: 'https://unsplash.it/400/200',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image',
    // });
    const y = e.target.childNodes[0].parentElement.attributes[0].nodeValue;
    // console.log(y);
    this.setState({
      data: y,
    });
    this.props.handel(this.state.data);
  };
  
  render() {
    console.log(this.state.data,'nnnnnnnnnm');

    return (
      <div>
        {this.props.museumData.splice(0, 7).map((value) => {
          return (
            <div>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={value.event_description_image} />
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <Card.Text>{value.event_description}</Card.Text>
                  <Card.Title>{value.ticket_price}</Card.Title>

                  <Button
                    alt={value.id}
                    onClick={this.handelClick}
                    variant="primary"
                  >
                    Join The Event
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}

        <Profile data={this.state.data} museumData={this.props.museumData} />
      </div>
    );
  }
}
export default Event;
