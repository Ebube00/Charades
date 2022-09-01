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

let persons = ['Matt Damon', 'Chris Brown', 'Joyner Lucas', 'Dax', "Will Smith", 'Angelina Jolie', 'Brad Pitt', 'Nick Canon', 'Tobey Maguire', 'Leonardo DiCaprio', 'Frank Ocean', 'Kendrick Lamar', 'Daniel Radcliffe', 'Emma Watson', 'Robert Downey Jr', 'Tom Hardy', 'Martin Scorcese', 'Christopher Nolan', 'Gigi Hadid', 'Bella Hadid', 'Kendall Jenner', 'Kylie Jenner', 'Tristan Thompson', 'Steph Curry', 'Micheal Jordan', 'DJ Khaled', 'Calvin Harris', 'Rihanna', 'Donald Glover', 'Elvis Presley', 'Mark Zuckerberg', 'Bill Gates', 'Warren Buffet', 'Priyanka Chopra', 'jhene aiko', 'big sean', 'ryan gosling', 'ryan reynolds', 'amy schumer', 'chris hemsworth', 'beyonce', 'kim kardashian', 'kourtney kardashian', 'kris jenner', 'wizkid', 'burna boy', 'tems', 'ed sheeran', 'rema', 'dr dre', 'eminem', 'trevor noah', 'kevin hart', 'dwayne johnson', 'j.k rowlings', 'brandon sanderson', 'billie eilish', 'ben affleck', 'drake', 'donald trump', 'barack obama', 'osama bin laden', 'jesus christ', 'whitney houston']

function showWord(persons){ 
    let random = Math.floor(Math.random() * persons.length) 
    cxt.textContent = persons[random]
}

showWord(persons)
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
    showWord(persons)
    score++
})
pass.addEventListener('click', ()=>{
    showWord(persons)
})