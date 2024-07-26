const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);  
// arr2가 arr1를 얕은복사했기 때믄에 주소값만 공유하고 별도의 데이터는 없다.
//  => arr2를 변경하면 arr1도 바뀐다

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = obj1;
obj2.d = 4;
console.log(obj1);
console.log(obj2);