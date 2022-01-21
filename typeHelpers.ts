/* eslint-disable @typescript-eslint/no-explicit-any */

export type UnpackedPromise<T> =
    T extends Promise<infer U> ? U :
    T;

type IsValidArg<T> = T extends object ? keyof T extends never ? false : true : true;

export type ArrayType<T extends any[]> = T extends (infer R)[] ? R : never;

export type ArgumentsOf<T extends Function> =
    // based on https://stackoverflow.com/a/50774825
    (
        T extends (
            a: infer A, b: infer B, c: infer C,
            d: infer D, e: infer E, f: infer F,
            g: infer G, h: infer H, i: infer I,
            j: infer J) => any
        ? (
            IsValidArg<J> extends true ? [A, B, C, D, E, F, G, H, I, J] :
            IsValidArg<I> extends true ? [A, B, C, D, E, F, G, H, I] :
            IsValidArg<H> extends true ? [A, B, C, D, E, F, G, H] :
            IsValidArg<G> extends true ? [A, B, C, D, E, F, G] :
            IsValidArg<F> extends true ? [A, B, C, D, E, F] :
            IsValidArg<E> extends true ? [A, B, C, D, E] :
            IsValidArg<D> extends true ? [A, B, C, D] :
            IsValidArg<C> extends true ? [A, B, C] :
            IsValidArg<B> extends true ? [A, B] :
            IsValidArg<A> extends true ? A :
            never
        ) : never
    );





interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> { }

type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type DeepReadonly<T> =
    T extends (infer R)[] ? DeepReadonlyArray<R> :
    T extends Function ? T :
    T extends object ? DeepReadonlyObject<T> :
    T;