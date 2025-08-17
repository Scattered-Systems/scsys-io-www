/**
 * Created At: 2025.08.17:14:09:47
 * @author - @FL03
 * @file - core.ts
 */

/** A generic type for making a type _nullish_; i.e. may be undefined or null. */
export type Nullish<T = unknown> = T | null | undefined;

export type SetAction<T> = T | ((prev: T) => T);

export type ChangeHandler<T> = (value: SetAction<T>) => void;

export type Url = import("url").UrlObject | string;
