// 1
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) { // false内的变量声明执行了
    var tmp = 'hello world';
  }
}

f(); // undefined
// 解决：if块内声明的变量会被提升到函数头部
// var tmp = 'hello world';
// if (false) { // false内的变量声明执行了
//   var tmp = 'hello world';
// }
// ========================================
let x = do {
  let t = f();
  t * t + 1;
};
//do语句不对
// ========================================
// 写法一
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
func('Jack') // "Hello Jack!"

// 写法二
let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
func('Jack') // "Hello Jack!"
// =============================================
// 如何通过模板字符串，生成正式模板，如何封住一个模板