export const randomFromInterval = (min: number, max: number) => {
    return Math.random() * (max - min) + min
}

/**
    Max is not included in the output
*/
export const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(randomFromInterval(min, max))
}

