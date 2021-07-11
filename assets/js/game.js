let choices = document.querySelector('#choices-ul');
let question = document.querySelector('#question');
let index = 0;
console.log(choices);
console.log(question);
let questions =[
{
  question: 'Select C',
  wrong: ['A','B', 'C', 'D'],
  answer: 'C'
},
{
  question: 'Select D',
  wrong: ['A','B', 'C', 'D'],
  answer: 'D'
},
{
  question: 'Select B',
  wrong: ['A','B', 'C', 'D'],
  answer: 'B'
},
{
  question: 'Select A',
  wrong: ['A','B', 'C', 'D'],
  answer: 'A'
},

];


startGame = () =>{
 createUI();
}

createUI = ()=>{
  
  question.textContent = questions[index].question;
  wrong = questions[index].wrong;
  wrong.forEach(item =>{
    let li = document.createElement('li');
    let i = 0;
    li.classList = 'choice-container';
    li.innerHTML = 
    `
    <p class="choice-prefix">${item}</p>
    <p class="choice-text" data-number="${i}">${item}</p>
    `;
    choices.append(li);
    i++;
  })
}

answerCheck = (e)=>{
  let selectedLI = e.target;
  let userAnswer = e.target.querySelector('.choice-text').textContent;
  let correctAnswer = questions[index].answer;
  console.log(selectedLI);
  console.log(correctAnswer);
  console.log(userAnswer);
  if(userAnswer === correctAnswer){
    selectedLI.classList.add('correct');
  }else{
    selectedLI.classList.add('incorrect');
  }
}

choices.addEventListener('click', answerCheck);
startGame();