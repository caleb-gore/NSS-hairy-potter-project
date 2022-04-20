// sets starting id nuber at 1
let primaryKey = 1

// makes individual pottery object
export const makePottery = (shape, weight, height) => {
    return {  // returns pottery object
        shape:shape,
        weight: weight,
        height: height,
        id: primaryKey++ // iterates 'primaryKey' after each time it's run
    }
} 