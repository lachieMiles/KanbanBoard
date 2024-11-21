import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = localStorage.getItem('ID_Token');
    if(!token) {
      throw new Error("no token found");
    }
    return jwtDecode(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if(!token) {
      throw new Error("no token found");
    }
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('ID_Token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('ID_Token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('ID_Token');
    // TODO: redirect to the login page
    window.location.assign('/');
  }
}

export default new AuthService();
