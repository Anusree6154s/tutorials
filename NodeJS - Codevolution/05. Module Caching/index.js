const superhero1 = require("./super-hero");// any name will be fine
console.log(superhero1.getName());// before setting the default name appears
superhero1.setName("superman");
console.log(superhero1.getName());//after setting changed name appears

const superhero2 = require("./super-hero");
console.log(superhero2.getName());//now the set name is the default name

//modules are loded and cached(remembered)
//so now it remembers the new loaded module(here, superhero file)

//if we need to use different instances of same module:
const SuperWomen = require("./super-women");//class name itself should be used
const superwoman1 = new SuperWomen ("wonderwoman");
console.log(superwoman1.getName());

const superwoman2 = new SuperWomen ("catwoman");
console.log(superwoman2.getName());