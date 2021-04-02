//===== Task1======

function getPromise(message,delay) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), delay);
    });
}
let message;
let delay;
getPromise("Test promise", 2000)
.then(result => console.log(result));

//===== Task2======
function calcArrProduct(arr){
    return new Promise((resolve, reject) => {
        let mul =1;
        for (let elem of arr){
            if (typeof elem === "number"){
            mul= mul*elem;
            } else {
             const err = new Error(" Error! Incorrect array! "); 
            reject(err);   
             }
        };
          resolve(mul); 
      });
   }

calcArrProduct([3,5,1]).then(result => console.log(result));
calcArrProduct([3,"string",1]).then(result => console.log(result));

//===== Task3======
const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));

function showNumbers() {
for (let i=0, promise = Promise.resolve(); i<10; i++){
const time = Math.floor(Math.random()*3)*1000;
promise = promise.then(()=>
  delay(i,time).then((result) =>{
console.log(result, time);
})
);
}	
}
showNumbers();

//===== Task4======
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
 for (let i=0; i<10; i++){
const time = Math.floor(Math.random()*4)*1000;
await delay(i, time);
console.log("number " +i, "time " + time);
}	
}
showNumbers();

