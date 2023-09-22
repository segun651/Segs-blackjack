
let cards = document.getElementById("cards")
let sum = document.getElementById("sum")
let Voice = document.getElementById("voice")
let firstCard = getRandom()
let secondCard = getRandom()
  let isAlive = true 
  let isGame = false
let sums = firstCard + secondCard 

let card = [firstCard,secondCard]
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")
   
function Win() {
  win.style.transform = "translateY(0%)"
  
}
  function Lose() {
    lose.style.transform = "translateY(-0%)"
  
  }

function getRandom() {
     let randomnumber = Math.floor(Math.random()* 17) + 1

    return randomnumber
}

  function logic() {
    cards.innerHTML = "Cards: "
    let bar = ["Nice one.","Good job.","Wonderful.","Keep it up.","You are almost there."]
    let index = Math.floor(Math.random() * bar.length)
      for(i=0; i<card.length;i++) {
         cards.innerHTML +=  `${card[i]},  `
          sum.innerHTML = "Sum: " + sums
           if(sums < 41) {
             isAlive = true
             isGame = false
             Voice.innerHTML = " Bartender's Voice: " + bar[index]
           }
            else if(sums === 41) {
                isAlive = false
                isGame = true
                Voice.innerHTML = "Bartender's Voice: You Win " 
                setTimeout(Win,1000)
            }
            else {
                isAlive = false
                isGame = false
                Voice.innerHTML = "Bartender's Voice: You Lose " 
                setTimeout(Lose,1000)
            }
      } 
  }
   window.onload = () => {
     logic()
   }
  

  function render() {
     if(isAlive === true && isGame === false) {
         let newcard = getRandom()
          card.push(newcard)
          sums += newcard
          logic()
     }
     
  }


