/**
 * with the actions set, functions to be performed on them are written here
 */
import { SET_TEAM_NAME, SET_FAV_TEAM, SET_TEAM_PLAYERS } from "./actions";

const initialState = {
  name: "",
  fav: "___",
  player_id: "",
  player_name: "",
  players_data: [
    {
      //Players data goes here
    },
  ],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_NAME:
      return { ...state, name: action.payload };
    case SET_FAV_TEAM:
      return { ...state, fav: action.payload };
    //case SET_TEAM_PLAYERS: {
    //return {
    //...state,
    //players_data: state.players_data.map((data) => {
    //   if (player_id === data.player_id) {
    //     return data;
    //   }
    //return { ...data, player_name };
    //}),
    //};
    //}
    default:
      return state;
  }
}
export default userReducer;
