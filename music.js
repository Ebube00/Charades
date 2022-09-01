let type = document.getElementById('class')
let Time = document.getElementById('time')
let cxt = document.getElementById('cxt')
let t1 = document.getElementById('t1')
let tDiv = document.getElementById('tdiv')
let pass = document.getElementById('pass')
let next = document.getElementById('next')
let gO = document.getElementById('gO')
let display = document.getElementById('display')
let Class = document.getElementById('class')
let scoreD = document.getElementById('scoreD')

let music = [`i'm on one`, 'wild thoughts', 'diamonds', `what's my name`, 'hotline bling', 'all of the lights', 'bodak yellow', 'WAP', 'halo', 'essence', 'no woman no cry', ]

function showWord(music){ 
    let random = Math.floor(Math.random() * movies.length) 
    cxt.textContent = movies[random]
}
showWord(music)

let time = 3
let isPlaying
let time1 = 63
let score = '0'

function countdown1(){
    time1 --
    if(time1 == 0){
        gO.style.zIndex = '20'
        Class.textContent = 'GAME OVER'
    }
    Time.textContent = time1
    scoreD.textContent = score
}
function countdown(){
    time --
    if(time == 0){
        tDiv.style.zIndex = '0'
    }
    t1.textContent = time
}
setInterval(countdown, 1000)
setInterval(countdown1, 1000)

next.addEventListener('click', ()=>{
    showWord(music)
    score++
})
pass.addEventListener('click', ()=>{
    showWord(music)
})