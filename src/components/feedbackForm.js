import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FeedBackForm extends React.Component {
  render() {
    return (
      <div>
        <h2>FeedBack Form</h2>

        {/* ===================================================on submit  */}
        <Form onSubmit={this.props.formSubmit}>
          {/* ===================================================  */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your first and last name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Feedback:</Form.Label>
            <Form.Control as="textarea" rows={4} name="feedback" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit your feedback
          </Button>
        </Form>
      </div>
    );
  }
}

export default FeedBackForm;
