export type ObjDictionary<K extends keyof any, T> = {
    [a in K]: T
}

export const toDictionary = <T, K extends keyof any>(data: T[], getKey: (o: T) => K) => {
    return data.reduce((acc, curr) => {
        const key = getKey(curr)
        if (key) {
            acc[key] = curr
        }
        return acc
    }, {} as ObjDictionary<K, T>)
}

export const toDictionaryMap = <T, K extends keyof any, R>(
    data: T[],
    { key: getKey, value: getValue, }: { key: (o: T) => K, value: (o: T) => R }
) => {
    return data.reduce((acc, curr) => {
        const key = getKey(curr)
        if (key) {
            acc[key] = getValue(curr)
        }
        return acc
    }, {} as ObjDictionary<K, R>)
}
