export const mapAsync
    = async <T, R>(
        items: T[] | ReadonlyArray<T>,
        f: (p: T, i: number) => Promise<R>
    ): Promise<R[]> => {
        const ret: R[] = []

        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < items.length; index++) {
            const element = items[index]
            ret.push(await f(element, index))
        }

        return ret
    }
