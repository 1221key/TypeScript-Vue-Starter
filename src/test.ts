let isDone:boolean = true;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


let myName: string = 'Xcat Liu';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
  alert('My name is xcatliu');
}
let unusable: void = undefined;
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

//如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
//let myFavoriteNumber = 'seven';
//myFavoriteNumber = 7;
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
let myFavoriteNumber2=2;
console.log(myFavoriteNumber+myFavoriteNumber2)


let x;

// You can still assign anything you want to 'x'.
x = () => 42;

// After that last assignment, TypeScript 2.1 knows that 'x' has type '() => number'.
let y = x();

// Thanks to that, it will now tell you that you can't add a number to a function!
//console.log(x + y);
//          ~~~~~
// Error! Operator '+' cannot be applied to types '() => number' and 'number'.

// TypeScript still allows you to assign anything you want to 'x'.
x = "Hello world!";

// But now it also knows that 'x' is a 'string'!
x.toLowerCase();

function getString(something: string | number): string {
  return something.toString();
}

interface Person {
  name: string;
  age: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
};
//使用 [propName: string] 定义了任意属性取 string 类型的值。
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let xcatlius: Person2 = {
  name: 'Xcat Liu',
  website: 'http://xcatliu.com',
};

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string):boolean {
  return source.search(subString) !== -1;
}

function buildName(firstName: string = 'Xcat', lastName: string) {
  return firstName + ' ' + lastName;
}
let xcatliu2 = buildName('Xcat', 'Liu');
let xcat = buildName(undefined, 'Xcat');

document.addEventListener('click', function(e) {
  console.log(e.target);
});
