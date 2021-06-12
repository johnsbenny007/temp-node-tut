const os=require('os')          //this actully makes contact with our operating system  and also access to the operationg system

//info about  currnent user
const user=os.userInfo()


//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemen:os.freemem(),
}
console.log(currentos)
