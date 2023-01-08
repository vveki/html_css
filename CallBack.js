/*const displayValue = () => {
    console.log(value);
};
const calculator = (a,b,func) =>{
    value = a+b;
    func(value)
};
calculator(2,4,displayValue);
const niz=[{x:1},{x:2},{x:3}];
let initialValue = 0
const sum = niz.reduce(
    (previousValue, currentValue) => previousValue+ currentValue.x
    , initialValue
    );
    console.log(sum);
    const people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ];
      const friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
      }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }]
      let initialValue = [""]
      let knjige= friends.reduce(
          (previousValue, currentValue)=> previousValue+ currentValue.books
          , initialValue

        );
        console.log(knjige);
        const brojevi = [12, 5, 8, 130, 44];

        const veci = brojevi.filter(broj => broj >= 10);

        console.log(veci);
        const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));*/
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array.some(even));
