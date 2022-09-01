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
let btn = document.getElementById('btn')

let acts = ['mowing the lawn', 'sweeping', 'golfing', 'driving a car', 'dancing', 'proposing', 'singing', 'typing', 'texting', 'cutting hair', 'weaving hair', 'eating', 'cooking', 'knitting', 'crawling', 'jogging', 'running', 'bouncing',]

function showWord(acts){ 
    let random = Math.floor(Math.random() * acts.length) 
    cxt.textContent = acts[random]
}

showWord(acts)
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
    showWord(acts)
    score++
})
pass.addEventListener('click', ()=>{
    showWord(acts)
})

btn.addEventListener('click', ()=>{
    window.location.href = './index.html'
})