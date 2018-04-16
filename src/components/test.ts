import { get } from "https";

interface Animal {
  sound(): void;
}

interface Bark { }

class Anjing implements Animal, Bark {
  sound() { }
}

class Kecoa { }

let a: number[] = [1, 2, 3];
a.map(val => console.log(val));
a.forEach(val => console.log(val));

enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST
}

enum DirectionStr {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST"
}

console.log('Direction.NORTH', Direction.NORTH, typeof DirectionStr.NORTH);
console.log('Direction[Direction.NORTH]', Direction[Direction.NORTH], typeof Direction[Direction.NORTH]);
console.log('DirectionStr[DirectionStr.NORTH]', DirectionStr[DirectionStr.NORTH], typeof DirectionStr[DirectionStr.NORTH]);

// function getPromise(): Promise<number> {
//   return new Promise;
// }

// function getX(): Promise<number> {
//     return new Promise(2);
//     // return fetch('https://raw.githubusercontent.com/SMAPPNYU/ProgrammerGroup/master/LargeDataSets/sample-tweet.raw.json');
// }

// async function foo() {
//     try {
//         let x = await getX();
//         console.log('x', x);
//     } catch (e) {
//         console.log(e);
//     }
// }

// foo();
// console.log('asu');

//get('https://raw.githubusercontent.com/SMAPPNYU/ProgrammerGroup/master/LargeDataSets/sample-tweet.raw.json', (resp) => console.log(resp));

let x: number[] = [1, 2, 3];
x.map

function asu(a: number, b?: number): number {
  return 1;
}

asu(1, 2);

function kambing(a: number, b: number): number {
  return 1;
}

kambing(1, 2);

function sapi(a: number, callback: (i: number, j: number) => void): void {

}

sapi(2, (i: number, j: number) => 3);
