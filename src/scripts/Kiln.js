// fires pottery objects at the kiln at given temperature
export const firePottery = (potteryObj, temp) => {
    potteryObj.fired = true // adds 'fired' property
    if (temp > 2200) {
        potteryObj.cracked = true // adds 'cracked' property with 'true' value
    } else {
        potteryObj.cracked = false // adds 'cracked' property with 'false' value
    }
    return potteryObj // returns object
}