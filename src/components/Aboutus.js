import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../Style/Aboutus.css";
import Image1 from "../components/teamimg/h.jpg";
import Image2 from "../components/teamimg/omar.jpeg";
import Image3 from "../components/teamimg/issapic.png";
import Image4 from "../components/teamimg/nashat.jpg";
import Image5 from "../components/teamimg/qutada.jpg";
import Image6 from "../components/teamimg/ahmad.jpg";
import body from "../components/teamimg/pic.jpg";
// import { Link } from "react-router-dom";

class Aboutus extends React.Component {
  render() {
    return (
      <div>
        <CardGroup style={{ height: "700px" }}>
          <Card>
            <Card.Img className="img1" variant="top" src={Image1} />
            <Card.Body className="body">
              <Card.Title>Hebah zuhier</Card.Title>
              <Card.Text>
                I graduated with a major in Biotechnology from Hashemit
                university , i am interested to learn programing languages , so I
                joined LUTC
              </Card.Text>
              <Card.Text>
                <a href="https://github.com/hebah-aldawalib"
                  class="stretched-link"
                >
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
           
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="img2" variant="top" src={Image2} />

            <Card.Body className="body" variant="bottom" src={body}>
              <Card.Title>Omer taha</Card.Title>
              <Card.Text>
                I am 26 years old, I graduated with a major in civil engineering
                in 2017, I have a passion for learning programming languages
                ​​and I am on my way now to reach what I want{" "}
              </Card.Text>
              <Card.Text>
                <a href="https://github.com/omar11taha" class="stretched-link">
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="img3" variant="top" src={Image3} />
            <Card.Body className="body">
              <Card.Title>Issa Salman</Card.Title>
              <Card.Text>
                I'm Issa Salman a mechatronics engineer and I am a full-stack Web
                Application Developer and Software Developer, currently living
                in Zarqa, Jordan.
              </Card.Text>
              <Card.Text>
                {" "}
                <a href="https://github.com/issasalman" class="stretched-link">
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
          </Card>
        </CardGroup>

        <CardGroup style={{ height: "600px" }}>
          <Card>
            <Card.Img className="img4" variant="top" src={Image4} />
            <Card.Body className="body">
              <Card.Title>Nashat Alzaatreh</Card.Title>
              <Card.Text>
                I am a Junior Web Developer. I will be accomplished coder and I
                enjoy using my skills to contribute to the exciting
                technological advances that happen every day
              </Card.Text>
              <Card.Text>
                <a
                  href="https://github.com/NashatAlzaatreh"
                  class="stretched-link"
                >
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
           
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="img5" variant="top" src={Image5} />
            <Card.Body className="body">
              <Card.Title>Qutadah Almomani</Card.Title>
              <Card.Text>
                I'm 25 years old. I'm mechanical engineer specialising in HVAC .
                I got graduate from al balqa applied university in 2017 . I
                decided to learn programming because i love programming.
              </Card.Text>
              <Card.Text>
                <a href="https://github.com/Qutadah95" class="stretched-link">
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img className="img6" variant="top" src={Image6} />
            <Card.Body className="body">
              <Card.Title>Ahmad Jaber</Card.Title>
              <Card.Text>
                24 years old, I studied Computer Science at AAU, I've worked as
                a Flutter developer
              </Card.Text>
              <Card.Text>
                <a href="https://github.com/aajaber" class="stretched-link">
                  Github
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
export default Aboutus;
