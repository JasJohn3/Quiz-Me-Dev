let choices = document.querySelector('#choices-ul');
let question = document.querySelector('#question');
let nextButton = document.querySelector('#next');
let score = document.querySelector('#score');
let index = 0;

let setHighScore = 200;

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
  if( index >= questions.length){
    let container = document.querySelector('.container');
    container.style.display = 'none';
    alert('Quiz Complete!');
    score.textContent = localStorage.getItem('high-score');
    var userName = prompt("Enter your Initials");
    localStorage.setItem('user-name', userName);
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
  console.log(selectedLI);
  console.log(correctAnswer);
  console.log(userAnswer);
  if(userAnswer === correctAnswer){
    selectedLI.classList.add('correct');
    selectedLI.classList.remove('correct');
    highScore(score.textContent)
    incrementGameLoop(); 
  }else{
    selectedLI.classList.add('incorrect');
      selectedLI.classList.remove('incorrect');
      highScore(score.textContent)
    incrementGameLoop(); 
  }
}
highScore = (currentTime)=>{
  console.log(currentTime);
  localStorage.setItem('high-score', currentTime); 
}

timer=()=>{
  let timeLeft = setHighScore;
  console.log(timeLeft);
  setInterval(()=>{
    if (timeLeft <= 0){
      clearInterval(timer);
      timeLeft = 0;
      score.textContent = timeLeft;
    }
    score.textContent = timeLeft;
    timeLeft-=1;
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