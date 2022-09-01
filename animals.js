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

let animals = ['Cow', 'dog', 'elephant', 'armadillo', 'ant eater', 'ant', 'baboon', 'bear', 'monkey', 'panda', 'polar bear', 'cat', 'chimpanzee', 'ostrich', 'cock', 'salmon', 'shark', 'whale', 'flamingo', 'gorilla', 'kangaroo', 'lion', 'leopard', 'cheetah', 'jaguar', 'panther', 'goat', 'moose', 'reindeer', 'horse', 'iguana', 'chameleon', 'jackal', 'hyena', 'honey badger', 'bee', 'wasp', 'mosquito', 'fly', 'maggot', 'anaconda', 'cobra', 'python', 'mamba', 'earthworm', 'boa', 'fox', 'raccoon', 'locust', 'antelope', 'ox', 'bull', 'pigeon', 'dove', 'partridge', 'platypus', 'seal', 'sea-lion', 'spider', 'bat', 'wolf', 'rabbit', 'parrot', 'tilapia', 'sardine', 'piranha', 'zebra', 'crocodile', 'alligator']

function showWord(animals){ 
    let random = Math.floor(Math.random() * animals.length) 
    cxt.textContent = animals[random]
}

showWord(animals)
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
    showWord(animals)
    score++
})
pass.addEventListener('click', ()=>{
    showWord(animals)
})