export default class Database {
  constructor(name) {
    this.sessionStorage = window.sessionStorage;
    this.name = name;
  }

  set(data) {
    this.sessionStorage.setItem(this.name, JSON.stringify(data));
  }

  get() {
    const stringify = sessionStorage.getItem(this.name);
    return JSON.parse(stringify);
  }
}
