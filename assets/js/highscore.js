let players = JSON.parse(localStorage.getItem('player-info'));
let ul = document.querySelector('#top-scores')
console.log(players);

console.log(ul);

createHighScoreUI = ()=>{
  players.forEach(item => {
    let li = document.createElement('li');
    li.classList = 'choice-container';
    
    if(players[0]){
      li.innerHTML = 
      `
      <i class="fas fa-crown"></i>
      <p class="choice-prefix">Name: ${item.name}</p>
      <p class="choice-text">Score: ${item.score}</p>
      `;
    }else{
      li.innerHTML = 
      `
      <i class="fas fa-gem"></i>
      <p class="choice-prefix">Name: ${item.name}</p>
      <p class="choice-text">Score: ${item.score}</p>
      `;
    }
    console.log(li);
    ul.append(li);
  });
}

createHighScoreUI();