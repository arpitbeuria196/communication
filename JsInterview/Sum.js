
let Sum = function(a)
{
    return function (b)
    {
       if(b)
       {
         return Sum(a+b);
       }
       return a;
    }
}


console.log(Sum(1)(2)(3)(4)(5)(6)(7)());