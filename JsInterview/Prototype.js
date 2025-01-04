let Object1  = {
    name: "Arpit",
    age : "24",

    details : function()
    {
        console.log(this.name +"age is"+ this.age);
    }
}


let Object2 = 
{
    name :"Richa"
}
//Never Do this
Object2.__proto__ = Object1;

Object2.__proto__.details();