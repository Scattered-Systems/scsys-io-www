
import { Days } from '@/lib/types/datetime';

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
