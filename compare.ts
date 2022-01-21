export const compare = <T>(getKey: (a: T) => string | number) => (a: T, b: T) => {
    if (getKey(a) < getKey(b)) {
        return -1
    }
    if (getKey(a) > getKey(b)) {
        return 1
    }
    return 0
}