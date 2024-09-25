import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// export const cn = (...inputs: ClassValue[]) => twMerge(clsx());
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
