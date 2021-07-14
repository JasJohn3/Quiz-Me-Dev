let saveScoreButton = document.querySelector('#save-game');
let userInitials = document.getElementById('save-form-name');
// `<a href="./highscores.html" id="highscore-btn" class="btn">High Scores <i class="fas fa-crown"></i></a>`
saveGame =(e)=>{
  e.preventDefault();
  saveScoreButton.textContent = 'Saving...';

  let SavePlayer ={
    name: userInitials.value,
    score: localStorage.getItem('score')
  }
  setTimeout(()=>{
    saveScoreButton.textContent = 'Saved';
  },500)
  console.log(SavePlayer);
}
saveScoreButton.addEventListener('click',saveGame);