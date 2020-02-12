
let add = function(){
//   console.log("in add");
  return new Promise(function(resolve,reject){
  let result = 10+10;
//   console.log("addition is " +result);
    resolve(result);
  });
};


let sub=function(result){
//   console.log("result",result);
  return new Promise(function(resolve,reject){
  let result1 = result - 10;
//   console.log("substraction is " +result1);
  resolve(result1);
  });
};


let mult=function(result1){
  return new Promise(function(resolve,reject){
  let result2 = result1 * 10;
//   console.log("multiplication is " +result);
  resolve(result2);
  });
};

let div = function(result2){
  return new Promise(function(resolve,reject){
  let result3 = result2 / 10;
//   console.log("division is " +result);
  resolve(result3);
  });
};

  add().then((VALUE1) => {
   console.log("addition of 10 + 10 is -->"+VALUE1);
    sub(VALUE1).then((VALUE2) => {
     console.log("substraction of "+ VALUE1 + " - 10 is -->"+VALUE2);
      mult(VALUE2).then((VALUE3) => {
       console.log("Multiplication of " +VALUE2+ " * 10 is -->"+VALUE3);
        div(VALUE3).then((VALUE4) => {
         console.log("division of " +VALUE3+ " * 10 is -->"+VALUE4);
        });     
    });      
  });
});



