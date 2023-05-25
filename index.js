const submit = document.querySelector(".submit");
const supreme = document.querySelector('.supreme');
const supreme1 =  document.querySelector('.supreme1')
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const result = document.querySelector('.result');

submit.addEventListener("click",()=>{
    supreme.style.display = 'none';
    supreme1.style.display = 'block';
})
button1.addEventListener("click",()=>{
    result.innerHTML = '1';
    button1.style.background = '#F6781B'
    button1.style.color='#fff';
})
button2.addEventListener("click",()=>{
    result.innerHTML = '2';
    button2.style.background = '#F6781B'
    button2.style.color='#fff';
})
button3.addEventListener("click",()=>{
    result.innerHTML = '3';
    button3.style.background = '#F6781B'
    button3.style.color='#fff';
})
button4.addEventListener("click",()=>{
    result.innerHTML = '4';
    button4.style.background = '#F6781B'
    button4.style.color='#fff';
})
button5.addEventListener("click",()=>{
    result.innerHTML = '5';
    button5.style.background = '#F6781B'
    button5.style.color='#fff';
})