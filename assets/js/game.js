let choices = document.querySelector('#choices-ul');
let question = document.querySelector('#question')
console.log(choices);
console.log(question);
let questions =[
{
  question: 'Select C',
  wrong: ['A', 'B', 'D'],
  answer: 'C'
},
{
  question: 'Select D',
  wrong: ['A', 'B', 'C'],
  answer: 'D'
},
{
  question: 'Select B',
  wrong: ['A', 'C', 'D'],
  answer: 'B'
},
{
  question: 'Select A',
  wrong: ['B', 'C', 'D'],
  answer: 'A'
},

];


startGame = () =>{
 createUI();
}

createUI = ()=>{
  let i = 0;
  
  question.textContent = questions[i].question;
  wrong = questions[i].wrong;
  console.log(wrong);
  wrong.forEach(item =>{
    console.log(item);
    let li = document.createElement('li');
    let i = 0;
    li.classList = 'choice-container';
    li.innerHTML = 
    `
    <p class="choice-prefix">${item}</p>
    <p class="choice-text" data-number="${i}">${item}</p>
    `;
    choices.append(li);
    i++
  })
}

correctAnswer = ()=>{

}
incorrectAnswer = ()=>{

}

startGame();