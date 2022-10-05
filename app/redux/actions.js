/**
 * contains the actions to be used by redux
 */

export const SET_TEAM_NAME = "SET_TEAM_NAME";
export const SET_FAV_TEAM = "SET_FAV_TEAM";
export const CLEAR_DATA = "CLEAR_DATA";
export const GET_BUDGET = "GET_BUDGET";
export const GET_ALL_PLAYERS = "GET_ALL_PLAYERS";
export const BALANCE = "BALANCE";
export const SET_TEAM_VALUE = "SET_TEAM_VALUE";
export const SET_USER_ID = "SET_USER_ID";
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
export const get_budget = (budget) => (dispatch) => {
  dispatch({
    type: GET_BUDGET,
    budget: budget,
  });
};
export const balance = (balance) => (dispatch) => {
  dispatch({
    type: BALANCE,
    balance: balance,
  });
};
export const set_user_id = (userid) => (dispatch) => {
  dispatch({
    type: SET_USER_ID,
    userid: userid,
  });
};
export const get_all_players = () => ({
  type: GET_ALL_PLAYERS,
});
export const set_team_value = (total_value) => (dispatch) => {
  dispatch({
    type: SET_TEAM_VALUE,
    total_value: total_value,
  });
};
export const set_player_gk1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_GK1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_gk2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_GK2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_def1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_DEF1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_def2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_DEF2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_def3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_DEF3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_def4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_DEF4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_def5 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_DEF5,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_mid1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_MID1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_mid2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_MID2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_mid3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_MID3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_mid4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_MID4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_fwd1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_FWD1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_fwd2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_FWD2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_fwd3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_FWD3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const set_player_fwd4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: SET_PLAYER_FWD4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
