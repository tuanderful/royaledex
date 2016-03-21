/**
 * Capitalize first letter of each word
 * @param  {string} str
 * @return {string}
 */
export function toProper(str) {
    return str.split('').map((c, index) => {
        if (str[index - 1] === ' ' || index === 0) {
            return c.toUpperCase();
        }
        return c;
    });
}
