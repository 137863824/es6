for (let i = 0; i < 3; i++) { // i为父作用域
  let i = 'abc'; // i为子作用域
  console.log(i);
}
// abc
// abc
// abc
let a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

let s = 10 
{
  let s = 1
  console.log(s) // 1
}
console.log(s) // 10

// let: 1、同一个作用域内不能多次定义（禁止重复申明）。2、作用域限制（暂时性死区）。3、先定义后使用（禁止变量提升）

