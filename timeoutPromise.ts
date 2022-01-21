/* eslint-disable @typescript-eslint/promise-function-async */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;


export const timeoutPromise = (timeout: number) => {
    return new Promise<void>((resolve, _reject) => {
        setTimeout(resolve, timeout)
    })
}