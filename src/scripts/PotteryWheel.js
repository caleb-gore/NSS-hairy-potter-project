let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    return {
        shape:shape,
        weight: weight,
        height: height,
        id: primaryKey++
    }
} 