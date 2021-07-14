var players = JSON.parse(localStorage.getItem('player-info'));

console.log(players);

Object.entries(players).sort((a,b)=>b[1]-a[1]);
console.log(players);

createHighScoreUI = ()=>{
  
}