// const fun = function()
// {

// }

// console.log(typeof fun);

// //class behind 

// class Vehicle
// {
//     constructor(type,brand)
//     {
//         this.type = type;
//         this.brand = brand;
//     }

//     start()
//     {
//         console.log(`${this.type} by ${this.brand} is starting`);
        
//     }
// }

// const car = new Vehicle("Tesla","Model 3");

// car.start();
// console.log(typeof Vehicle);

// let count =0;

//will return a promise

// let getPromise = ()=>
// {
//     return new Promise((resolve,reject)=>{
//         if(count>0)
//         {
//             resolve("Promise Resolved Successfully");
//         }
//         else
//         {
//             reject("Promise Failed");
//         }
//     })
// }


// document.getElementById("click").addEventListener("click",async () => {
//     count+=1;
//     try {
//         const promiseFetch = await getPromise();
//         console.log(promiseFetch);
//     } catch (error) {
//         console.log(error);
//     }
// })
let count =0
const promise = async (count)=>
{
    if (count > 0) {
        return "Promise Resolved Successfully"; 
    } else {
        throw "Promise Failed";
    }
}

document.getElementById("click").addEventListener("click",async () => {
     count+=1;

     console.log("Arpit");
     try {
        const result = await promise(count);
        console.log(result);
     } catch (error) {
        console.error(error);
     }

     console.log("Beuria");

     

})

