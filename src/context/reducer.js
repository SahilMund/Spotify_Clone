export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  discover_weekly:null,
//   removing after finishing
// token:"BQBcllAepymrhMOBg0wo4nG6yZOi8Q_SC-atrSahD8BSjOxYwKsO7ZxRyFnZ-ZkMlgmNr4z9_8d-URiFmdh_pd4GUAx1LHgfJ5OCUGioQEUudeReHh5qbOeO09L35IAumLte_IB9HNYCkJMlvkTLu40-mr3vKGD8wTIZQo95N7pyMHot-8T6"

};

const reducer = (state, action) => {
  console.log(action);
  //   action :- type and [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
