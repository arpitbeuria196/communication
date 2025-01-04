let user = {
    name : "Akshay",

    address: {
        personal :
        {
            city: "Dublin",
            area: "Doreset_Street",
        },
        office:
        {
            city:"Cork",
            area:
            {
                landmark:"Cork_University"
            }
        }
    }
}

let finalObj = {}

let magic = function (user,parent)
{

    for(let key in user)
    {
        if (typeof user[key] === "object" && user[key] !== null)
        {
            magic(user[key],parent+"_"+key);
        }
        else
        {
            finalObj[parent+"_"+key] = user[key];  
        }
    }
    
}

magic(user,"user");

console.log(finalObj);