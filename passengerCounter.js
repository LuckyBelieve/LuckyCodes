
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
button.innerText = 'Remove Someone ';

div2.append(button);
button.setAttribute('class','increment-btn')

// console.log(button);

function decrement(){
    countEl -=1;
    count.innerText = countEl;
}
button.addEventListener('click',decrement);
