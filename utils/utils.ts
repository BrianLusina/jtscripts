/* eslint-disable no-unused-vars */
export function add(x: string, y: string): string;
export function add(x: number, y: number): number;
export function add<T>(x: T, y: T): number;

export function add(x: any, y: any): any {
  return x + y;
}