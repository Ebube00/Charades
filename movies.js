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

let movies = ['great gasby', 'shawshank redemption', 'infinity war', 'endgame', 'sound of music', 'the godfather', 'seven angry men', 'taxi driver', 'sully', 'bourne conspiracy', 'james bond', 'ironman', 'man of steel', 'aquaman', 'shazam', 'wonder-woman', 'into the spiderverse', 'BvS', 'Get Out', 'us', 'the shape of water', 'the transporter', 'knives out', 'the grayman', 'the notebook', 'everybody hates chris', 'the boondocks', 'rick and morty', 'family guy', 'the simpsons', 'american dad', 'game of thrones', 'see', 'bojack horseman', 'castlevania', 'if beale street could talk', 'titanic', 'shutter island', 'predestination', 'superfly', 'annie', 'star wars', 'star trek', 'harry potter', 'transformers', 'bumblebee', 'the conjuring', 'lights out', 'in the tall grass', 'the nun', 'truth or dare', 'teen wolf', 'mordern family', 'peaky binders', 'vikings', 'black panther', 'doctor strange', 'avatar', 'the last airbender', 'fantastic beasts', 'merlin', 'legend of the seeker', 'ma', 'fight club', 'inception', 'interstellar', 'pulp fiction', 'anaconda', 'snake on the plane', 'to all the boys', 'fast and furious', 'suicide squad', 'pursuit of happiness', 'men in black', 'i am legend', 'gone girl', 'Tenet', 'get hard', 'longshot', 'skyfall', 'skyscraper', `don't look up`, 'gravity', 'white chicks', `child's play`, 'american horror story', 'american pie', 'anabelle', 'the martian', 'spartacus', '300', 'when they see us', 'the hate u give', 'mission impossible', 'american made', 'ozark', 'orange is the new black', 'you', 'big mouth', 'grownish', 'blackish', 'euphoria', 'dune', 'red sparrow', 'hunger games', 'black swan', 'friends', 'how i met your mother', 'anna', 'train to busan', 'parasite', 'deadpool', 'the change up', '13 reasons why', 'elite', 'money heist', 'my big fat greek wedding', 'hustle', 'uncle drew', 'alice in wonderland', 'R.I.P.D', 'arrival', '21 jump street', '3 idiots', 'lord of the rings']

function showWord(movies){ 
    let random = Math.floor(Math.random() * movies.length) 
    cxt.textContent = movies[random]
}
showWord(movies)

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
    showWord(movies)
    score++
})
pass.addEventListener('click', ()=>{
    showWord(movies)
})