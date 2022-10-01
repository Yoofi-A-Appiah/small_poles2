/**
 * with the actions set, functions to be performed on them are written here
 */
import {
  SET_TEAM_NAME,
  SET_FAV_TEAM,
  SET_PLAYER_GK1,
  SET_PLAYER_GK2,
  SET_PLAYER_DEF1,
  SET_PLAYER_DEF2,
  SET_PLAYER_DEF3,
  SET_PLAYER_DEF4,
  SET_PLAYER_DEF5,
  SET_PLAYER_MID1,
  SET_PLAYER_MID2,
  SET_PLAYER_MID3,
  SET_PLAYER_MID4,
  SET_PLAYER_FWD1,
  SET_PLAYER_FWD2,
  SET_PLAYER_FWD3,
  SET_PLAYER_FWD4,
  CLEAR_DATA,
  GET_ALL_PLAYERS,
} from "./actions";

const initialState = {
  name: "",
  fav: "___",
  player_gk1: { player_id: "ID", player_name: "N@me" },
  player_gk2: { player_id: "ID", player_name: "N@me" },
  player_def1: { player_id: "ID", player_name: "N@me" },
  player_def2: { player_id: "ID", player_name: "N@me" },
  player_def3: { player_id: "ID", player_name: "N@me" },
  player_def4: { player_id: "ID", player_name: "N@me" },
  player_def5: { player_id: "ID", player_name: "N@me" },
  player_mid1: { player_id: "ID", player_name: "N@me" },
  player_mid2: { player_id: "ID", player_name: "N@me" },
  player_mid3: { player_id: "ID", player_name: "N@me" },
  player_mid4: { player_id: "ID", player_name: "N@me" },
  player_fwd1: { player_id: "ID", player_name: "N@me" },
  player_fwd2: { player_id: "ID", player_name: "N@me" },
  player_fwd3: { player_id: "ID", player_name: "N@me" },
  player_fwd4: { player_id: "ID", player_name: "N@me" },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_NAME:
      return { ...state, name: action.payload };
    case SET_FAV_TEAM:
      return { ...state, fav: action.payload };
    case CLEAR_DATA:
      return initialState;
    case GET_ALL_PLAYERS:
      return state;
    case SET_PLAYER_GK1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_gk1: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_GK2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_gk2: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_def1: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_def2: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_def3: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_def4: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF5: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_def5: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_mid1: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_mid2: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_mid3: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_mid4: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_fwd1: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_fwd2: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_fwd3: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const newState = {
        ...state,
        player_fwd4: {
          ...state,
          player_id,
          player_name,
        },
      };
      return newState;
    }
    default:
      return state;
  }
}
export default userReducer;
