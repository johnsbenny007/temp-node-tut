//modules-Encapsulated code (only share minimum)

const names=require('./names')     // everytime we srart a module we use this . and/ sign to import form other module
const sayhi=require('./5-utils')        //actually here happening is importing the files ,variables ,functions in names.js and  5-utils.js into this app.js module
const data=require('./6-alternative')
require('./7-mind-grenade')             // invoke invoke a module without even making exports in other module.actually when the node do it 
//it actully wrapped in the funcion
sayhi('susan')
sayhi(names.john)
sayhi(names.peter)