let text = "Welcome to JS Bootcamp";

let texttitle = document.createElement('h3');
texttitle.textContent = text;

document.getElementById('text-div').appendChild(texttitle)

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn1.addEventListener('click', () => {
    texttitle.textContent = "This is the first Event listener lab"
})

btn2.addEventListener('click', () => {
    texttitle.style.fontSize = 'x-large'
})

btn3.addEventListener('click', () => {
    texttitle.style.fontSize = 'smaller'
})
btn4.addEventListener('click', () => {
    texttitle.style.color = 'rgb(176, 128, 222)'
})

btn5.addEventListener('click', () => {
    texttitle.style.backgroundColor = 'rgb(197, 222, 239)'
})

btn6.addEventListener('click', () => {
    document.body.style.backgroundImage="url('https://images.pexels.com/photos/8462116/pexels-photo-8462116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')"
})
