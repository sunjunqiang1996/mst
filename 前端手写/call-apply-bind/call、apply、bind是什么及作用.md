#### call、apply、bind是什么及作用

​	call、apply、bind是js中改变this指向的Function中的三个方法

#### call的使用

​	call 的第一个参数是this指向的对象， 非严格模式下null、undefined将会指向全局的对象

​	后面的参数分别是调用此方法传入的参数

#### apply的使用

​	apply接受两个参数，第一个参数是this指向的对象，非严格模式下null、undefined将会指向全局的对象

​	第二个参数是一个数组，这个数组逐个传入调用此方法的函数当中

#### bind的使用

​	bind方法返回一个this值指向传入第一个对象的函数

​	后面的参数依次是调用此方法传入的参数

#### this指向性问题

	1. 如果在普通函数当中this指向的是window/global， 谁调指谁
	1. 如果在箭头函数当中this指向的是，函数在定义作用域中的this
	1. this在对象的方法中指向此对象
	1. this在构造函数当中，指向的是新创建的这个对象
	1. call、apply、bind指向的是我们传入的这个对象









