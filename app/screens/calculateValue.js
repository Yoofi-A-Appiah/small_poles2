import React from "react";
const calculateTeamValue = (
  player_gk1,
  player_gk2,
  player_def1,
  player_def2,
  player_def3,
  player_def4,
  player_def5,
  player_mid1,
  player_mid2,
  player_mid3,
  player_mid4,
  player_fwd1,
  player_fwd2,
  player_fwd3,
  player_fwd4
) => {
  let all_value =
    player_gk1 +
    player_gk2 +
    player_def1 +
    player_def2 +
    player_def3 +
    player_def4 +
    player_def5 +
    player_mid1 +
    player_mid2 +
    player_mid3 +
    player_mid4 +
    player_fwd1 +
    player_fwd2 +
    player_fwd3 +
    player_fwd4;

  return all_value;
};
export default calculateTeamValue;
