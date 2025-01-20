import type { NextConfig } from 'next';
import {func} from "ts-interface-checker";
import {fetch} from "undici-types";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

let name: string = "Alice";
let age: number = 25;

let auto_name = "Alice";

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

type StringOrNumber = string | number;
let value : StringOrNumber = 42;

enum Direction {
    Up  ,
    Down,
    Left,
    Right,
}

let dir: Direction = Direction.Left;

let point: [number, number] = [10, 20];

abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!")
    }
}

function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(24);

export function add(a: number, b: number) {
    return a + b;
}

function printId(id: string | number) {
    if (typeof id === "string"){
        console.log(id.toUpperCase());
    }

    if (typeof id === "number"){
        console.log(id.toFixed(2));
    }
}

let user = {name: "Alice", address: {city: "Wonderland"}};
console.log(user?.address?.city);

let value1= null;
console.log(value1 ?? "default")

interface Todo {
    title: string;
    description: string;
}

let partialTodo: Partial<Todo> = {title: "Learn TypeScript"};

type ID = string | number;

export class ExportPerson {
    constructor(public name: string) {
    }
}

let val: any = "hello";
let strLength: number = (val as string).length;

// 单行注释
/*
    多行注释
 */
function identityGeneral<T>(arg: T): T {
    return arg;
}

let num1 = 10;

async function fetchData(): Promise<String> {
    try {
        throw new Error("Something went wrong");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
    const response = await fetch("https://example.com");
    const data = await response.text();
    return data;
}

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

let x: any = 24;
x.ifItExists();
x.toFixed();

function logMessage(message: string): void {
    console.log(message)
}

let empty: null = null;
let notAssigned: undefined = undefined;

let y: number | null | undefined;
y = 1;
y = undefined;
y = null;

let direction: "up" | "down" | "left" | "right";
direction = "down";

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

var res = function() {
    return "hello world";
}

var ret = function(a: number, b: number) {
    return a + b;
}

ret(1, 2);

(function() {
    console.log("this is function.")
})()

var fun = (x: number) => x + 10;
fun(10);

var foo = (x: number) => {
    x += 10;
    console.log(x);
}

var nums: number[] = [1, 2, 3, 4];

var arr_names: number[] = new Array(4);

var sites = ["Google", "Runoob", "Taobao", "Facebook"];
for (var i= 0; i < sites.length; i++) {
    console.log(sites[i]);
}

var j: any;
for (j in sites) {
    console.log(j)
}

let mytuple: [number, string];
mytuple = [1, "Runoob"];

function getUserInfo(): [number, string] {
    return [1, "John Doe"]
}

const [userId, userName] = getUserInfo();
console.log(userId)
console.log(userName)

let tuple = [42, "Hello"] as const;

let tuple1: [number, string] = [42, "Hello"]
let tuple2: [boolean] = [true];
let extendTuple: [number, string, ... typeof tuple2] = [42, "Hello", ...tuple2]
console.log(extendTuple)

function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;
        for ( i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}

var arr: number[] | string[]

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string;
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: ():string => {return "Hi there"}
}

interface lengthwise {
    length: number;
}

function logLength<T extends lengthwise>(arg: T): void {
    console.log(arg.length)
}

function defaultValue<T = string>(arg: T): T {
    return arg;
}

namespace SomeNameSpaceName {
    export interface ISomeInterfaceName {}
    export  class SomeClassName {}
}

export interface SomeInterface {}

declare var jQuery: (selector: string) => any;

