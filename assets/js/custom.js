const playersNumber = document.getElementById("players");
const formContainer = document.querySelector(".players-container");
const players = [
  document.querySelector(".playerOne"),
  document.querySelector(".playerTwo"),
  document.querySelector(".playerThree"),
  document.querySelector(".playerFour"),
  document.querySelector(".playerFive")
];

playersNumber.addEventListener('change', (event) => {
  const numbOfPlayers = event.target.value;
  
  players.forEach(player => player.classList.add("hidden"));
  
  for (let i = 0; i < numbOfPlayers; i++) {
    players[i].classList.remove("hidden");
  }
  
  formContainer.classList.toggle("hidden", numbOfPlayers === "0");
});
