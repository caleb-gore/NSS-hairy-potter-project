// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
// Make 5 pieces of pottery at the wheel
let mug1 = makePottery("mug", 5, 4)
console.log(mug1);
let mug2 = makePottery("mug", 5, 4)
console.log(mug2);
let mug3 = makePottery("mug", 5, 4)
console.log(mug3);
let mug4 = makePottery("mug", 5, 4)
console.log(mug4);
let mug5 = makePottery("mug", 5, 4)
console.log(mug5);

// Fire each piece of pottery in the kiln
let firedMug1 = firePottery(mug1, 2200)
console.log(firedMug1)
let firedMug2 = firePottery(mug2, 2201)
console.log(firedMug2)
let firedMug3 = firePottery(mug3, 2199)
console.log(firedMug3)
let firedMug4 = firePottery(mug4, 2200)
console.log(firedMug4)
let firedMug5 = firePottery(mug5, 2198)
console.log(firedMug5)


// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug1)
console.log(usePottery())
toSellOrNotToSell(firedMug2)
console.log(usePottery())
toSellOrNotToSell(firedMug3)
console.log(usePottery())
toSellOrNotToSell(firedMug4)
console.log(usePottery())
toSellOrNotToSell(firedMug5)
console.log(usePottery())


// Invoke the component function that renders the HTML list



