//function currying

let multiply = function (x,y)
{
    console.log( x * y);
}

let multiply2 = multiply.bind(this,2);

multiply2(3);


let sum = function(x)
{
    return function(y)
    {
        console.log(x+y);
    }
}

let sum1 = sum(2);

sum1(3);



