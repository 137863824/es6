// 用途一，交换变量值
let x = 1;
let y = 2;
[x, y] = [y, x];
// 用途二：从函数返回多个值
function example1() {
    return [1, 2, 3];
}
let [a, b, c] = example1();

function example2() {
    return {
        foo: 100,
        bar: 200
    };
}
let {
    foo,
    bar
} = example2();
console.log(foo)
// 用途三：将一组参数与变量名对应起来 function f([x, y, z]) { ... } f([1, 2, 3]);
// 用途四：快速提取JSON数据    let { id, status, data: number } = jsonData;
// 最常见的变量解构   const { SourceMapConsumer, SourceNode } = require("source-map");