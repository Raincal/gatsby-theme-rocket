---
title: "10 个可用 ES6 替代的 Lodash 特性"
path: "lodash"
date: "2016-06-30"
tags: [lodash]
---

> 本文转载自：[众成翻译](http://www.zcfy.cc)
> 译者：[少年阿布DX](http://www.zcfy.cc/@shawndai06)
> 链接：<http://www.zcfy.cc/article/467>
> 原文：<https://www.sitepoint.com/lodash-features-replace-es6/>

[Dan Prince](https://www.sitepoint.com/author/dprince/)

_本文由 [Mark Brown](https://www.sitepoint.com/author/mbrown) 协助审查。感谢所有 SitePoint 的审稿人使 SitePoint 的内容能达到最佳_。

[Lodash](https://lodash.com/) 现在是 npm 上[被依赖最多的包](https://www.npmjs.com/browse/depended)，但如果你在使用 ES6 的话，实际上你可能不再需要它了。在本文中，我们将使用原生的集合方法与箭头函数还有一些其它新的特性来帮我们更简便地实现许多热门的用例。

## 1. Map, Filter, Reduce

这些集合方法使数据转化变得轻而易举。由于普遍地对此特性的支持，我们可以将它与箭头函数组合起来，以助我们使用比 Lodash 的实现更简便的方法来实现。

```javascript
_.map([1, 2, 3], function(n) { return n * 3; });
// [3, 6, 9]
_.reduce([1, 2, 3], function(total, n) { return total + n; }, 0);
// 6
_.filter([1, 2, 3], function(n) { return n <= 2; });
// [1, 2]

// 变为

[1, 2, 3].map(n => n * 3);
[1, 2, 3].reduce((total, n) => total + n);
[1, 2, 3].filter(n => n <= 2);
```

不止于此，如果我们使用 ES6 的 polyfill，我们也能使用 [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)、[some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)、[every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 和 [reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

<!-- more -->

## 2. Head & Tail

[解构语法](https://www.sitepoint.com/preparing-ecmascript-6-destructuring-assignment/) 让我们可以获取一个列表的头（head）和尾（tail），而无需工具函数。

```javascript
_.head([1, 2, 3]);
// 1
_.tail([1, 2, 3]);
// [2, 3]

// 变为

const [head, ...tail] = [1, 2, 3];
```

也可以用相似的方式获得列表最后一个元素（last）以及除其之外的元素（initial）

```javascript
_.initial([1, 2, 3]);
// -> [1, 2]
_.last([1, 2, 3]);
// 3

// 变为

const [last, ...initial] = [1, 2, 3].reverse();
```

如果你讨厌 [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 会改变数据结构，那你可以在调用 reverse 之前使用延展操作符（spread operator）来复制一个数组。

```javascript
const xs = [1, 2, 3];
const [last, ...initial] = [...xs].reverse(); 
```

## 3. Rest & Spread

[rest](https://lodash.com/docs#rest) 和 [spread](https://lodash.com/docs#spread) 函数能让我们定义与调用能接受参数数量不定的函数。ES6 为这两种操作引入了专用的语法。

```javascript
var say = _.rest(function(what, names) {
  var last = _.last(names);
  var initial = _.initial(names);
  var finalSeparator = (_.size(names) > 1 ? ', & ' : '');
  return what + ' ' + initial.join(', ') +
    finalSeparator + _.last(names);
});

say('hello', 'fred', 'barney', 'pebbles');
// "hello fred, barney, & pebbles"

// 变为

const say = (what, ...names) => {
  const [last, ...initial] = names.reverse();
  const finalSeparator = (names.length > 1 ? ', &' : '');
  return `${what} ${initial.join(', ')} ${finalSeparator} ${last}`;
};

say('hello', 'fred', 'barney', 'pebbles');
// "hello fred, barney, & pebbles"
```

## 4. Curry

如果没有更高级的语言如 [TypeScript](http://www.typescriptlang.org) 和 [Flow](http://flowtype.org/) 的支持，我们不能给函数设置类型签名，这使得函数的[柯里化](https://www.sitepoint.com/currying-in-functional-javascript/)（currying）非常困难。当我们接收一个柯里化的函数时，很难知道已经应用了多少参数以及我们接下来该提供什么参数。通过箭头函数，我们能显示地定义柯里化函数，使得它们对其他程序员来说非常易于理解。

```javascript
function add(a, b) {
  return a + b;
}
var curriedAdd = _.curry(add);
var add2 = curriedAdd(2);
add2(1);
// 3

// 变为

const add = a => b => a + b;
const add2 = add(2);
add2(1);
// 3
```

这些显式的柯里化箭头函数对调试非常重要。

```javascript
var lodashAdd = _.curry(function(a, b) {
  return a + b;
});
var add3 = lodashAdd(3);
console.log(add3.length)
// 0
console.log(add3);
//function wrapper() {
//  var length = arguments.length,
//  args = Array(length),
//  index = length;
//
//  while (index--) {
//    args[index] = arguments[index];
//  }…

// 变为

const es6Add = a => b => a + b;
const add3 = es6Add(3);
console.log(add3.length);
// 1
console.log(add3);
// function b => a + b 
```

如果我们使用函数式的库如 [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) 和 [ramda](http://ramdajs.com)，那我们也能使用箭头函数来免除对自动柯里化风格的需要。

```javascript
_.map(_.prop('name'))(people);

// 变为

people.map(person => person.name); 
```

## 5. Partial

正如柯里化一样，我们也能使用箭头函数来简化显式化偏函数用法。

```javascript
var greet = function(greeting, name) {
  return greeting + ' ' + name;
};

var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// "hello fred"

// 变为

const sayHelloTo = name => greet('hello', name);
sayHelloTo('fred');
// "hello fred"
```

我们也能结合剩余参数与延展操作符来部分地应用可变参数函数、

```javascript
const sayHelloTo = (name, ...args) => greet('hello', name, ...args);
sayHelloTo('fred', 1, 2, 3);
// "hello fred" 
```

## 6. Operators

Lodash 把很多句法操作符重新实现成了函数，所以它们可以被传入集合方法。

在大多数情况下，箭头函数能让它们定义地足够简单精炼，一行足矣。

```javascript
_.eq(3, 3);
// true
_.add(10, 1);
// 11
_.map([1, 2, 3], function(n) {
  return _.multiply(n, 10);
});
// [10, 20, 30]
_.reduce([1, 2, 3], _.add);
// 6

// 变为

3 === 3
10 + 1
[1, 2, 3].map(n => n * 10);
[1, 2, 3].reduce((total, n) => total + n); 
```

## 7. Paths

许多 Lodash 的函数把路径当做字符串或者数组。然而我们可以使用箭头函数来创建更多可重用的路径。

```javascript
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };

_.at(object, ['a[0].b.c', 'a[1]']);
// [3, 4]
_.at(['a', 'b', 'c'], 0, 2);
// ['a', 'c']

// 变为

[
  obj => obj.a[0].b.c,
  obj => obj.a[1]
].map(path => path(object));

[
  arr => arr[0],
  arr => arr[2]
].map(path => path(['a', 'b', 'c']));
```

因为这些路径“只是函数”，所以我们也能复合它们。

```javascript
const getFirstPerson = people => people[0];
const getPostCode = person => person.address.postcode;
const getFirstPostCode = people => getPostCode(getFirstPerson(people));
```

我们甚至能创建更高阶能接收参数的路径。

```javascript
const getFirstNPeople = n => people => people.slice(0, n);

const getFirst5People = getFirstNPeople(5);
const getFirst5PostCodes = people => getFirst5People(people).map(getPostCode); 
```

## 8. Pick

[pick](https://lodash.com/docs#pick) 工具能让我们从一个对象中选择我们想要的属性。我们也能通过解构与对象字面量简写来获取同样的结果。

```javascript
var object = { 'a': 1, 'b': '2', 'c': 3 };

return _.pick(object, ['a', 'c']);
// { a: 1, c: 3 }

// 变为

const { a, c } = { a: 1, b: 2, c: 3 };

return { a, c }; 
```

## 9. Constant, Identity, Noop

Lodash 提供了一些工具函数来创建简单的具某一特定行为的函数。

```javascript
_.constant({ 'a': 1 })();
// { a: 1 }
_.identity({ user: 'fred' });
// { user: 'fred' }
_.noop();
// undefined
```

我们也能使用箭头函数行内定义这些函数。

```javascript
const constant = x => () => x;
const identity = x => x;
const noop = () => undefined;
```

或者我们也能把上面的例子重写为：

```javascript
(() => ({ a: 1 }))();
// { a: 1 }
(x => x)({ user: 'fred' });
// { user: 'fred' }
(() => undefined)();
// undefined
```

## 10. Chaining & Flow

Lodash 提供了一些函数来帮我们编写链式的语句。在大多情况下，内置的集合函数会返回一个数组实例，能直接被链式调用。但某些情况下，这些方法会改变这个集合，这样就不可能再直接地链式调用了（译者注：需要自己返回实例）。

然而我们也能以一个箭头函数数组来定义同样的转化。

```javascript
_([1, 2, 3])
 .tap(function(array) {
   // 修改输入函数
   array.pop();
 })
 .reverse()
 .value();
// [2, 1]

// 变为

const pipeline = [
  array => { array.pop(); return array; },
  array => array.reverse()
];

pipeline.reduce((xs, f) => f(xs), [1, 2, 3]);
```

这样的话，我们甚至不需要去思考 [tap](https://lodash.com/docs#tap) 和 [thru](https://lodash.com/docs#thru) 的不同。把这个归约包装成工具函数能创造出一个非常有用的多功能工具。

```javascript
const pipe = functions => data => {
  return functions.reduce(
    (value, func) => func(value),
    data
  );
};

const pipeline = pipe([
  x => x * 2,
  x => x / 3,
  x => x > 5,
  b => !b
]);

pipeline(5);
// true
pipeline(20);
// false
```

## 总结

Lodash 仍然还是一个非常优秀的库，这篇文章只提供了一个新鲜的观点，JavaScript 的进化版是如何让我们在一些我们之前可能不得不依赖一些工具模块的场景里允许我们直接解决问题的。

不要忽略它（译者注：Lodash），但——下次你需求一个抽象时——思考一下是否一个简单的函数就能办到了！
