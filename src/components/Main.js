import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import intro from "../components/vid/intro.mp4";
import ReactPlayer from "react-player";
import "../Style/video.css";
export class Main extends Component {
  render() {
    return (
      <>
        <div className="player-wrapper">
          <ReactPlayer
            playing
            url={intro}
            height="100%"
            width="100%"
            muted="false"
            loop="true"
          />

          <div class="overlay">
            {/* <h2></h2> */}
            <h2>Liza Museum Arts <br/> Enjoy Seeing The Most Famous Museums Around The World</h2>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <Carousel fade className="d-block w-75">
            {this.props.museumData.slice(0, 7).map((element) => {
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
        <div
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "50px",
          }}
        >
          <Row xs={1} md={5} className="g-4">
            {this.props.paintingsData.slice(0, 20).map((element) => {
              return (
                <Card
                  style={{
                    width: "18rem",
                    border: "solid",
                    margin: "20px",
                  }}
                >
                  <Card.Body
                    style={{
                      color: "black",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://www.artic.edu/iiif/2/${element.image_id}/full/843,/0/default.jpg`}
                      alt={element.description_image1}
                    />
                    <Card.Title>{element.artist_display}</Card.Title>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </div>
      </>
    );
  }
}

export default Main;
