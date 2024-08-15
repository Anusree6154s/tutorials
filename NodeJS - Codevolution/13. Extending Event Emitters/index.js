// Extending Event emitters - Inheritence

const event = require("./pizza-shop");
const drink= require("./drinking-machine");

const event1= new event();
const drink1 = new drink();

event1.on("order",(size, topping)=>{
    console.log(`Your ${size} pizza, with ${topping} toppings is ready!`);
    drink1.serve(size);
});
event1.order("large", "mushroom");
event1.displayOrderNumber();