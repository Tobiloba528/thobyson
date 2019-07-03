import React, { Component } from "react";
import Joi from "joi-browser";
import { Link } from "react-scroll";
import { saveContact } from "./services/fakeOrderService";
import { toast } from "react-toastify";

class Contact extends Component {
  state = {
    data: { name: "", email: "", message: "" }
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    message: Joi.string()
      .required()
      .label("Enquiry Message")
  };

  validate() {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });

    if (!error) {
      return toast.success(
        "Message sent Successfully! We will be in touch soon"
      );
    }
    for (let item of error.details) toast.error(item.message);
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate()) {
      setInterval(function() {
        window.location = "/";
      }, 5000);
    }

    saveContact(this.state.data);
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="text-center" style={{ width: "100%" }} id="contact">
          <h4
            style={{
              color: "rgb(179, 214, 223)"
            }}
          >
            Contact
          </h4>
          <h5 style={{ color: "rgb(179, 214, 223)" }}>
            Have a Project to work on or have a question?
          </h5>
        </div>
        <div
          className="row"
          id="myForm"
          style={{
            width: "80%",
            maxWidth: "550px",
            margin: "20px auto",
            paddingBottom: "20px",
            background: "rgb(31, 52, 70"
          }}
        >
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="name"
                  id="first_name"
                  type="text"
                  className="validate"
                  value={this.state.data.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="email"
                  id="email"
                  type="text"
                  className="validate"
                  value={this.state.data.email}
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  name="message"
                  id="message"
                  className="materialize-textarea"
                  style={{ height: "100px" }}
                  value={this.state.data.message}
                  onChange={this.handleChange}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <button className="btn float-right">Submit</button>
          </form>
        </div>

        <div className="text-center " style={{ marginTop: "50px" }}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn-floating pulse  btn-large"
          >
            <i
              className="fa fa-angle-double-up"
              style={{
                color: "white"
                //
              }}
            />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
