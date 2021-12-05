import React from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      inquiry: "",
      confirmation: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleInquiryChange = this.handleInquiryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Contact Us!";
  }

  handleNameChange(event) {
    this.setState({ fullName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleInquiryChange(event) {
    this.setState({ inquiry: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // http://localhost:4000/api/contacts
    fetch("https://itp404final-mbowen2.herokuapp.com/api/contacts", {
      method: "POST",
      body: JSON.stringify({
        fullName: this.state.fullName,
        email: this.state.email,
        inquiry: this.state.inquiry
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          fullName: "",
          email: "",
          inquiry: ""
        });

        toast.success(`Inquiry from "${json.fullName}" was successfully entered into the database.`);
        // this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <form onSubmit={this.state.handleSubmit} className="was-validated">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              First and Last Name:
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="name"
              value={this.state.fullName}
              onChange={this.handleNameChange}
            />
            <div className="invalid-feedback">
              Please enter a name.
            </div>
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              className="form-control is-invalid"
              id="floatingInputInvalid"
              placeholder="name@example.com"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <div className="invalid-feedback">
              Please enter a email.
            </div>
          </div>

          <br />
          <div className="mb-3">
            <label htmlFor="validationTextarea" className="form-label">
              Feedback:
            </label>
            <textarea
              className="form-control is-invalid"
              id="validationTextarea"
              placeholder="Required example textarea"
              value={this.state.inquiry}
              onChange={this.handleInquiryChange}
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
