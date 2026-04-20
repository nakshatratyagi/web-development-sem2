//also asyncronous
setTimeout(() => {
    console.log("HELLOCSEDS");
    },3000);
function greet() {
    console.log("Hello!");
}
console.log("before settimeout")
setTimeout(greet, 3000);

clearTimeout(greet);
