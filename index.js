/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];

    for(let char of s){
        if(stack.length > 0 && (stack[stack.length - 1].toLowerCase() === char.toLowerCase()) && (stack[stack.length - 1] != char)){
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};
