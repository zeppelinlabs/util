export const flatten = <T>(list: T[][]): T[] => list.reduce((a, b) => a.concat(b), [])
