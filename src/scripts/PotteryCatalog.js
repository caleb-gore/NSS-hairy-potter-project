// creates empty array to hold pottery objects for sale
let potteryToSell = []

// creates function to price pottery objects based on values of 'cracked' and 'weight'
export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) { // proceeds only if pottery is not cracked
        if (potteryObj.weight >= 6) {  // prices item at 40 and pushed to array if weight is >= 6
            potteryObj.price = 40 
            potteryToSell.push(potteryObj)
        } else if (potteryObj.weight < 6) { // prices at 20 and pushed to array if weight < 6
            potteryObj.price = 20
            potteryToSell.push(potteryObj)
        }
    }
    return potteryObj // returns changed pottery object
}


export const usePottery = () => { // makes copy of potteryToSell array
    return potteryToSell.map(potteryToSell => ({ ...potteryToSell }))
}

