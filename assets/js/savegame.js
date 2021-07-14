let saveScoreButton = document.querySelector('#save-game');
let userInitials = document.getElementById('save-form-name');
// `<a href="./highscores.html" id="highscore-btn" class="btn">High Scores <i class="fas fa-crown"></i></a>`
saveGame =(e)=>{
  e.preventDefault();
  if (saveScoreButton.textContent === 'Saved') {
    alert("Game has already been Saved!");
  }
  saveScoreButton.textContent = 'Saving...';
  var userName = userInitials.value.trim();
  localStorage.setItem('user-name', userName);
  let SavePlayer ={
    name: userName,
    score: localStorage.getItem('high-score')
  }
  localStorage.setItem('player-info',JSON.stringify(SavePlayer));
  setTimeout(()=>{
    saveScoreButton.textContent = 'Saved';
  },500)
  setTimeout(()=>{
    return window.location.assign('/highscores.html');
  },1000);
  console.log(SavePlayer);
}
saveScoreButton.addEventListener('click',saveGame);