const alphanumeric = "ab123cdE654f879gh";
const demo = alphanumeric.replace(/\D/g,"");
    //  console.log(demo,"demo");
// get string value in alphanumeric string value
const matchValue = /[A-z]/g;
const string = alphanumeric.match(matchValue).join("")
    //  console.log(string ,"check");

//get number value in alphanumeric string value
const numbers = [];
let result = 0;
const splitValue = alphanumeric.split("");
 for (let i = 0; i < splitValue.length; i++) {
     const element = Number(splitValue[i]);
     if (element) {
        numbers.push(element)
    }
 }
 for (let i = 0; i < numbers.length; i++) {
     result += numbers[i];
    
 }
    //   console.log(result);
 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get string and number in alphaumeric in arary 
let numberValue = [];
let stringValue =[]
const alphanumericarray = ["ab", 1, 2, 3, "cd", "e", 6, 4, 5, "f", 7, "g"];
alphanumericarray.map(e => {
    if (typeof e === "string") {
        stringValue.push(e)
    } else if (typeof e === "number") {
        numberValue.push(e)
    }
})
let numberResult = 0;
if (numberValue) {
    numberValue.map(e => {
        numberResult += e
    })
}
        // console.log(numberResult);
        // console.log(stringValue.join(""));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sort method
const array = [1, 345, 2134, 12, 4]; 
const sortValue = array.sort(sortFun)
    // console.log(sortValue);
function sortFun(a,b) {
   return a-b
}
//OR
const sortValue2 = array.sort((a,b) => a-b)
        // console.log(sortValue2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//class consept

class firstClass{
    constructor(name,age,mob) {
        this.Cl_name = name;
        // this.name = name;
        this.Cl_age = age;
        this.Cl_mob = mob;
    }
}
const student = new firstClass("sameer", 22, 234567890);
        // console.log("class concept sample ",student.Cl_name);

//create child class

class secondClass{
    constructor(name,age,mob) {
        this.name = name;
        this.age = age;
        this.mob = mob;
    }
}
class school extends secondClass{
    constructor(schools, location,student_age,student_mob,student_name) {
        super( student_name,student_age,student_mob)

        this.scl_school = schools;
        this.scl_location = location;
    
    }
    print() {
        return `    class concept :-
             school : ${this.scl_school},
             name : ${this.name},
             age : ${this.age},
             location : ${this.scl_location},
             mob : ${this.mob}`
    }
    
}
const check = new school("ABC", "coimbatore", 22, 1234567890, "sameer");
        // console.log(check.print());


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for loop
for (let i = 0; i <= 10; i++) {
   if (i%2 !==0) {
    //    console.log(`add number ${i}`);
   }
}
////////reverse
for (let i = 10; i >= 0; i--) {
    if (i%2 !==0) {
        // console.log(` reverse add number ${i}`);
    }
 }

//white loop 
i = 0;
while (i <= 10) {
    if (i%2 !==0) {
        // console.log(`add number ${i}`);
    }
    i++;
}
 ////////reverse
 i = 10;
while (i >= 0) {
    if (i%2 !==0) {
        // console.log(`reverse add number ${i}`);
    }
    i--;
}

//do-white
i = 1;
do {
    if (i % 2 !== 0) {
        // console.log("do-white to find add number ", i);
    }
    i++
} while (i >= 10);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//for-in-loop
// for in loop use for on array or object itration
const array1 = ["red", "blue", "green"];
const object = {
    name : "sameer",
    age: 22,
}

for (const key in object) {
        // console.log(key +" : " + object[key]);
}
for (const key in array1) {
       //  console.log(key +" : "+ array1[key]);
}

//for-of-loop
//for-of-loop use for on array value itrate
for (let array of array1) {
        // console.log(array);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//switch case :
const grade = 'A';
// switch (grade) {
//     case 'A':
//         console.log("pass");
//         break;
//     case 'B':
//         console.log("fail");
//     default:
//         console.log("no grade find");
// }


const grades = 55;
// switch (true) {
//     case grades < 40:
//         console.log("fail");
//         break;
//     case grades > 40:
//         console.log("pass");
//         break;
//     default:
//         console.log("no ");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Geolocation


window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error.message)
   
 
    
    
)
console.log({ latitude })