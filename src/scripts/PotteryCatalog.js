let potteryToSell = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    } else {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false) {
        potteryToSell.push(potteryObj)
    }
}

export const usePottery = () => {
   return potteryToSell.map(potteryToSell => ({...potteryToSell}))
} 

