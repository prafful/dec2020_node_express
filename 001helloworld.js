console.log("Hello from node!!!!")


function welcome(){
    console.log("Log from the function in node!!!!")
}

welcome()

function permiumWelcome(name){
    console.log(name + ", Welcome to Node!!!!")
}

permiumWelcome(process.argv[2])

//console.log(process)
console.log("Node executable: " + process.argv[0])
console.log("Node script: " + process.argv[1])
console.log("Argument : " + process.argv[2])