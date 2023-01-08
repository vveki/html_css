const fruits = ["Banana", "Orange", "Apple", "Mango"];
for(let i=0;i<fruits.length;i++){
    if(fruits[i]==="Apple")
    fruits.splice(i,1);
}
console.log(fruits);