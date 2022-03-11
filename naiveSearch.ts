type FilterType = (text: string) => string;
type PipelineType = FilterType[];
type Params = {
    caseSensitive?: boolean,
    spaces?: boolean,
    accents?: boolean
}

const searchInString = (txt: string, pat: string) => {
    let M = pat.length;
    let N = txt.length;

    for (let i = 0; i <= N - M; i++) {
        let j;

        for (j = 0; j < M; j++)
            if (txt[i + j] != pat[j])
                break;

        if (j == M)
            return true;
    }
    return false;
}

const addFilter = (pipeline: PipelineType, filter: FilterType) => {
    pipeline.push(filter)
}

const buildPipeline = (pipeline: PipelineType, params: Params) => {
    if(params.caseSensitive !== undefined && !params.caseSensitive) {
        addFilter(pipeline, (text) => text.toLowerCase());
    }
    if(params.spaces !== undefined && !params.spaces) {
        addFilter(pipeline, (text) => text.replace(" ", ""))
    }
    if(params.accents !== undefined && !params.accents) {
        addFilter(pipeline, (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    }
}

const runPipeline = (pipeline: PipelineType, text: string) => {
    pipeline.forEach(filter => text = filter(text))
    return text;
}

export const search = (list: string[], pat: string, params: Params = {caseSensitive: true, spaces: true, accents: true}) => {
    let pipeline = []
    buildPipeline(pipeline, params);
    pat = runPipeline(pipeline, pat);
    return list.filter(elem => searchInString(runPipeline(pipeline, elem), pat))
}
