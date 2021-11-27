class DB {
  static saveItem(key, value) {
    localStorage.setItem(key, value);
  }
  static getItem(key) {
    return localStorage.getItem(key);
  }
}
