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
