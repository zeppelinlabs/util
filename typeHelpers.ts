/* eslint-disable @typescript-eslint/no-explicit-any */

// https://stackoverflow.com/questions/67727394/extract-from-union-type-where-discriminator-is-also-a-union
type EnumToUnionMap<
    Enum extends string,
    Prop extends string,
    Union extends { [k in Prop]: Enum },
> = { [T in Enum]: Union extends infer U ? U extends { [k in Prop]: any } ? (
    T extends U[Prop] ? { [K in keyof U as Exclude<K, Prop>]: U[K] } : never
) : never : never }



type IsValidArg<T> = T extends object ? keyof T extends never ? false : true : true;

export type ArrayType<T extends any[]> = T extends (infer R)[] ? R : never;



interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> { }

type DeepReadonlyObject<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type DeepReadonly<T> =
    T extends (infer R)[] ? DeepReadonlyArray<R> :
    T extends Function ? T :
    T extends object ? DeepReadonlyObject<T> :
    T;
