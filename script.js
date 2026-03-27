const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")

const humanScoreEl = document.getElementById("human-score")
const machineScoreEl = document.getElementById("machine-score")

const humanChoiceEl = document.getElementById("human-choice")
const machineChoiceEl = document.getElementById("machine-choice")

let humanScore = 0
let machineScore = 0

// 🎉 CONFETE
function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 1 }
  })
}

const emojiMap = {
  rock: "✊",
  paper: "🤚",
  scissors: "✌️"
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playSound(clickSound)
    playGame(button.dataset.choice)
  })
})

function playGame(humanChoice) {
  const machineChoice = getMachineChoice()

  humanChoiceEl.textContent = emojiMap[humanChoice]
  machineChoiceEl.textContent = "⏳"

  animateChoice(humanChoiceEl)

  setTimeout(() => {
    machineChoiceEl.textContent = emojiMap[machineChoice]
    animateChoice(machineChoiceEl)

    checkResult(humanChoice, machineChoice)
  }, 800)
}

function getMachineChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * 3)]
}

function checkResult(human, machine) {
  result.className = "result"

  if (human === machine) {
    result.textContent = "Empate!"
    result.classList.add("draw")
    return
  }

  if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScore++
    humanScoreEl.textContent = humanScore

    result.textContent = "🔥 Você venceu!"
    result.classList.add("win")
    playSound(winSound)
    showConfetti()

  } else {
    machineScore++
    machineScoreEl.textContent = machineScore

    result.textContent = "💀 Você perdeu!"
    result.classList.add("lose")
    playSound(loseSound)
  }
}

function animateChoice(el) {
  el.classList.add("animate")

  setTimeout(() => {
    el.classList.remove("animate")
  }, 300)
}