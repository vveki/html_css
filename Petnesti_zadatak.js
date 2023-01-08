/*function outerFunc(){
    let outerVar="im outside"
    let innerFunc =()=>{
        console.log(outerVar);
    }
    innerFunc();
}outerFunc();
const myGlobal=0;

function outerFunc(){
    const myVar=1;
    console.log(myGlobal);
    let innerFunc =()=>{ 
        const myInnerVar=2;
        console.log(myVar,myGlobal);
        function innerofinnerfunc() {
            console.log(myInnerVar,myVar,myGlobal);
            
        }innerofinnerfunc()
    }
    innerFunc();
}outerFunc();*/
function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
      console.log(outerVar);
    }
    return innerFunc;
  }
  function exec() {
    const myInnerFunc = outerFunc();
    myInnerFunc();
  }
  exec();