//Debouncing
let count =0;
const getData = function ()
{
    console.log("Fetching Data",count++);
}

const doDebouncing = function()
{
    let timer ;
    return function()
    {
        let context = this
        let args = arguments;

        clearTimeout(timer);
       timer = setTimeout(()=>{
            getData.apply(context,args);
        },300)
    }
}

function outer() {
   
    const arrowFunc = () => {
      console.log(this.name); 
    };
    arrowFunc();
  } 
  
  const obj = { 
    name: "Arpit",
    outer
    };
  obj.outer(); 
  


//Two times we need to avoid arrow functiom
//1. when a function is used as a method
//2.Inside closures 

const betterFunction = doDebouncing(getData,3000);

