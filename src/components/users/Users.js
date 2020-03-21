import React, { Component } from "react";
import ServicesReques from "../../services/ServicesRequest";
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
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>Usuario:{user.username}</p>
            <p>Correo:{user.email}</p>
            <div>
              Dirreción:
              <ul>
                <li>Calle:{user.address.street}</li>
                <li>Apartamento{user.address.suite}</li>
                <li>Ciudad:{user.address.city}</li>
                <li>Código Postal:{user.address.zipcode}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
