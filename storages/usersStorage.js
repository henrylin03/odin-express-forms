// this class simulates interacting with db
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  searchUsers(searchInput) {
    const cleanedSearchInput = searchInput.trim().toLowerCase();
    if (!cleanedSearchInput) return;

    const allUsersArray = Object.values(this.storage);

    return allUsersArray.filter(
      (user) =>
        user.firstName.toLowerCase().includes(cleanedSearchInput) ||
        user.lastName.toLowerCase().includes(cleanedSearchInput) ||
        user.email.toLowerCase().includes(cleanedSearchInput),
    );
  }
}

// export _instance_ of class rather than exporting the class
// ensures only _one instance_ of class can exist ("singleton pattern")
module.exports = new UsersStorage();
