

export const filterWithValue = <T>(arr: (T | null | undefined)[]): T[] => {
    return arr.filter(t => t !== null && t !== undefined) as T[]
}

export const filterTruthy = <T>(arr: T[]): Exclude<T, false | undefined | null | "" | 0>[] => {
    return arr.filter(Boolean) as Exclude<T, false | undefined | null | "" | 0>[]
}