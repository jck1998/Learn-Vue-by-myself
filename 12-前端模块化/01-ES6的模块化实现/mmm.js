//想用其他文件的变量就要导入
//第一种导入方式:导入{}中定义的变量
import {flag,sum} from "./aaa.js";

if (flag){
  console.log('小明是天才，我想用我自己的flag');
  console.log(sum(100, 200));
}
//第二种导入方式：直接导入export定义的变量
import {num,height} from "./aaa.js";
console.log(num);
console.log(height);

//第三种导入方式：导入export的function/class
import {mul,Person} from "./aaa.js"

console.log(mul(30, 20));

const p=new Person();
p.run()

//4.第四种导入方式：命名随意(default只能定义一个)不用{}了
import addr from "./aaa.js"

console.log(addr);

//5.第五种导入：统一全部导入
//太多不建议按底下这么写
// import {flag,num,num1,height,Person,mul,sum} from "./aaa.js"

import * as aaa from './aaa.js'

console.log(aaa.flag);
console.log(aaa.height);

