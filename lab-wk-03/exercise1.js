const buffer_array = Buffer.from([ 8, 6, 7, 5, 3, 0, 9 ])
const buffer_string = Buffer.from("Hello Internets", "utf-8")

console.log(buffer_string.toString('utf8'));
console.log(buffer_string.toString('hex'));
console.log(buffer_string.toString('utf8',0,10));
console.log(buffer_array.copy(buffer_string, buffer_string.length, 0, buffer_array.length))