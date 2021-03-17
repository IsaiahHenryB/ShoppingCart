let name = prompt(`What's your name?`)
let orderOne = prompt(`Alright, ${name} what is the first item?`)
let priceOne = Number(prompt(`So how much is/are the ${orderOne}?`))

if (isNaN(priceOne)) {
    alert(`${name}, Please choose a number`)
    priceOne = Number(prompt(`So how much is/are the ${orderOne}?`))
}
let orderTwo = prompt(`Alright, ${name} what is the second item?`)
let priceTwo = Number(prompt(`So how much is/are the ${orderTwo}?`))

if (isNaN(priceTwo)){
    alert(`${name}, Please choose a number`)
    priceTwo = Number(prompt(`So how much is/are the ${orderTwo}?`))
}
let orderThree = prompt(`Alright, ${name} what is the third item?`)
let priceThree = Number(prompt(`So how much is/are the ${orderThree}?`))

if (isNaN(priceThree)){
    alert(`${name}, Please choose a number`)
    priceThree = Number(prompt(`So how much is/are the ${orderThree}?`))
}
// I found out about while, but i don't want to use it here in place of the 'if's. But it's so coooool (;n;) 
let allPrices = priceOne + priceTwo + priceThree
let grandTotal = (allPrices * 0.0625)+(allPrices)
document.getElementById("name").innerHTML = `This is what you wanted, ${name}.`
document.getElementById("price").innerHTML = `Your grand total is $${allPrices.toFixed(2)} plus tax which is $${grandTotal.toFixed(2)}`