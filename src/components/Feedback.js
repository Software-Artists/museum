import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import FeedbackForm from "./feedbackForm";
import "../css/feedback.css";

class FeedBackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
    };
  }
  //========================= this function calls the render fun. first then excutes.
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/feedback`)
      .then((feedBackResponse) => {
        this.setState({ feedbacks: feedBackResponse.data });
      });
  };

  //================== Form Submit:====================================
  formSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name: e.target.name.value,
      feedBackMessage: e.target.feedback.value,
      gender: e.target.value,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/feedback`, requestBody)
      .then((feedBackResponse) => {
        this.state.feedbacks.push(feedBackResponse.data); // to prevent data lose.
        this.setState({
          feedbacks: this.state.feedbacks,
        });
      });

    location.reload();
  };

  render() {
    console.log("Gender :", this.props.gender);
    return (
      <div>
        <h2>FeedBack</h2>
        <div className="formDiv">
          <FeedbackForm
            formSubmit={this.formSubmit}
            gendarHandel={this.props.gendarHandel}
          />
        </div>
        <div className="cardDiv">
          {this.state.feedbacks.length > 0 && (
            <>
              {this.state.feedbacks.map((feedback) => {
                return (
                  <div id="cardFeedback">
                    <Card
                      style={{
                        width: "18rem",
                        height: "35rem",
                        margin: "auto",
                        // backgroundColor: "lightBlue",
                      }}
                    >
                      {this.props.gender === "Male" ? (
                        <Card.Img
                          variant="top"
                          src="https://sdmny.hunter.cuny.edu/wp-content/uploads/2017/04/male-headshot-placeholder.jpg"
                        />
                      ) : (
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/120px150"
                        />
                      )}
                      <Card.Body>
                        <Card.Title
                          style={{
                            color: "green",
                            borderBottom: "2px solid black",
                          }}
                        >
                          {feedback.name}
                        </Card.Title>
                        <Card.Text> {feedback.feedBackMessage} </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default FeedBackPage;
