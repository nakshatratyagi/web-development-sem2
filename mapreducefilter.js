const num=[1,2,3,4,5];
const num2=num.filter((n)=>n*2);
const num3 =num.map((n)=>{return n*2})
console.log(num3);
console.log(num2);

const sum=num.reduce((acc,val)=>acc+=val,0);
console.log(sum);

num.forEach((n)=>console.log(n));
