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



      //  progrm 3

//     Write a JavaScript function to get the number of days in a month.   

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output :
// 31
// 29
// 30
// 31

var getDaysInMonth = function(month,year) {

    return new Date(year, month, 0).getDate();
 
   };
   console.log(getDaysInMonth(1, 2012));
   console.log(getDaysInMonth(2, 2012));
   console.log(getDaysInMonth(9, 2012));
   console.log(getDaysInMonth(12, 2012));




   // program 4
//   Write a JavaScript function to get the month name from a particular date.   

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"
  
var month_name = function(dt){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt.getMonth()];
    };
    console.log(month_name(new Date("10/11/2009")));
    console.log(month_name(new Date("11/13/2014")));




     // program 5

//     Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   

// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
// Output :
// "Date1 = Date2"
// "Date1 > Date2"
// "Date2 > Date1"


var compare_dates = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");
  else if (date1<date2) return ("Date2 > Date1");
  else return ("Date1 = Date2"); 
 }

console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:01'), new Date('12/18/2021 00:00')));
console.log(compare_dates(new Date('12/18/2021 00:00'), new Date('12/18/2021 00:01')));




// programk 6

// Write a JavaScript function to add specified minutes to a Date object.   

// Test Data :
// console.log(add_minutes(new Date(2014,10,2), 30).toString());
// Output :
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}
console.log(add_minutes(new Date(2020,11,18), 30).toString());