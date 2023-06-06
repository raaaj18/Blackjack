    let player = {
        name : "Raj",
        chips : 200
    }

    let cards = []                    //array of cards ordered              
    let sum = 0 
    let bjv = false 
    let isAlive = false
    let msg = ""
    let sumEl = document.getElementById("sum-el")
    //let sumEl = document.querySelector("#sum-el")
    let cardsEl = document.getElementById("cards-el")
    let msgEl = document.getElementById("msg-el")
    let playerEl = document.getElementById("player-el")
      
    playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if(randomNumber > 10) {
        return 10
    }
    else if(randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
   
}



function startGame() {
    isAlive = true
    let fcard = getRandomCard()
    let scard = getRandomCard()
    cards = [fcard,scard]
    sum = fcard + scard
    renderGame()  
}


function renderGame() {                   //render out first and second card
    
    cardsEl.textContent = "cards: "

    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] +  " "
    }

    sumEl.textContent = "Sum:" + sum
    if(sum < 21) {
        msg = "Do you want to draw a new card?"
    }
    else if(sum === 21) {
        msg = "You got blackjack $$$"
        bjv = true
    }
    else {
        msg = "You are out of the game!"
        isAlive = false
    } 
    msgEl.textContent = msg
    }  

function newCard() {

    if(isAlive === true && bjv === false) 
    {
        let nc = Math.floor(Math.random() * 10);
        sum += nc
        cards.push(nc)
        renderGame()
    }
}
   