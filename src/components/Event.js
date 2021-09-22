import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Style/Event.css";
// import Profile from "./Profile";
import Swal from "sweetalert2";
// npm install sweetalert2
export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      NewArray: [],
    };
  }

  handelClick = async (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Event added to your profile",
      showConfirmButton: false,
      timer: 1500,
    });
    const y = e.target.childNodes[0].parentElement.attributes[0].nodeValue;

    let filteredEventArray = [];
    filteredEventArray = this.props.museumData.find((value) => y === value.id);

    await this.state.NewArray.push(filteredEventArray);
    // console.log(this.props.museumData, "museumData");
    // console.log(filteredEventArray, "filteredEventArray");
    // console.log(this.state.NewArray, "NewArray");
    // console.log(y, "yyyyyyyy");
    // console.log(this.props.museumData[0].id, "NewArray");
    await this.props.handel(this.state.NewArray);
  };

  render() {
    return (
      <div className="div">
        {this.props.museumData.slice(0, 7).map((value) => {
          return (
            
            <div className="flex-container">
              
            

              <div  className="body_Event">
                <Card.Body >
                  <Card.Title >{value.name}</Card.Title>
                  <br/>
                  <Card.Text className="event_description">{value.event_description}</Card.Text>
                  
                  <Card.Text className="event_description1"> Date Of Event: {value.date}</Card.Text>

                  <Card.Title>Ticket Price : {value.ticket_price}</Card.Title>
                  
                 

                  <Button
                    alt={value.id}
                    onClick={this.handelClick}
                    variant="primary"
                  >
                    Join The Event
                  </Button>
                </Card.Body>
              </div>
              <div className="img_Event">
                <Card.Img className="img" variant="top" src={value.event_description_image} />
              </div>
              
            </div>
          );
        })}
      </div>
    );
  }
}
export default Event;
