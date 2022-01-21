const escapeRegExp = (text: string) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

export const replaceAll = (target: string, search: string, replacement: string) => {
    const escapedSearch = escapeRegExp(search)
    return target.replace(new RegExp(escapedSearch, "g"), replacement)
}
