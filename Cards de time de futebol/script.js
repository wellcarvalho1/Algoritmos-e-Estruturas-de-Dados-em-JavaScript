const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "SÃO PAULO",
  sport: "FUTEBOL",
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "THIAGO CARPINI",
    matches: 3,
  },
  players: [
    {
      name: "Aldemir Ferreira",
      position: "Atacante",
      number: 47,
      isCaptain: false,
      nickname: "Ferreirinha",
    },
    {
      name: "Giuliano Galoppo",
      position: "Meio-Campista",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "James Rodríguez",
      position: "Meio-Campista",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Wellington Soares da Silva",
      position: "Meio-Campista",
      number: 27,
      isCaptain: false,
      nickname: "Wellington Rato",
    },
    {
      name: "Robert Abel Arboleda Escobar",
      position: "Defensor",
      number: 5,
      isCaptain: false,
      nickname: "Arbolenda",
    },
    {
      name: "Nahuel Adolfo Ferraresi Hernández",
      position: "Defensor",
      number: 3,
      isCaptain: false,
      nickname: "Ferraresi",
    },
    {
      name: "Jonathan Calleri",
      position: "Atacante",
      number: 9,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Márcio Rafael Ferreira de Souza",
      position: "Defensor",
      number: 13,
      isCaptain: false,
      nickname: "Rafinha",
    },
    {
      name: "Welington Damascena Santos",
      position: "Defensor",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Alisson Euler de Freitas Castro",
      position: "Meio-Campista",
      number: 25,
      isCaptain: true,
      nickname: null,
    },
    {
      name: "Luciano da Rocha Neves",
      position: "Atacante",
      number: 10,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pablo Gonçalves Maia Fortunato",
      position: "Meio-Campista",
      number: 29,
      isCaptain: false,
      nickname: "Pablo Maia",
    },
    {
      name: "Alan Javier Franco",
      position: "Defensor",
      number: 28,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rodrigo Nestor Bertalia",
      position: "Meio-Campista",
      number: 11,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rafael Pires Monteiro",
      position: "Goleiro",
      number: 23,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Diego Henrique Costa Barbosa",
      position: "Defensor",
      number: 4,
      isCaptain: false,
      nickname: "Diego Costa",
    },
    {
      name: "Lucas Rodrigues Moura da Silva",
      position: "Atacante",
      number: 7,
      isCaptain: false,
      nickname: "Lucas Moura",
    },
    {
      name: "Jandrei Chitolina Carniel",
      position: "Goleiro",
      number: 93,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Patryck Lanza dos Reis",
      position: "Defensor",
      number: 36,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Damián Josué Bobadilla Benítez",
      position: "Meio-Campista",
      number: 21,
      isCaptain: false,
      nickname: "Bobadilla",
    },
    {
      name: "Luiz Gustavo Dias",
      position: "Meio-Campista",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Young Navarro Moraes",
      position: "Goleiro",
      number: 50,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Posição: ${position}</p>
          <p>Número: ${number}</p>
          <p>Apelido: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "Atacante"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "Meio-Campista")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "Defensor")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "Goleiro")
      );
      break;

default:
      setPlayerCards();

  }
});
