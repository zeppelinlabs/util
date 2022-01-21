export const generatePages = <T>(data: T[], itemsPerPage: number): T[][] => {
    const ret: T[][] = []
    const elements = itemsPerPage
    const numberOfPages = Math.ceil(data.length / elements)
    for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
        ret.push(data.slice(pageNumber * elements, (pageNumber + 1) * elements))
    }
    return ret
}

