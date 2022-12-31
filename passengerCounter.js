
const increBtn = document.querySelector('.increment-btn');
console.log(increBtn);

let count = document.querySelector('.number-entered');
console.log(count);

countEl = 0;

function increment(){
   countEl += 1;
   count.innerText = countEl;
}
increBtn.addEventListener('click',increment);





let div2 = document.querySelector('.buttons');
let button = document.createElement('button');
button.innerText = 'Save ';

div2.append(button);
button.setAttribute('class','increment-btn')

// console.log(button);

let number = document.querySelector('#number')
console.log(number);
function decrement(){
   number.innerText = countEl;
}
button.addEventListener('click',decrement);

let newPassenger = document.querySelector('#newNumber')
function newPassengers(){
   newPassenger.innerText = count.innerText - number.innerText;
}
button.addEventListener('click',newPassengers)