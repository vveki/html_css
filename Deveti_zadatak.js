/*function fak (num) {
    for(let i=num-1; i<0;i--){
    num*=i
}
    return num;
}
console.log(fak(5));

function rikverc(broj){

    broj=broj.toString();
    


}
console.log(rikverc(1234));*/
var1=[
     [1,2,3],
     [2,3,4],
     [4,5,6]];
for(let i=0;i<var1.length;i++){
    var1[i][var1.length-i-1]=0;
    console.log(var1[i]);
    
}

