let arr = [];
let amountElements = parseInt(prompt('Enter amount of elements'));

for(let i = 0; i < amountElements; i++) {
let digit = parseInt(prompt('Enter digit #' + (i + 1)));
arr.push(digit);
}
document.write(arr);
//______________________________________________________
function compare(a, b) {
    return a - b;
  }
document.write("<p>" + arr.sort(compare) + "</p>");
//______________________________________________________
arr.splice(1,3);
document.write("<p>" + arr + "</p>");


