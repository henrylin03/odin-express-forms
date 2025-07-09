// this class simulates interacting with db
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email }) {
    this.storage[id] = { id, firstName, lastName, email };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}

// export _instance_ of class rather than exporting the class
// ensures only _one instance_ of class can exist ("singleton pattern")
module.exports = new UsersStorage();
