/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    let lastValue = ''
    let counter = 0;
    let result = ''

    if (size === undefined) {
        return string;
    }


    for (const i of string){

        if (i === lastValue){
            counter ++;
        } else {
            counter = 1;
        }
    
        if (counter <= size) {
            result += i;
          }
       
          lastValue = i;
        }
       
    return result;
      }



