export default class ServicesRequest {
  async getUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    var users = await data.json();
    return users;
  }
}
