const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    
    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Empate!"
    }else if ((human === 'paper' && machine === 'rock') ||
              (human === 'rock' && machine === 'scissors') ||
              (human === 'scissors' && machine === 'paper')
            ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você Ganhou!"
    }else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Voce perdeu para a Alexa!"
    }
}