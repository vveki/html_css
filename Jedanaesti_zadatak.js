/*var1=["b","a","a","a","a"];
function test(a) {
    

    for(let i=0;i<var1.length;i++){
        if(a[0]!==a[1]&&a[1]===a[2])
        return a[0];
    if(a[i]!==a[i+1])
    return a[i+1];
}
   
}

console.log(test(var1));*/



var1=[2,3,4,5,6,7,2];
function test(a) {
    var1.sort(function(a, b){return a - b});
    parni=[]
    neparni=[]

    for(let i=0;i<var1.length;i++){
        if(var1[i]%2===0 && parni.includes(var1[i])===false)
        parni.push(var1[i])
       else if (var1[i]%2!==0&&neparni.includes(var1[i])===false)
        neparni.push(var1[i])


}


  return [parni,neparni]; 
}

console.log(test(var1));