// 函数执行的时候，先执行函数参数，然后再执行函数体
// 函数参数可有默认值,即已申明，不能再次申明。指定默认值后其length将失真
function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello') // Hello World
// 用途一=====================================================
// 指定某一个参数不得省略，如果省略就抛出一个错误
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

foo()
// ===================================================
// rest 参数 代表接收无数个参数  ...变量名 只能是函数最后一个参数  length失效
//  函数的name属性为改函数的函数名


// 箭头函数，不可作为构造函数，this绑定定义时所在的作用域，因为箭头函数没有this
// 用法一
const f1 = v => v;
var f2 = function (v) {
    return v;
};
const sum1 = (num1, num2) => num1 + num2;
var sum2 = function (num1, num2) {
    return num1 + num2;
};
// 箭头后只有表达式即return这个表达式,常用语定义工具函数

// 双冒号运算符::将左边的对象（参数）绑定到右边的函数上

// 尾递归
function factorial1(n) {
    if (n === 1) return 1;
    return n * factorial1(n - 1);
}
factorial1(5) // 120

function factorial2(n, total) {
    if (n === 1) return total;
    return factorial2(n - 1, n * total);
}

factorial2(5, 1) // 120