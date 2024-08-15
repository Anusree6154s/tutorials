const buffer = new Buffer.from("Learning to code");

console.log(buffer.toJSON());//gives unicode values
console.log(buffer);//gives hexadecimal values (raw binary data)
console.log(buffer.toString());

buffer.write("Replacing");
console.log(buffer.toString());