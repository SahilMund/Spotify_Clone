import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import LogIn from "./components/auth/LogIn";
import Player from "./components/screen/Player";
import { getTokenFromUrl } from "./components/spotify";
import { useStateValue } from "./context/StateProvider";

const s = new SpotifyWebApi();

function App() {
  const [{ user, token ,playlists }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      // getting user account/profile
      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      // getting the playlist from the user spotify acc
      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      // getting the weekly playlist from my acc
      // 6PrUPPajcmqjmU9AXOsua8
      s.getPlaylist("2kV2g7uCTlYvASTkQGHx1l").then((response) =>
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    );

    }
  }, []);

  return (
    <div className="app">
      {!token && <LogIn />}
      {token && <Player spotify={s}/>}
    </div>
  );
}

export default App;
