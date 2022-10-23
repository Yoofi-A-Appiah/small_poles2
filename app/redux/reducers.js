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
  SET_TEAM_VALUE,
  GET_BUDGET,
  BALANCE,
  SET_USER_ID,
  TRANSFER_PLAYER_GK1,
  TRANSFER_PLAYER_GK2,
  TRANSFER_PLAYER_DEF1,
  TRANSFER_PLAYER_DEF2,
  TRANSFER_PLAYER_DEF3,
  TRANSFER_PLAYER_DEF4,
  TRANSFER_PLAYER_DEF5,
  TRANSFER_PLAYER_MID1,
  TRANSFER_PLAYER_MID2,
  TRANSFER_PLAYER_MID3,
  TRANSFER_PLAYER_MID4,
  TRANSFER_PLAYER_FWD1,
  TRANSFER_PLAYER_FWD2,
  TRANSFER_PLAYER_FWD3,
  TRANSFER_PLAYER_FWD4,
  CLEAR_TRANSFER_DATA,
  TRANSFER_TEAM_VALUE,
  TRANSFER_BALANCE,
  TRANSFER_BUDGET,
  TRANSFER_MADE,
} from "./actions";

const initialState = {
  name: "",
  fav: "___",
  team_value: 0,
  budget: false, //indicates that user is under budget by default
  balance: 1000,
  user_id: "",
  all_player_value: 0,
  player_gk1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_gk2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def4: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def5: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid4: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd4: { player_id: "ID", player_name: "N@me", player_value: 0 },
};
const transferState = {
  transfer_made: false,
  team_value: 0,
  budget: false, //indicates that user is under budget by default
  balance: 1000,
  player_gk1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_gk2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def4: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_def5: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_mid4: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd1: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd2: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd3: { player_id: "ID", player_name: "N@me", player_value: 0 },
  player_fwd4: { player_id: "ID", player_name: "N@me", player_value: 0 },
};
export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, user_id: action.userid };
    default:
      return state;
  }
}
export function transfersReducer(state = transferState, action) {
  switch (action.type) {
    case TRANSFER_MADE:
      return { ...state, transfer_made: action.transfer_made };
    case TRANSFER_TEAM_VALUE:
      return { ...state, team_value: action.total_value };
    case TRANSFER_BALANCE:
      return { ...state, balance: action.balance };
    case TRANSFER_BUDGET:
      return { ...state, budget: action.budget };
    case TRANSFER_PLAYER_GK1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_gk1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_GK2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_gk2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_DEF1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_DEF2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_DEF3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_DEF4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_DEF5: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def5: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_MID1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_MID2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_MID3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_MID4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_FWD1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_FWD2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_FWD3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case TRANSFER_PLAYER_FWD4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case CLEAR_TRANSFER_DATA:
      return transferState;
    default:
      return state;
  }
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM_NAME:
      return { ...state, name: action.payload };
    case SET_FAV_TEAM:
      return { ...state, fav: action.payload };
    case CLEAR_DATA:
      return initialState;
    case GET_ALL_PLAYERS:
      return state;
    case GET_BUDGET:
      return { ...state, budget: action.budget };
    case SET_TEAM_VALUE:
      return { ...state, team_value: action.total_value };
    case BALANCE:
      return { ...state, balance: action.balance };
    // case SET_USER_ID:
    //   return { ...state, user_id: action.userid };
    case SET_PLAYER_GK1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_gk1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_GK2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_gk2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_DEF5: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_def5: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_MID4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_mid4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD1: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd1: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD2: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd2: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD3: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd3: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    case SET_PLAYER_FWD4: {
      const player_id = action.player_id;
      const player_name = action.player_name;
      const player_value = action.player_value;
      const newState = {
        ...state,
        player_fwd4: {
          ...state,
          player_id,
          player_name,
          player_value,
        },
      };
      return newState;
    }
    default:
      return state;
  }
}
