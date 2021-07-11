let choices = document.querySelector('#choices-ul');
let question = document.querySelector('#question');
let nextButton = document.querySelector('#next');
let index = 0;
console.log(choices);
console.log(question);
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
  createUI();
}
incrementGameLoop = ()=>{
    index++;
    removeElements();
    createUI();

}



createUI = ()=>{
  if( index >= questions.length){
    alert('Quiz Complete!');
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
    setTimeout(()=>{
      selectedLI.classList.remove('correct');
    }, 3000); 
  }else{
    selectedLI.classList.add('incorrect');
    setTimeout(()=>{
      selectedLI.classList.remove('incorrect');
    }, 3000); 
  }
}

removeElements =()=>{
  let removeLIElements = Array.from(document.querySelectorAll('.choice-container'));
  removeLIElements.forEach(item =>{
    item.remove();
  })
}
choices.addEventListener('click', answerCheck);
nextButton.addEventListener('click', incrementGameLoop);
startGame();