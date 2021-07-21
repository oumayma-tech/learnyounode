const Step=process.argv.slice(2)
const sum=Step.reduce((A,B)=>A+parseInt(B),0);
console.log(sum)