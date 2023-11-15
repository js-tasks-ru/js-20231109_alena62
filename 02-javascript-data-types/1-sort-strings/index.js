/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    if (param === 'asc') 
    {
        return arr.toSorted((a, b) => a.localeCompare(b,  "ru-u-en-US", {caseFirst: 'upper'}))
    } 
    else 
    {   
        return arr.toSorted((a, b) => b.localeCompare(a,  "ru-u-en-US", {caseFirst: 'upper'}))
    }
}