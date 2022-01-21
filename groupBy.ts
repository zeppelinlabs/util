export type ObjGroup<T> = {
    [a: string]: T[],
}

export const GroupBy = <T>(data: T[], getKey: (o: T) => string) => {
    return data.reduce<ObjGroup<T>>((acc, curr) => {
        const key = getKey(curr)
        if (key) {
            if (acc[key]) {
                acc[key].push(curr)
            } else {
                acc[key] = [curr,]
            }
        }
        return acc
    }, {})
}

export const GroupByList = <T>(data: T[], getKey: (o: T) => string) => {
    const order: string[] = []
    const dict = data.reduce<ObjGroup<T>>((acc, curr) => {
        const key = getKey(curr)
        if (key) {
            if (acc[key]) {
                acc[key].push(curr)
            } else {
                acc[key] = [curr,]
                order.push(key)
            }
        }
        return acc
    }, {})

    return order.map(i => {
        return {
            key: i,
            values: dict[i],
        }
    })
}