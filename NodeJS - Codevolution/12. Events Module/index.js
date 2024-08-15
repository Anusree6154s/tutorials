// Events Module

const EventEmitter = require("node:events");

const orderPizza = new EventEmitter();
orderPizza.on("order", (info1, info2) => {
  console.log(`Your pizza, ${info1} with ${info2} is ready!`);
});
orderPizza.on("order", (info1)=>{
    if(info1=="large"){
        console.log("Serve complimentary drink!");
    }
})
console.log("Execute before event occurs in the system");

orderPizza.emit("order", "large", "pepperoni");//code for the event to begin


// const emitter = new EventEmitter();
// emitter.on("event", (info1, info2) => {
//   console.log(`Your action, with ${info1} and ${info2} is done!`);
// });
// emitter.emit("event", "extra info 1", "extra info 2");
