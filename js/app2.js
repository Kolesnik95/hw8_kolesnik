let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
document.write(arr);


//a. Найти сумму и количество положительных элементов._________________________
let sum = 0;
let amount = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        sum = sum + arr[i];
        amount = amount +1;
    }
}
document.write("<p>" + 'sum: ' + sum + "</p>");
document.write("<p>" + 'positive: ' + amount + "</p>");


//b.Найти минимальный элемент массива и его порядковый номер._____________________________
// let minimum = arr[0];
// let index = 0;
// for(let i = 0 ; i < arr.length; i++)
// {   if(arr[i] < minimum){ 
//     minimum = arr[i];
//     index = i;
//     }
// }
// document.write("<p>" + 'min: ' + minimum + "</p>"); 
// document.write("<p>"+ 'index: ' + index + "</p>"); 


// //c.Найти максимальный элемент массива и его порядковый номер.___________________________________
// let max = arr[0];
// let index = 0;
// for(let i = 0 ; i < arr.length; i++)
// {   if(arr[i] > max){ 
//     max = arr[i];
//     index = i;
//     }
// }
// document.write("<p>" + 'max: ' + max + "</p>"); 
// document.write("<p>"+ 'index: ' + index + "</p>"); 


// //d.Определить количество отрицательных элементов.____________________________________
// let quantity = 0;
// for(let i = 0 ; i < arr.length; i++){   
//     if(arr[i] < 0){ 
//     quantity= quantity + 1;
//     }
// }
// document.write("<p>" + 'quantity negative: ' + quantity + "</p>"); 


// e.Найти количество нечетных положительных элементов.___________________________
// h.Найти сумму нечетных положительных элементов.
// let N = 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (!(arr[i]%2 == 0) && (arr[i] > 0)){
//         N = N + 1;
//         sum = sum + arr[i];
//     }
// }
// document.write("<p>" + 'количество нечетных положительных элементов: ' + N + "</p>");
// document.write("<p>" + 'сумма нечетных положительных элементов: ' + sum + "</p>");


// f.Найти количество четных положительных элементов._______________
// g.Найти сумму четных положительных элементов.
// let N = 0;
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2 == 0 && arr[i] > 0){
//         N = N + 1;
//         sum = sum + arr[i];
//     }
// }
// document.write("<p>" + 'количество четных положительных элементов: ' + N + "</p>");
// document.write("<p>" + 'сумма четных положительных элементов: ' + sum + "</p>");


// i.Найти произведение положительных элементов.____________________
// let multiplication = 1;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         multiplication = multiplication * arr[i];
//     }
// }
// document.write("<p>" + 'произведение положительных элементов: ' + multiplication + "</p>");


// j.Найти наибольший среди элементов массива, остальные обнулить__________
// let max = arr[0];
// for(let i = 0 ; i < arr.length; i++)
// {   if(arr[i] > max){ 
//         max = arr[i];
//     } if(arr[i] !== max){
//         arr[i] = 0;
//     }
// }
// for(let i = 0 ; i < arr.length; i++)
// {   if(arr[i] !== max){
//         arr[i] = 0;
//     }
// }
// document.write("<p>" + 'наибольший среди элементов массива: ' + max + "</p>"); 
// document.write("<p>" + 'обнуленный массив: ' + arr + "</p>"); 




