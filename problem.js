// 1
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) { // false内的变量声明执行了
    var tmp = 'hello world';
  }
}

f(); // undefined