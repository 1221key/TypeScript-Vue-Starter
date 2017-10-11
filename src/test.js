var isDone = true;
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var myName = 'Xcat Liu';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
function alertName() {
    alert('My name is xcatliu');
}
var unusable = undefined;
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var something;
something = 'seven';
something = 7;
//如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
//let myFavoriteNumber = 'seven';
//myFavoriteNumber = 7;
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var myFavoriteNumber2 = 2;
console.log(myFavoriteNumber + myFavoriteNumber2);
var x;
// You can still assign anything you want to 'x'.
x = function () { return 42; };
// After that last assignment, TypeScript 2.1 knows that 'x' has type '() => number'.
var y = x();
// Thanks to that, it will now tell you that you can't add a number to a function!
//console.log(x + y);
//          ~~~~~
// Error! Operator '+' cannot be applied to types '() => number' and 'number'.
// TypeScript still allows you to assign anything you want to 'x'.
x = "Hello world!";
// But now it also knows that 'x' is a 'string'!
x.toLowerCase();
function getString(something) {
    return something.toString();
}
var xcatliu = {
    name: 'Xcat Liu',
    age: 25
};
var xcatlius = {
    name: 'Xcat Liu',
    website: 'http://xcatliu.com'
};
var mySum = function (x, y) {
    return x + y;
};
var mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Xcat'; }
    return firstName + ' ' + lastName;
}
var xcatliu2 = buildName('Xcat', 'Liu');
var xcat = buildName(undefined, 'Xcat');
