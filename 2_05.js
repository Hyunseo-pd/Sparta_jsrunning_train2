
//해당 문제를 forEach로 변경하여 풀어주세요
var arr=  [10, 20, 30] 

// 해당 로직을 작성하세요  
var newArr = [];
arr.forEach(function (x) {
    newArr.push(x *10);
});
console.log(newArr);

// 결과 값: [100, 200, 300] 출력해주세요 

var arr=  [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

let foundNumber = [];
arr.forEach(function(number) {
    if (number % 5 === 0) {
        foundNumber.push(number);
    }
});
console.log(foundNumber);


// 결과값 [10]
