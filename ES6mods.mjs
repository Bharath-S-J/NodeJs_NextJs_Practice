import defaultexportitem ,{ m1,pow4 } from './module1.mjs'

console.log(m1.square(25))
console.log(m1.cube(25))
console.log(pow4(25))
console.log(defaultexportitem)



// import { square } from "./module.mjs";
// import { cube } from "./module.mjs";
//we can also use import * as <anyname> from "./module.mjs"; and using of it is -->console.log(<anyname>.square(25))

// {}--> are used in imports then we can choose which import we want from multiple exports 
// console.log(square(25))
// console.log(cube(25))