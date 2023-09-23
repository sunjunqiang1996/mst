/**
 * call  this ， args1, args2...
 * rerurn func(args1, args2...)
 */

Function.prototype.myCall = function() {
  const theThis = arguments[0] || globalThis // window、global
  const args = Array.from(arguments).slice(1) // 拿到传入的其他参数
  const thisFunc = this
  let key = '_1'
  while(true) {
    if (theThis.hasOwnProperty(key)) {
      key += 1
    } else {
      theThis[key] = thisFunc
      break
    }
  }
  const res = theThis[key](...args)
  delete theThis[key]
  return res
}

/**
 * allpy  this ， [args1, args2...]
 * rerurn func(..[args1, args2...])
 */

 Function.prototype.myApply = function() {
  const theThis = arguments[0] || globalThis // window、global
  const args = arguments[1] || [] // 拿到传入的其他参数
  const thisFunc = this
  let key = '_1'
  while(true) {
    if (theThis.hasOwnProperty(key)) {
      key += 1
    } else {
      theThis[key] = thisFunc
      break
    }
  }
  const res = theThis[key](...args)
  delete theThis[key]
  return res
}

/**
 * bind this,args1, args2...
 * return function
 */
Function.prototype.myBind = function() {
  const theThis = arguments[0] || globalThis // window、global
  const args = Array.from(arguments).slice(1) // 拿到传入的其他参数
  const thisFunc = this
  const func = () => {
    // thisFunc.myCall(theThis, ...args)
    return thisFunc.myApply(theThis, args)
  }
  return func
}

const obj = {
  name: 'www',
  age: 30
}
function sayName(name) {
  console.log(`你好 ${name}, 你 ${this.age} 岁了`)
}

console.log(sayName.myCall(obj, 'eee1'))
console.log(sayName.myApply(obj, ['eee2']))
console.log(sayName.myBind(obj, 'eee3')())
