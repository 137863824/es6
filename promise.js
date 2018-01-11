// promise对象是一个构造函数 异步编程解决方案       传统解决方案：回调和事件
/**
 * 里面保存着某个未来才会结束的事件，代表一个异步操作
 * 有三种状态：pending进行中，fulfilled已成功，rejected已失败。只有结果才能改变状态
 * 与事件的区别，改变发生了，再对promise添加回调，也能得到这个改变的结果
 */



//  1、生成promise实例，并会立即执行
const promise = new Promise(function (resolve, reject) { // resolve,reject也是函数，将结果作为参数传递出去
    // ... some code

    if ( /* 异步操作成功 */ ) {
        return resolve(value);  // 此value为实参
    } else {
        return reject(error);
    }
});
// 2、指定回调，该回调为异步
promise.then(function (value) { // 此value为形参
    // success
}, function (error) {
    // failure
});  // 或者
promise.then(result => console.log(result)).catch(error => console.log(error))

// Promise.resolve() Promise.reject() 将现有对象转为 Promise 对象

asyncFunc()
.then(f1)
.catch(r1)
.then(f2)
.done(); // 保证错误都能抛出
.finally() // 不管何种状态都会执行的回调

// 应用：加载图片

// 同步异步通用写法
// 1、立即执行表达式 (async () => f())().then(...).catch(...)
// 2、立即执行的promise 
// (
//   () => new Promise(
//     resolve => resolve(f())
//   )
// )();
// 用Promise.try(f);表示