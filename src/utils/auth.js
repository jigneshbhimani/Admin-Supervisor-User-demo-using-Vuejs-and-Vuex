import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: "dev-uk2zvbe0.us.auth0.com",
  clientID: "n1shOIOSP0pkcNX5L1iZotLFzwsT1iJT",
  redirectUri: "http://localhost:8080/admin",
  responseType: "token",
  scope: "openid",
});

const login = () => {
  webAuth.authorize();
};

export { login };
