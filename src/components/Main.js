import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import Event from "./Event";
export class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     museumData: [],
  //     paintingsData: [],
  //   };
  // }

  // componentDidMount = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/museum`)
  //     .then((museumResponse) => {
  //       this.setState({ museumData: museumResponse.data });
  //     });
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_URL}/paintings`)
  //     .then((paintingsResponse) => {
  //       this.setState({ paintingsData: paintingsResponse.data });
  //     });
  // };

  render() {
    
    return (
      <>
        <div class="d-flex justify-content-center">
          <Carousel fade className="d-block w-75">
            {this.props.museumData.map((element) => {
              return (
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={element.museum_image}
                    alt="Image One"
                  />
                  <Carousel.Caption>
                    <h3>{element.name}</h3>
                    <p>{element.location}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div>
          <Row xs={1} md={4} className="g-4">
            {this.props.paintingsData.splice(0, 2).map((element) => {
              return (
                <Card
                  style={{
                    width: "20rem",
                    border: "solid",
                    margin: "40px",
                  }}
                >
                  <Card.Body
                    style={{
                      color: "black",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={element.art_image1}
                      alt={element.description_image1}
                    />
                    <Card.Title>{element.description_image1}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
          {/* <Event museumData={this.state.museumData} /> */}
        </div>
      </>
    );
  }
}

export default Main;
