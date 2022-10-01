/**
 * contains the actions to be used by redux
 */

export const SET_TEAM_NAME = "SET_TEAM_NAME";
export const SET_FAV_TEAM = "SET_FAV_TEAM";
export const CLEAR_DATA = "CLEAR_DATA";
export const GET_ALL_PLAYERS = "GET_ALL_PLAYERS";
export const SET_PLAYER_GK1 = "SET_PLAYER_GK1";
export const SET_PLAYER_GK2 = "SET_PLAYER_GK2";
export const SET_PLAYER_DEF1 = "SET_PLAYER_DEF1";
export const SET_PLAYER_DEF2 = "SET_PLAYER_DEF2";
export const SET_PLAYER_DEF3 = "SET_PLAYER_DEF3";
export const SET_PLAYER_DEF4 = "SET_PLAYER_DEF4";
export const SET_PLAYER_DEF5 = "SET_PLAYER_DEF5";
export const SET_PLAYER_MID1 = "SET_PLAYER_MID1";
export const SET_PLAYER_MID2 = "SET_PLAYER_MID2";
export const SET_PLAYER_MID3 = "SET_PLAYER_MID3";
export const SET_PLAYER_MID4 = "SET_PLAYER_MID4";
export const SET_PLAYER_FWD1 = "SET_PLAYER_FWD1";
export const SET_PLAYER_FWD2 = "SET_PLAYER_FWD2";
export const SET_PLAYER_FWD3 = "SET_PLAYER_FWD3";
export const SET_PLAYER_FWD4 = "SET_PLAYER_FWD4";

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
export const clear_data = () => ({
  type: CLEAR_DATA,
});
export const get_all_players = () => ({
  type: GET_ALL_PLAYERS,
});
export const set_player_gk1 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_GK1,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_gk2 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_GK2,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_def1 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_DEF1,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_def2 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_DEF2,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_def3 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_DEF3,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_def4 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_DEF4,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_def5 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_DEF5,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_mid1 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_MID1,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_mid2 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_MID2,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_mid3 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_MID3,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_mid4 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_MID4,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_fwd1 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_FWD1,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_fwd2 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_FWD2,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_fwd3 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_FWD3,
    player_name: player_name,
    player_id: player_id,
  });
};
export const set_player_fwd4 = (player_name, player_id) => (dispatch) => {
  dispatch({
    type: SET_PLAYER_FWD4,
    player_name: player_name,
    player_id: player_id,
  });
};
