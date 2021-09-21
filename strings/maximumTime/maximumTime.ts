/**
 * Finds the maximum time from a given string time in the format hh:mm.
 *
 * Maximum hour depends on both hour digits
 * - If we see ?x, there are 2 possibilities:
 *  1. x is ?, i.e. between 0-3, then max is 23
 *  2. x > 3, then max is 1x, e.g x=8, max hour is 18, not 28
 * - If we see x?, then there are 2 possibilities:
 *  1. x is 2, then max is 23
 *  2. x is 0-1, then max hour digits are x9
 *
 * The max minute is always 59.
 * @param time - The time to create maximum time from. Comes in the format 'hh:mm'
 * @returns - The maximum time of the day
 */
export default function maximumTime(time: string): string {
    const [hh, mm] = time.split(':')
    const hours = hh.split('')
    const minutes = mm.split('')

    if (hours[0] === '?') { hours[0] = parseInt(hours[1], 10) > 3 ? '1' : '2'}
    if (hours[1] === '?') { hours[1] = hours[0] === '2' ? '3' : '9' }
    if (minutes[0] === '?') { minutes[0] = '5' }
    if (minutes[1] === '?') { minutes[1] = '9' }

    return `${hours[0]}${hours[1]}:${minutes[0]}${minutes[1]}`
}
