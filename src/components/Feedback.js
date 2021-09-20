import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import FeedbackForm from "./feedbackForm";

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
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/feedback`, requestBody)
      .then((feedBackResponse) => {
        this.state.feedbacks.push(feedBackResponse.data); // to prevent data lose.
        this.setState({
          feedbacks: this.state.feedbacks,
        });
      });
  };

  render() {
    return (
      <div>
        {/* <h1>Test</h1> */}
        <FeedbackForm formSubmit={this.formSubmit} />

        {this.state.feedbacks.length > 0 && (
          <>
            {this.state.feedbacks.map((feedback) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{feedback.name}</Card.Title>
                      <Card.Text> {feedback.feedBackMessage} </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default FeedBackPage;
