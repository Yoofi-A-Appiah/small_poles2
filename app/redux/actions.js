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
// Setting transfer store values to be compared witht the initial state
export const TRANSFER_MADE = "TRANSFER_MADE";
export const TRANSFER_PLAYER_GK1 = "TRANSFER_PLAYER_GK1";
export const TRANSFER_PLAYER_GK2 = "TRANSFER_PLAYER_GK2";
export const TRANSFER_PLAYER_DEF1 = "TRANSFER_PLAYER_DEF1";
export const TRANSFER_PLAYER_DEF2 = "TRANSFER_PLAYER_DEF2";
export const TRANSFER_PLAYER_DEF3 = "TRANSFER_PLAYER_DEF3";
export const TRANSFER_PLAYER_DEF4 = "TRANSFER_PLAYER_DEF4";
export const TRANSFER_PLAYER_DEF5 = "TRANSFER_PLAYER_DEF5";
export const TRANSFER_PLAYER_MID1 = "TRANSFER_PLAYER_MID1";
export const TRANSFER_PLAYER_MID2 = "TRANSFER_PLAYER_MID2";
export const TRANSFER_PLAYER_MID3 = "TRANSFER_PLAYER_MID3";
export const TRANSFER_PLAYER_MID4 = "TRANSFER_PLAYER_MID4";
export const TRANSFER_PLAYER_FWD1 = "TRANSFER_PLAYER_FWD1";
export const TRANSFER_PLAYER_FWD2 = "TRANSFER_PLAYER_FWD2";
export const TRANSFER_PLAYER_FWD3 = "TRANSFER_PLAYER_FWD3";
export const TRANSFER_PLAYER_FWD4 = "TRANSFER_PLAYER_FWD4";
export const TRANSFER_TEAM_VALUE = "TRANSFER_TEAM_VALUE";
export const CLEAR_TRANSFER_DATA = "CLEAR_TRANSFER_DATA";
export const TRANSFER_BALANCE = "TRANSFER_BALANCE";
export const TRANSFER_BUDGET = "TRANSFER_BUDGET";
export const SEASON_PONTS = "SEASON_POINTS";
export const GAME_WEEK_POINTS = "GAME_WEEK_POINTS";
export const LEAGUE_NAME = "LEAGUE_NAME";
export const LEAGUE_ID = "LEAGUE_ID";
export const SAVE_EMAIL = "SAVE_EMAIL";
export const FIXTURES_GW = "FIXTURES_GW";
export const HOME_GAME_WEEK = "HOME_GAME_WEEK";
//start transfer actions
export const set_league_name = (league_name) => (dispatch) => {
  dispatch({
    type: LEAGUE_NAME,
    league_name: league_name,
  });
};
export const set_home_game_week = (homeGW) => (dispatch) => {
  dispatch({
    type: HOME_GAME_WEEK,
    homeGW: homeGW,
  });
};
export const set_fixtures_gw = (fixturesGW) => (dispatch) => {
  dispatch({
    type: FIXTURES_GW,
    fixturesGW: fixturesGW,
  });
};
export const save_email = (email) => (dispatch) => {
  dispatch({
    type: SAVE_EMAIL,
    email: email,
  });
};
export const set_league_id = (league_id) => (dispatch) => {
  dispatch({
    type: LEAGUE_ID,
    league_id: league_id,
  });
};
export const transfer_budget = (budget) => (dispatch) => {
  dispatch({
    type: TRANSFER_BUDGET,
    budget: budget,
  });
};
export const set_season_points = (season_points) => (dispatch) => {
  dispatch({
    type: SEASON_PONTS,
    season_points: season_points,
  });
};
export const set_game_week_points = (game_week_points) => (dispatch) => {
  dispatch({
    type: GAME_WEEK_POINTS,
    game_week_points: game_week_points,
  });
};
export const transfer_made = (transfer_made) => (dispatch) => {
  dispatch({
    type: TRANSFER_MADE,
    transfer_made: transfer_made,
  });
};
export const transfer_player_GK1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_GK1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_GK2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_GK2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_DEF1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_DEF1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_DEF2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_DEF2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_DEF3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_DEF3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_DEF4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_DEF4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_DEF5 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_DEF5,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_MID1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_MID1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_MID2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_MID2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };

export const transfer_player_MID3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_MID3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_MID4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_MID4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_FWD1 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_FWD1,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_FWD2 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_FWD2,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_FWD3 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_FWD3,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_player_FWD4 =
  (player_name, player_id, player_value) => (dispatch) => {
    dispatch({
      type: TRANSFER_PLAYER_FWD4,
      player_name: player_name,
      player_id: player_id,
      player_value: player_value,
    });
  };
export const transfer_team_value = (total_value) => (dispatch) => {
  dispatch({
    type: TRANSFER_TEAM_VALUE,
    total_value: total_value,
  });
};
export const transfer_balance =
  (balance) =>
  (
    dispatch // new Promise((resolve, reject) =>
  ) => {
    dispatch({
      type: TRANSFER_BALANCE,
      balance: balance,
    });
    //resolve();
  };
//);
export const clear_transfer_data = () => ({
  type: CLEAR_TRANSFER_DATA,
});
//End transfer actions

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
