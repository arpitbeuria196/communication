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

let count =0;

//will return a promise

let getPromise = ()=>
{
    return new Promise((resolve,reject)=>{
        if(count>0)
        {
            resolve("Promise Resolved Successfully");
        }
        else
        {
            reject("Promise Failed");
        }
    })
}


document.getElementById("click").addEventListener("click",async () => {
    count+=1;
    try {
        const promiseFetch = await getPromise();
        console.log(promiseFetch);
    } catch (error) {
        console.log(error);
    }
})
