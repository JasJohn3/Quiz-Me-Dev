let saveScoreButton = document.querySelector('#save-game');
let userInitials = document.getElementById('save-form-name');
// `<a href="./highscores.html" id="highscore-btn" class="btn">High Scores <i class="fas fa-crown"></i></a>`
saveGame =(e)=>{
  e.preventDefault();
  if (saveScoreButton.textContent === 'Saved') {
    alert("Game has already been Saved!");
  }
  saveScoreButton.textContent = 'Saving...';
  let userName = userInitials.value.trim();
  let userScore =localStorage.getItem('high-score')
  localStorage.setItem('user-name', userName);
  let SavePlayer ={
    name: userName,
    score: userScore
  }
  let playerInfoArr = []
  playerInfoArr.push(SavePlayer);
  playerInfoArr.sort((a,b)=>{
    return b[1]-a[1];
  });
  console.log(playerInfoArr);
  localStorage.setItem('player-info',JSON.stringify(playerInfoArr));
  setTimeout(()=>{
    saveScoreButton.textContent = 'Saved';
  },500)
  setTimeout(()=>{
    return window.location.assign('/highscores.html');
  },1000);
  console.log(SavePlayer);
}
saveScoreButton.addEventListener('click',saveGame);