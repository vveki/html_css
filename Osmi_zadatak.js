/*let a=4;
switch(a){
    case 1:
        console.log("ponedeljak");
        break;
    case 2:
        console.log("utorak");
        break;   
    case 3:
        console.log("srijeda");
        break;
    case 4:
        console.log("cetvrtak");
        break;
    case 5:
        console.log("petak");
    case 6:
        break;
        console.log("subota");
        break;
    case 7:
        console.log("nedelja");
        break;
}
let a=111;
switch(true){
    case a<5:
        console.log("very low");      
    case a<10:
        console.log("nedelja");
        break;
    case a>100:
        console.log("high");
        break;
    default: console.log("medium");
}
let a="februar",godina=2024;
switch(true){
    
    case "januar":
    case "mart":
    case "maj":
    case "jul":
    case "septembar":
    case "novembar":

        console.log("Ima 31 dan");      
    case "april":
    case "jun":
    case "avgust":
    case "oktobar":
    case "decembar":    
        console.log("Ima 30 dana");
        break;

    default: 
    if(godina%4===0)console.log("ima 29");
    else console.log("ima 28")
}*/
function Funkcija(a1)
{
    if(a1%2===0) console.log("paran");
    else console.log("neparan");

}
Funkcija(5)