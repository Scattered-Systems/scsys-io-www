/*
  Appellation: types <module>
  Contrib: FL03 <jo3mccain@icloud.com>
*/
export * from './datetime';


export type Nullish<T = unknown> = T | null | undefined;

export type SetAction<T> = T | ((prev: T) => T);

export type ChangeHandler<T> = (value: SetAction<T>) => void;

export type Url = import("url").UrlObject | string;