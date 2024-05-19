function add(a,b){
    return a+b;

}
module.exports.add= add


//works 
// module.exports={

// }

//works 
// exports.a=100

//fails
// exports = {
//     a:10
// }

// module.exports.a =100
// module.exports.string="My name is Khan"
// module.exports.myfun =() =>{
//     console.log("Khan Sab")
// }