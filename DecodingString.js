//"AAAABBBCCDAA" would be encoded as "4A3B2C1D2A"

function encode(str) {
    let ans = '';
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            ans = ans + count + str[i - 1];
            count = 1;
        }
    }
    return ans;
}

console.log(encode('AAAABBBCCDAA'));
console.log(encode('abcd'));
console.log(encode(''));
