// // Global variable
// // let dish = "Rice";

// // function cookRice() {
// //   // Local array variable
// //   let steps = [
// //     "Measure 2 cups of rice",
// //     "Rinse the rice thoroughly with clean water",
// //     "Add the rice to a pot",
// //     "Add 4 cups of water",
// //     "Place the pot on the stove",
// //     "Turn on the heat",
// //     "Let it boil until the water reduces",
// //     "Reduce the heat and let it steam",
// //     "Check if rice is soft",
// //     "Turn off the heat and serve"
// //   ];

// //   // Add a step using push()
// //   steps.push("Enjoy your meal!");

// //   console.log(" Cooking Steps for " + dish + ":");

// //   // Print each step manually by index
// //   console.log("1. " + steps[0]);
// //   console.log("2. " + steps[1]);
// //   console.log("3. " + steps[2]);
// //   console.log("4. " + steps[3]);
// //   console.log("5. " + steps[4]);
// //   console.log("6. " + steps[5]);
// //   console.log("7. " + steps[6]);
// //   console.log("8. " + steps[7]);
// //   console.log("9. " + steps[8]);
// //   console.log("10. " + steps[9]);
// //   console.log("11. " + steps[10]);
// // }

// // cookRice();


// //objects 
// // let person = {
// //   name: "kate",       // name is the key, kate" is the value
// //   age: 10,              // age is the key, 10 is the value
// //   isTrainer: true       // isTrainer is the key, true is the value
// // };

// // console.log(person.name); 

// // for loop
// // When to start (let i = 1)
// // When to stop (i <= 5)
// // How to move (add 1 every time i++)
// // for (let a = 1; a <= 5; a++) {
// //   console.log(a);
// // }

// //joy print hello 3 time

// //sheri multiply each mumber by 2
// //Basil add each number by 3 


// // for (let i = 10;  i>=1; i--) { //sharon done
// //   console.log(i); 
  
// // }
// // //tricia done
// // for (let i = 2; i <=10 ; i +=2) {
// //   console.log(i);
  
  
// // }

// // for (let i = 1; i <=10 ; i++) {
// //   console.log(i+3);
  
// // }

// // for (let i = 1; i <=5; i++) {
// //   console.log("hello");
// //   ;
  
// // }

// // for (let i = 1; i <=5; i++) {
// //   console.log(i*2);
// //   ;
  
// // }

// // //forEach
// // let fruits = ["apple","banana","mango"]
// // fruits.forEach(function(fruit){
// //   console.log(fruit);
  
// // })


// //Joy print number 10,20,30 use for each
// //Tricia Greet names(3) use for each
// // Sharon Double each number 1,2,3 use for each
// //Mac Show animal sounds concatinate animal and sound
// //sheri create an array of 5 colors use for each & print each color
// //Basil array of 4 country names use for each n print each
// //Bill array of 5 names print each name with an exclamation mark at the end

// // let num = [1,2,3];
// // num.forEach(function(n){
// //   console.log(n*2);
  
// // })

// let name=["kate","tracy","lieeyer"]
// // name.forEach(function(name){
// //   console.log("Hello" + ' ' 
// //     + name
// //   );
  
// // })

 
// //while


// // let i = 1;
// // while (i <= 3) {
// //   console.log(i); // prints 1, 2, 3
// //   i++;
// //}




// //dowhile
// // let a =1
// // do{
// // console.log(a);
// // a++

// // }while (a<=3) 


// //   let i = 5;
// // do {
// //   console.log(i); 
// //   i++;
// // } while (i < 10){

// //}

// // let start = parseInt
// // (prompt("Enter a number to start the countdown:"))
// // while(start>0){
// //   console.log(start);
// //   start --;
  
// // }
// // console.log("Go!");


// // let day = "Monday"
// // switch (day) {
// //   case "Monday":
// //     console.log("start of the week");
    
// //     break;
// // case "friday":
// //   console.log("Almost weekend");
// //  break;
// //   default:
// //    console.log("Just another day");
   
// // }

// // let week = prompt("Enter a day of the week:")
// // switch (week) {
// //   case "Monday":
// //     console.log("Start working");
    
// //     break;
// //     case "Saturday":
// //     case "Sunday":
// // console.log("Weekend");
// // break;
// //   default:
// //    console.log("Just another day");
   
// // }
//  let isRaining =false; //boolean
//  if (isRaining) {
//   console.log("Take an umbrella");
//  }else{
//   console.log('Enjoy the sunshine');
  
//  }
 
//  let weather= "rainy"
//  if (weather === "rainy") {
//   console.log("take an umbrella");
  
//  }else{
// console.log("enjoy the sunshine");

//  }



// //if statement


// // 1 Data Setup
// const students = [
//   { name: "Alice", scores: [85, 90, 78], passed: false },
//   { name: "Bob", scores: [60, 55, 70], passed: false },
//   { name: "Charlie", scores: [95, 92, 88], passed: false }
// ];

// // 2 Calculate Averages & Pass Status
// for (let i = 0; i < students.length; i++) {
//   let total = 0;
//   for (let j = 0; j < students[i].scores.length; j++) {
//     total += students[i].scores[j];
//   }

//   let average = total / students[i].scores.length;
//   students[i].average = average;

//   // Pass or Fail
//   if (average >= 70) {
//     students[i].passed = true;
//   } else {
//     students[i].passed = false;
//   }
// }

// // 3 Print Results with Grades & Messages
// students.forEach(student => {
//   let grade;

//   // 4 Grade Assignment
//   if (student.average >= 90) {
//     grade = "A";
//   } else if (student.average >= 80) {
//     grade = "B";
//   } else if (student.average >= 70) {
//     grade = "C";
//   } else if (student.average >= 60) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }

//   // Pass/Fail message
//   let status = student.passed ? "passed" : "failed";
//   console.log(`${student.name} ${status} with an average of ${student.average.toFixed(1)} and got grade ${grade}`);

//   // 5 Special Message using Switch
//   switch (grade) {
//     case "A":
//       console.log("Excellent work!");
//       break;
//     case "B":
//       console.log("Good job!");
//       break;
//     case "C":
//       console.log("You passed!");
//       break;
//     case "D":
//       console.log("Needs improvement.");
//       break;
//     case "F":
//       console.log("Better luck next time.");
//       break;
//     default:
//       console.log("Invalid grade.");
//   }

//   console.log("--------------------------");
// });
let currentInput = '';
let currentOperator = '';
let previousInput = '';
 function appendNumber(number){ // Defines a function named appendNumber that takes one parameter:number a digit or the user clicked
  currentInput +=number; // += appends to the sring. if current input is "12" and  number is "3" it becomes "123"
  document.getElementById('display').value = 
  `${previousInput} 
  ${currentOperator}
   ${currentInput}`;
 }

 function appendOperation(operation){
  if(currentInput==="") return;
  if(previousInput!== ""){
    calculate()
  }
  currentOperator = operation;
  previousInput = currentInput;
  currentInput ='';
  document.getElementById('display').value=
  `
  ${previousInput}
  ${currentOperator}
  `;
 }

 function calculate(){
  if(previousInput===""|| currentInput==="")return;
  let result;
  let prev = parseFloat(previousInput);
  let current= parseFloat(currentInput);
  switch (currentOperator) {
    case "+":
      result=prev+current
      break;
      case "-":
      result=prev-current
      break;
      case "*":
      result=prev*current
      break;
      case "/":
      if(current===0){
        alert('Cannot divide by zero');
         return
      };
      result=prev/current;
      break;
  
    default:
      return;
  }
  currentInput = result.toString();
  currentOperator="";
  previousInput="";
  document.getElementById('display').value=currentInput
 }

 function clearDisplay(){
  currentInput ="";
  previousInput="";
  currentOperator="";
  document.getElementById('display').value=""
 }