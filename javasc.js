console.log("Hello world");
let a=10;
{
    let a=20;
    console.log("inner",a);
}
console.log("outer",a);
var b=10;
{
    var b=20;
    console.log("inner",b);
}
console.log("outer",b);
const c=20;
{
    const c=30;
    console.log("inner",c);
}
console.log("outer",c);
console.log("tyep",typeof(c));
var s="arasu";
console.log(typeof(s));
