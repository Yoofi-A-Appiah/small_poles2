/**
 * contains the actions to be used by redux
 */

export const SET_TEAM_NAME = "SET_TEAM_NAME";
export const SET_FAV_TEAM = "SET_FAV_TEAM";
export const SET_TEAM_PLAYERS = "SET_TEAM_PLAYERS";

export const set_team_name = (name) => (dispatch) => {
  dispatch({
    type: SET_TEAM_NAME,
    payload: name,
  });
};

export const set_fav_team = (fav) => (dispatch) => {
  dispatch({
    type: SET_FAV_TEAM,
    payload: fav,
  });
};
export const set_team_players = (players) => (dispatch) => {
  dispatch({
    type: SET_TEAM_PLAYERS,
    payload: players,
  });
};
