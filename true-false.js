//Falsy value
//false, 0, "", undefined, null, NaN.

//Truthy value
//"0", " ", [], {}.

let name = 0;
if(name || name == 0){
    console.log("condition is true");

}
else{
    console.log("condition is flase");
}