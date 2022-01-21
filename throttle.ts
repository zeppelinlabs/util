/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-negated-condition */

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): number;
declare function clearTimeout(timeoutId: number): void;

export const throttle
    = <T>(func: T, limit: number, margin: number = 0,
        // debug: boolean = false, id: string = ""
    ): T => {



        let inThrottle: boolean
        let lastFunc: number
        let lastRan: number

        // const log = debug ? (s: string) => console.log("[throttle] " + id + " " + s) : (): void => void (0)

        return function (...p: any[]) {
            // var context = this,
            // args = arguments;
            if (!inThrottle) {
                // log("fist run");
                (func as any)(...p)
                // func.apply(context, args);
                lastRan = Date.now()
                inThrottle = true
            } else {
                clearTimeout(lastFunc)
                if ((Date.now() - lastRan) >= limit - margin) {
                    // log("direct run, margin"
                    //     + ((Date.now() - lastRan) >= limit - margin && !((Date.now() - lastRan) >= limit)));
                    (func as any)(...p)
                    // func.apply(context, args)
                    lastRan = Date.now()
                    // inThrottle = false
                } else {
                    // log("throttled");
                    // tslint:disable-next-line:only-arrow-functions
                    lastFunc = setTimeout(() => {
                        if ((Date.now() - lastRan) >= limit) {
                            // log("timeout run");
                            (func as any)(...p)
                            // func.apply(context, args)
                            lastRan = Date.now()
                            // inThrottle = false
                        }
                    }, limit - (Date.now() - lastRan))
                }
            }
        } as any
    }

