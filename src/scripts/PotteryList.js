import { usePottery } from "./PotteryCatalog.js"

// creates function to make string of pottery items to sell
export const PotteryList = () => {
    let htmlPotteryList = "" // defines empty string 
    const toBeSold = usePottery() // invokes usePottery() to use array
    for (const obj of toBeSold) { // iterates through array, adding strings to htmlPotteryList
        htmlPotteryList += `<section class="pottery" id="pottery--${obj.id}">
       <h2 class="pottery__shape">${obj.shape}</h2>
       <div class="pottery__properties">
           Item weighs ${obj.weight} grams and is ${obj.height} cm in height
       </div>
       <div class="pottery__price">
           Price is $${obj.price}
       </div>
    </section>`
    }
    return htmlPotteryList // returns htmlPotteryList
} 

