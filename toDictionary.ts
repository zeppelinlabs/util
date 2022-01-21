export type ObjDictionary<T> = {
    [a: string]: T,
}
export const toDictionary = <T>(data: T[], getKey: (o: T) => string) => {
    return data.reduce<ObjDictionary<T>>((acc, curr) => {
        const key = getKey(curr)
        if (key) {
            acc[key] = curr
        }
        return acc
    }, {})
}