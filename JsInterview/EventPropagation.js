document.getElementById("grandParent").addEventListener(
    'click',()=>
    {
        console.log("GrandParent is clicked");
    },false //Event trickling or capturing
)

document.getElementById("parent").addEventListener(
    'click',()=>
    {
        console.log("parent is clicked");
       
    },false
)

document.getElementById("child")
.addEventListener(
    'click',(e)=>
    {
        console.log("child is clicked");
        e.stopPropagation();
    },
    false //Event trickling or capturing
)