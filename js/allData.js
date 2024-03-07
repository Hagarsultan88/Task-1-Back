
const firstName = "islam"
const lastName = "mohamed"
const city = "mansoura"
const age = 28

function mul(x,y){
    console.log(x*y)
}

//module.exports = firstName
//module.exports = lastName

module.exports= {
    fName : firstName,
    lName : lastName,
    city : city,
    age : age,
    fun1 : mul
}




