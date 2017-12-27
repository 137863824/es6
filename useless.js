let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
// ================================================
let c = 'x'.repeat(3) // "xxx"
// ================================================
let d = 'x'.padStart(5, 'ab') // 'ababx'
let e = 'x'.padEnd(5, 'ab') // 'xabab'
// 用途一：补全指定位数
// 用途二：提示字符串格式
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
// =====================================================