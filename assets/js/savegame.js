let saveScoreButton = document.querySelector('#save-game');
let userInitials = document.getElementById('save-form-name');
// `<a href="./highscores.html" id="highscore-btn" class="btn">High Scores <i class="fas fa-crown"></i></a>`
saveGame =(e)=>{
  e.preventDefault();
  saveScoreButton.textContent = 'Saving...';
  var userName = userInitials.value.trim();
  localStorage.setItem('user-name', userName);
  let SavePlayer ={
    name: userName,
    score: localStorage.getItem('high-score')
  }
  localStorage.setItem('player-info',JSON.parse(SavePlayer));
  setTimeout(()=>{
    saveScoreButton.textContent = 'Saved';
  },500)
  console.log(SavePlayer);
}
saveScoreButton.addEventListener('click',saveGame);