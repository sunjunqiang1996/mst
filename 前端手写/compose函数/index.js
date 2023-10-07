
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((preVal, nowFn) => {
      return nowFn(preVal)
    }, x)
  }
}

function add1(x) {
  return x + 1
}

function add2(x) {
  return x + 2
}

const toRound = compose(Math.round, parseFloat)

const add4 = compose(add1, add2, add1)
console.log(add4(0));

console.log(toRound('4.4999'))
