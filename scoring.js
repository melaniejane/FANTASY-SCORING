const calculateScore = (player) => {
  if (player.position === "QB") {
    return scoreQB(player);
  }

  if (player.position === "RB") {
    return scoreRB(player);
  }

  if (player.position === "WR") {
    return scoreWR(player);
  }

  if (player.position === "TE") {
    return scoreTE(player);
  }

  return 0;
};

const scoreQB = (player) => {
  const passing = player.stats.passing;
  const rushing = player.stats.rushing;

  return (
    passing.yards / 25 +
    passing.touchdowns * 6 +
    passing.interceptions * -3 +
    rushing.yards / 10 +
    rushing.touchdowns * 6 +
    rushing.fumbles * -3
  );
};

const scoreRB = (player) => {
  const rushing = player.stats.rushing;
  const receiving = player.stats.receiving;
  const kickreturn = player.stats.return.kickreturn;
  const puntreturn = player.stats.return.puntreturn;

  return (
    rushing.yards / 10 +
    rushing.touchdowns * 6 +
    rushing.fumbles * -3 +
    receiving.receptions * 1 +
    receiving.yards / 10 +
    receiving.touchdowns * 6 +
    receiving.fumbles * -3 +
    kickreturn.yards / 15 +
    kickreturn.touchdowns * 6 +
    kickreturn.fumbles * -3 +
    puntreturn.yards / 15 +
    puntreturn.touchdowns * 6 +
    puntreturn.fumbles * -3
  );
};

const scoreWR = (player) => {
  const rushing = player.stats.rushing;
  const receiving = player.stats.receiving;
  const kickreturn = player.stats.return.kickreturn;
  const puntreturn = player.stats.return.puntreturn;

  return (
    rushing.yards / 10 +
    rushing.touchdowns * 6 +
    rushing.fumbles * -3 +
    receiving.receptions * 1 +
    receiving.yards / 10 +
    receiving.touchdowns * 6 +
    receiving.fumbles * -3 +
    kickreturn.yards / 15 +
    kickreturn.touchdowns * 6 +
    kickreturn.fumbles * -3 +
    puntreturn.yards / 15 +
    puntreturn.touchdowns * 6 +
    puntreturn.fumbles * -3
  );
};

const scoreTE = (player) => {
  const receiving = player.stats.receiving;

  return (
    receiving.receptions * 1 +
    receiving.yards / 10 +
    receiving.touchdowns * 6 +
    receiving.fumbles * -3
  );
};

module.exports = calculateScore;
