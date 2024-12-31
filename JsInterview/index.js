const function1 = 
{
    name: "Arpit Beuria",
    age : "27",
}

let printFunction = function(Hometown,State)
{
    console.log(this.name+" "+this.age+" "+Hometown+" "+State);
}

printFunction.call(function1,"Ireland");

//Function Borowing

//Call

const function2 = 
{
    name: "Amrit Beuria",
    age : "34",
}

printFunction.call(function2,"Bangalore");

//Apply
printFunction.apply(function2,["Bangalore"]);

//Bind
let bindfn = printFunction.bind(function1,"Dublin");

bindfn();

Function.prototype.myBind =function (...args)
{
    let obj = this;



    let params = args.slice(1);

    return function (...args2)
    {
        
        console.log(args2[0]);
        obj.apply(args[0],[...params,...args2]);
    }
}


let bindfn1 = printFunction.myBind(function1,"Dublin 1");

bindfn1("Odisha");








