// Code your solutions in this file
function writeCards(cardsArray) {
    const cards = [] 
    console.log(cards)
    for (let i = 0; i < cardsArray.length; i++) {
    cards.push(`Thank you, ${cardsArray[i]}, for the wonderful surprise gift!`)
    console.log(cards)
}

return cards;
}

writeCards(cards);

function countDown(count) {
while (count > 0) {
    console.log(count)
    count -= 1
}
    console.log(count)
}