class CustomLocalStorage {
  setAccessToken(value: string) {
    localStorage.setItem('access_token', value);
  }
  getAccessToken() {
    return localStorage.getItem('access_token') || '';
  }
}

const customLocalStorage = new CustomLocalStorage();

export { customLocalStorage };
