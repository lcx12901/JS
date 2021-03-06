var a = {
    name: 'a',
    say: function () {
        console.log(this.name)
    }
} 

var b = a.say

b()
// this的执行环境决定打印什么
// b() 在window下执行，所以打印 undefined


// 百度面试题
function fn() {
  // window 的 length 值的是
  // iframe   节点个数
  console.log(this.length);   // undefined     iframe 节点个数没有
  
}
// fn();

var obj = {
  length: 5
}

var m = function() {
  console.log(this === obj); // bind  true
  // 
  fn ();  // 没有通过对象调用函数，还是直接调用函数，z还是在window环境下执行
  // window.fn();
  console.log(arguments); // 类数组对象 { '0': [Function: fn], '1': 1, '2': 2 }
  arguments[0]();  // fn()  === arguments.fn()                 3
  // arguments{ '0': [Function: fn], '1': 1, '2': 2 , 'length': 3}
  console.log(...arguments); // fn, 1, 2
  
}

var res = m.bind(obj);
res(fn, 1, 2)

// this的优先级
function foo(a) {
  this.a = a;
  console.log(this.a);
  
}
foo('我是传进去的实参')

// new > apply/bind/call

// 如何实现一个私有变量，用getName方法可以访问，不能直接访问
// 1 使用defineProperty监听对象的属性，并且配置为不可枚举不可配置
obj = {
  name: 'ziyin',
  getName:function () {
    return this.name
  }
}

Object.defineProperty(obj, 'name', {
  //不可枚举不可配置
})
console.log(obj.name);
console.log(obj.getName());

// 2 
function product() {
  name: 'ziyin',
  this.getName = function () {
    return name
  }
}

var obj = new product()
// console.log(obj.name);
console.log(obj.getName());








