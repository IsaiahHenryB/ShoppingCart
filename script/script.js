function buyStuff(){
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
function addPrices(priceOne,priceTwo,priceThree){
    return priceOne + priceTwo + priceThree;
}
// console.log(addPrices(priceOne,priceTwo,priceThree))
let allPrices = addPrices(priceOne,priceTwo,priceThree)

function grandTotal(allprices){
    return  (allPrices * 0.0625)+ allPrices;
}
function myOrder(orderOne,orderTwo,orderThree){
    return `You got ${orderOne}, ${orderTwo} and ${orderThree}, huh?`
}
// let allPrices = priceOne + priceTwo + priceThree
// let grandTotal = (allPrices * 0.0625)+(allPrices)
document.getElementById("name").innerHTML = `This is what you wanted, ${name}. ${myOrder(orderOne,orderTwo,orderThree)}`
document.getElementById("price").innerHTML = `Your total is $${addPrices(priceOne,priceTwo,priceThree).toFixed(2)} plus tax which is $${grandTotal().toFixed(2)}`
}