var1=[];
const onlyUniqe = (a) => {
    for(let i=0;i<a.length;i++){
        if(onlyUniqe.includes(var1[i]))
        var1.push(a[i])
}
return var1;
}
console.log(onlyUniqe([1,1,2,3,3,4,4,5]));