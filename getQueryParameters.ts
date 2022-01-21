type URLSearchParams = {
    new(init?: string): { get(name: string): string, },
}

export const getQueryParameters
    = (urlSearchParams: URLSearchParams) => <keys extends string>(search: string, values: keys[])
        : { [key in keys]: string } => {
        const urlParams = new urlSearchParams(search)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ret: { [key in keys]: string } = {} as any

        values.forEach(v => {
            ret[v] = urlParams.get(v)
        })

        return ret
    }
