// 模块（module）体系：将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。如：Ruby 的require、Python 的import、CSS 都有@import，es5 CommonJS 和 AMD 服务器和浏览器
// CommonJS模块(es5)，输出的是值的缓存
let {
    stat,
    exists,
    readFile
} = require('fs'); // 加载模块生成对象，从对象上获取方法，为运行时加载，优点是可以动态加载（作为变量加载）
// ES6模块 ，输出的是动态更新的值
// import 输入其他模块的功能
import {
    stat,
    exists,
    readFile
} from 'fs'; // 编译时加载，静态加载
import 'lodash'; // 仅执行模块，不输入任何值
import * as circle from './circle'; // 导入整体
// export 规定模块的对外接口(暴露接口)  ，一个模块就是一个独立文件，外部想获取其文件需要用export输出，输出的变量可用 as 关键字重命名
export {}
export function a() {}
export const b = 1
export default function foo() { // 指定默认输出，import可以为该匿名函数指定任意名字(foo名字无效，视为匿名)，该命令唯一。实质输出一个叫做default的变量
    console.log('foo');
}
import customName from './export-default'; // 此时不用大括号
export { each as forEach };


/**
 * 小结：import _, { each, each as forEach } from 'lodash';
 * 
 */


// 模块继承：export * from 'circle';等  一般会用as重命名一下

// import()函数 使import可以在运行时加载，返回一个promise对象

// 循环加载
// a.js
var b = require('b');

// b.js
var a = require('a');