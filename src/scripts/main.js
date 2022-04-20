// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'
// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("Mug", 4, 4)
console.log(pottery1);
let pottery2 = makePottery("Bowl", 8, 3)
console.log(pottery2);
let pottery3 = makePottery("Vase", 2, 8)
console.log(pottery3);
let pottery4 = makePottery("Pot", 7, 5)
console.log(pottery4);
let pottery5 = makePottery("Candle Holder", 3, 4)
console.log(pottery5);

// Fire each piece of pottery in the kiln
let firedPottery1 = firePottery(pottery1, 2200)
console.log(firedPottery1)
let firedPottery2 = firePottery(pottery2, 2200)
console.log(firedPottery2)
let firedPottery3 = firePottery(pottery3, 2199)
console.log(firedPottery3)
let firedPottery4 = firePottery(pottery4, 2200)
console.log(firedPottery4)
let firedPottery5 = firePottery(pottery5, 2198)
console.log(firedPottery5)


// Determine which ones should be sold, and their price
let pricePottery1 = toSellOrNotToSell(firedPottery1)
let pricePottery2 = toSellOrNotToSell(firedPottery2)
let pricePottery3 = toSellOrNotToSell(firedPottery3)
let pricePottery4 = toSellOrNotToSell(firedPottery4)
let pricePottery5 = toSellOrNotToSell(firedPottery5)


// Invoke the component function that renders the HTML list
let list = PotteryList(usePottery())
const potteryHTML = document.querySelector(".potteryList")
potteryHTML.innerHTML = list

