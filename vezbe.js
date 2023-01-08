class User{
    constructor(name,lastName,yearofbirth){
        this.name=name;
        this.lastName=lastName;
        this.yearofbirth=yearofbirth;
        this.age=this.ageofUser(yearofbirth)
    }
    fullName(){
        return console.log(this.name+" "+this.lastName);
    }
    ageofUser(){
        return 2022- this.yearofbirth;
    }
}

statesArr = [
    {
        state:'USA',
        cId: "+1"
    },
    {
        state:'Uk',
        cId: "+44"
    },
    {
        state:'Mexico',
        cId: "+52"
    },
    {
        state:'India',
        cId: "+91"
    },
    {
        state:'China',
        cId: "+86"
    },
    {
        state:'Serbia',
        cId: "+381"
    }
]

class AdditionalInfo extends User{
    constructor(name, lastName, yearofbirth, street, city, state, phoneNumber){
        super(name, lastName, yearofbirth);
        this.street=street;
        this.city=city;
        this.state=state;
        this.phoneNumber=this.AutoNum(phoneNumber,state);
    }
    AutoNum(phoneNumber, state){
        if (phoneNumber[0] === '0'){
            let num = phoneNumber.slice(1);
            const stateObj = statesArr.find(s => s.state === state);
            return stateObj.cId + num;
        }
    
    }
} 

const newUserPlus = new AdditionalInfo("Velid","Dzemic", 2005, "zmaj jovina","Novi Pazar", "Serbia","0641245143");
console.log(newUserPlus);
