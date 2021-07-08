var name='小明'
var age=22
var flag=true

function sum(num1,num2){
  return num1+num2
}

if (flag){
  console.log(sum(20, 30));
}

//如果别的文件想访问本文件定义的某些变量那就在这个文件导出其他文件想导入的变量
//1.导出方式一：
export {
  flag,sum
}

//2.导出方式二：
export var num=100;
export var height=1.75


//3.导出函数/类
export function mul(num1,num2) {
  return num1*num2
}

export class Person {
  run(){
    console.log('在奔跑！！！！！');
  }
}

//4.export default
const address='石家庄市'
export default address

