// program 8
  // Write a js program to create Simple Calculator using switch case.
  function calculator(num1,num2,x) {
    switch (x) {
      case '+':
      console.log( num1+num2);
      break;
      case '-':
        console.log(num1-num2);
        break;
      case '*':
        console.log(num1*num2);
        break;
      case '/':
        console.log(num1/num2);
        break;
    
      default:
        console.log("Enter Valid Operation");
        break;
    }
    
  }
  calculator(1,2,'+')




  
    // program 2

//   Write a JavaScript function to get the current date.   

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

var curday = function(ap){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+ap+dd+ap+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));
