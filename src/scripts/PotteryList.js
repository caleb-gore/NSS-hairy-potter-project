import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = (potteryArr) => {
    let htmlPotteryList = ""
    for (const obj of potteryArr) {   
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
return htmlPotteryList
} 