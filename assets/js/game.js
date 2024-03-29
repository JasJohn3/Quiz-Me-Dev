let choices = document.querySelector('#choices-ul');
let question = document.querySelector('#question');
let nextButton = document.querySelector('#next');
let score = document.querySelector('#score');
let gameContainer = document.querySelector('#game');
let progressBarFull = document.querySelector('#progressBarFull');

let index = 0;
let timerFunction;
let setHighScore = 100;

let questions =[
{
  question: 'Select C',
  wrong: [{A :'Answer'},{B :'Answer'}, {C :'Answer'}, {D :'Answer'}],
  answer: 'C'
},
{
  question: 'Select D',
  wrong: [{A :'Answer'},{B :'Answer'}, {C :'Answer'}, {D :'Answer'}],
  answer: 'D'
},
{
  question: 'Select B',
  wrong: [{A :'Answer'},{B :'Answer'}, {C :'Answer'}, {D :'Answer'}],
  answer: 'B'
},
{
  question: 'Select A',
  wrong: [{A :'Answer'},{B :'Answer'}, {C :'Answer'}, {D :'Answer'}],
  answer: 'A'
},

];


startGame = () =>{
  timer();
  createUI();
}
incrementGameLoop = ()=>{
   
    index++;
    removeElements();
    createUI();

}



createUI = ()=>{
  if( index >= questions.length || setHighScore === 0){
    gameContainer.innerHTML = ''
    let saveLink = document.createElement('a');
    saveLink.setAttribute('class','btn');
    saveLink.setAttribute('href','./savegame.html');
    saveLink.textContent = 'Save Score';
    gameContainer.append(saveLink);
    score.textContent = localStorage.getItem('high-score');
    clearInterval(timerFunction);
    return window.location.assign('./savegame.html');

  }
  question.textContent = questions[index].question;
  wrong = questions[index].wrong;
  wrong.forEach(item =>{
    let li = document.createElement('li');

    li.classList = 'choice-container';
    li.innerHTML = 
    `
    <p class="choice-prefix">${Object.keys(item)}</p>
    <p class="choice-text">${Object.values(item)}</p>
    `;
    choices.append(li);
  })
}

answerCheck = (e)=>{
  let selectedLI = e.target;
  let userAnswer = e.target.querySelector('.choice-prefix').textContent;
  let correctAnswer = questions[index].answer;

  if(userAnswer === correctAnswer){
    selectedLI.classList.add('correct');
    
    highScore(score.textContent)
    setTimeout(()=>{
      selectedLI.classList.remove('correct');
      incrementGameLoop();
    }, 1000);
  }else{
    selectedLI.classList.add('incorrect');
      highScore(score.textContent)
      if (setHighScore !=0) {
        setHighScore -= 25;
      }
      setTimeout(()=>{
        selectedLI.classList.remove('incorrect');
        incrementGameLoop();
      }, 1000);
  }
}
highScore = (currentTime)=>{
  
  localStorage.setItem('high-score', currentTime); 
}

timer=()=>{
  timerFunction = setInterval(()=>{
    score.textContent = setHighScore;
    setHighScore-=1;
    if (setHighScore <= 0){
      clearInterval(timerFunction);
      setHighScore = 0;
      score.textContent = setHighScore;
      return window.location.assign('./savegame.html');
    }
  },1000); 
}
removeElements =()=>{
  let removeLIElements = Array.from(document.querySelectorAll('.choice-container'));
  removeLIElements.forEach(item =>{
    item.remove();
  });
}

choices.addEventListener('click', answerCheck);

startGame();