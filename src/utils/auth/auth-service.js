import decode from 'jwt-decode';
import auth0 from 'auth0-js';
import config from '../../config';
const ID_TOKEN_KEY = 'hw_id_token';
const ACCESS_TOKEN_KEY = 'hw_access_token';
const USER_PROFILE_KEY = 'hw_user_profile';

const options = {
  domain: config.auth.domain,
  clientID: config.auth.clientID,
  redirectUri: config.auth.redirectUri,
  audience: config.auth.audience,
  responseType: 'token id_token',
  scope: 'openid profile'
};
let auth = new auth0.WebAuth(options);
let userProfile;

export function login(state) {
  options.state = state;
  auth.authorize(options);
}

export function logout() {
  clearIdToken();
  clearAccessToken();
}
export function getUserProfile() {
  return new Promise((resolve, reject) => {
    if (userProfile) {
      resolve(userProfile);
    } else {
      auth.client.userInfo(getAccessToken(), (err, profile) => {
        userProfile = profile;
        resolve(profile);
      });
    }
  })
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/' });
  }
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
  let user = decode(idToken);
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(user));
  userProfile = user;
}

export function setState(){
  let state = getParameterByName('state');
  console.log('state:',state);
  window.location.href = state;
}
export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}