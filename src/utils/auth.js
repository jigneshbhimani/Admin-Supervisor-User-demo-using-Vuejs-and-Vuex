import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: "dev-uk2zvbe0.us.auth0.com", //auth0.com domain (auth0.com -> Applications -> Applications -> Project Select -> Settings)
  clientID: "E5s8BqbbQtCY35Sdpc2iFT6G2L2HraFo", //auth0.com clientID (auth0.com -> Applications -> Applications -> Project Select -> Settings)
  redirectUri: "http://localhost:8080/admin", // Also add in (auth0.com -> Applications -> Applications -> Project Select -> Settings -> Allowed Callback URLs)
  responseType: "token",
  scope: "openid",
});

const login = () => {
  webAuth.authorize();
};

export { login };
