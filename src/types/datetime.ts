/*
    Appellation: days <types>
    Contrib: @FL03
*/

export type Day =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sun'
  | 'Mon'
  | 'Tue'
  | 'Wed'
  | 'Thu'
  | 'Fri'
  | 'Sat';

export type Timestampz = Date | number | string;

export enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export const isDay = (day: number): day is Days => {
  return Object.values(Days).includes(day as Days);
};

export const stringToDay = (day: string): Days | null => {
  switch (day.toLowerCase()) {
    case 'sunday':
      return Days.Sunday;
    case 'monday':
      return Days.Monday;
    case 'tuesday':
      return Days.Tuesday;
    case 'wednesday':
      return Days.Wednesday;
    case 'thursday':
      return Days.Thursday;
    case 'friday':
      return Days.Friday;
    case 'saturday':
      return Days.Saturday;

    default:
      return null;
  }
};
