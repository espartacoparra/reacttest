import React, { Component } from "react";
import ServicesReques from "../../services/ServicesRequest";
import template from "./userTemplate";
export default class Users extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const request = new ServicesReques();
    const users = await request.getUsers();
    console.log(users);
    this.setState({
      users: users
    });
  }
  render() {
    return template(this.state.users);
  }
}
