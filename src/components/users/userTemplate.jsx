import React from "react";

function template(users) {
  return (
    <div>
      {users.map(user => (
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
export default template;
