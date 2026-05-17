// const allusers=[{
//     firstname: "harkirat",
//     gender:"male"
// },{
//     firstname: "raman",
//     gender:"male"
// },{
//     firstname:"priya",
//     gender:"female"
// }]
// for(let i = 0 ;i<allusers.length;i++){
//     if(allusers[i]["gender"]=="male")
//         console.log(allusers[i]["firstname"])
// }

/////////////////////////new concept/////////////////////////////

// function sum(a,b){
//     //do things with the input and return an output
//     let sumvalue =  a+b; 
//     return sumvalue;

// }
// const value = sum(1,2);
// const value2=sum(1,10);
// console.log(value);
// console.log(value2);

///////callbacks//////
// function sum(num1,num2,fntocall){
//     let result = num1+num2;
//  fntocall(result);
// }

// function displayresult(data){
//     console.log("result of the sum is:"+data);
// }
// function displayresultpassive(data){
//     console.log("result sum is:"+data);
// }
// const ans=sum(1,2,displayresult);


//////callbacks///////
function calculatearithmetic(a,b,arithmeticfinalfunction){
    const ans = arithmeticfinalfunction(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}
const value = calculatearithmetic(1,2,sum);
console.log(value);