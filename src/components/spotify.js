
// spotify API from "https://developer.spotify.com/dashboard/"


// when click login button it will redirect to authend point url loaction.

export const authEndpoints = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId ="d36950d675a044f3b115509325cf12fc";

// This spotify clone having these following scopes or i.e. followings are allowed or permitted
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
  
// getting token from the url
  export const getTokenFromUrl = () => {
    return window.location.hash 
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };

  
//  %20 - ascii code for space key i.e. here we adding a space to the scopes
export const loginUrl = `${authEndpoints}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;