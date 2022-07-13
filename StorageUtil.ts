const storePrefix = "@"

const getAccessors = <T>(keyParam: string, storage: Storage, getInitial: () => T) => {
    const keyStorage = `${storePrefix}${keyParam}`
    const getter = (): T => {
        const content = storage[keyStorage]
        if (content) {
            return JSON.parse(content)
        } else {
            const value: T = getInitial()
            if (value) {
                storage[keyStorage] = JSON.stringify(value)
            }
            return value
        }
    }

    const setter = (content: T) => {
        storage[keyStorage] = JSON.stringify(content)
    }

    const deleter = () => {
        storage.removeItem(keyStorage)
    }

    return [getter, setter, deleter,] as const
}

// Example
export const [getSessionToken, setSessionToken, deleteSessionToken,] = getAccessors<string | null>(
    "session", localStorage, () => (null)
)
