function square(num){
    return num ** 2
}
//In the same way function can be directly exported by specifying export in front of it  as {export function cube()}
function cube(num){
    return num ** 3
}

//there must be an export for everything thats been specified within this module else we wouldn't be able to access it out of this module
export {square,cube} 
