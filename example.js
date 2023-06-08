
function f1(v) {
    if(v) 
    {return true;} 
    else {return false;}

}

const f1 = function(v){
    if(v) 
    {return true;} 
    else {return false;}

}

let x;

function f2 (array) 
{    for(var i = 0; i < array.length - 1; i++)
     {        if(array[i] !== array[i+1]) {       
             return false;        }    } 
                return true;}