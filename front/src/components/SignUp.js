import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
class App extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    createdAt: "",
    updatedAt: "",
    flash: "",
    open: false,
    vertical: "top",
    horizontal: "center"
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  updatedField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("A name was submitted: " + JSON.stringify(this.state, 1, 1));
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };
  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <p>
          <strong>Sign up !</strong>
        </p>
        <TextField
          label="E-mail"
          type="text"
          name="email"
          onChange={this.updatedField}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="text"
          name="email"
          onChange={this.updatedField}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Name"
          type="text"
          name="email"
          onChange={this.updatedField}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Lastname"
          type="text"
          name="email"
          onChange={this.updatedField}
          margin="normal"
          fullWidth
        />
        <br />
        <Button
          variant="contained"
          onClick={this.handleClick({
            vertical: "bottom",
            horizontal: "right"
          })}
          color="primary"
        >
          Submit
        </Button>

        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Au top le Homer !</span>}
        />
      </form>
    );
  }
}

export default App;
