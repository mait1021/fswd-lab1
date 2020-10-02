/*var day=[31,28,31,30,31,30,31,31,30,31];
var month=[1,2,3,4,5,6,7,8,9,10,11,12];
var year=[0];*/

// year = year.toString().substr(-2);

//export fuction getDatOfTheWeek//
function getDayOfTheWeek (year, month, day) {
    
    var days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    

    var monthCodes = {
        "January":1,
        "February":4,
        "March":4,
        "April":0,
        "May":2,
        "Jun":5,
        "July": 0,
        "August": 3,
        "September": 6,
        "October": 1,
        "November": 4,
        "December": 6
     };


    var yearOffsets = {
        16: 6,
        17: 4,
        18: 2,
        19: 0,
        20: 6,
        21: 4,
    };

   

    var lastTwoDigits = year % 100;
    var firstTwoDigits = year.toString().substr(0, 2);

    
    // step 1
    var numOfTwelves = Math.floor(lastTwoDigits / 12); 

    // Step 2: Look at remainder of this division
    var numOfTwelvesRemainder = lastTwoDigits % 12;

    // Step 3: Number of 4's fit into remainder
    var numOfFours = Math.floor(numOfTwelvesRemainder / 4);

    // Step 4: 
    // Add the day parameter passed into this function
    
    // Step 5:
    // Add the month code
     // Step: Check for leap year
  //for part3 exporting file to main.js
     
    function isLeapYear(year) {
    if(year % 400===0)return true;
    if(year % 100===0)return false;
    return year % 4===0;
    }

    var checkifLeapYear = isLeapYear(year);
    if (checkifLeapYear == true) {
        if (month == "February" || month == "January") {
            obtainedMonthCode = obtainedMonthCode+obtainedYearOffsets - 1;
        }
    }

    function isSpecialYear(firstTwoDigits){
        if(firstTwoDigits==16) return true;
        if(firstTwoDigits==17) return true;
        if(firstTwoDigits==18) return true;
        if(firstTwoDigits==20) return true;
        if(firstTwoDigits==21) return true;
    }
    checkisSpecialYear=isSpecialYear(firstTwoDigits);
    if (checkisSpecialYear==true){
            obtainedMonthCode=obtainedMonthCode+obtainedYearOffsets;
           }
    
    var obtainedMonthCode = monthCodes[month];

    var obtainedYearOffsets = yearOffsets[firstTwoDigits];
    
     
   
    // Check for 16, 17, 18, 19
    // Good luck!!


   // Step 6
   // Add all the steps above
   var resultOfAddingSteps = ( numOfTwelves + numOfTwelvesRemainder + numOfFours + day + obtainedMonthCode) % 7; // 4
   
   var dayOfWeek = days[resultOfAddingSteps];
   
   console.log(dayOfWeek);
}
// Call the function here
getDayOfTheWeek(1960, "January", 20);


//part2//

  var month=[ "January","February","March","April","May","June","July","August","September","October","November","December"];
  var  dayOfMonth = {
    "January":31,
    "February":28,
    "March":31,
    "April":30,
    "May":31,
    "Jun":30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
    };
    
    var obtainDayOfMonth = dayOfMonth[month];
     
    function makeCalender(){

       const endDate=new Date(2020,11,31);
       for (let date=new Date (2020, 0,1); date<=endDate; 
       date.setDate(date.getDate()+1)
       ){
       console.log(date);
       }
    }
    

    makeCalender();

       

        /* part 3*/
 





/* decide if this is a leap year
   function isLeapYear(year){
    if(year%4)==0)&&(y%100)!==0||year%400==0{
        return true;
    }
    else 
        return false;
}
calculating sum days for each month
   function sumDays(year, month, day){
       var flag=LeapYear(year);
       var sumdays=0;
       switch(month-1){
           case11:sumdays+=30;
           case10:sumdays+=31;
           case9:sumdays+=30;
           case8:sumdays+=31;
           case7:sumdays+=31;
           case6:sumdays+=30;
           case5:sumdays+=31;
           case4:sumdays+=30;
           case3:sumdays+=30;
           case2:flag==true? sumdays+=29:sumdays+=28;
           case1:sumdays+=31;
           case0:sumdays+=days;
       }
       return sumdays;
   }

  

   for leap years:
   if(month==1){monthNum=1-1};
   if(month==2){monthNum=4-1};
   
   var year
   newYear=year%100;
   years in 1600s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum+6)%7
   years in 1700s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum+4)%7
   years in 1800s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum+2)%7
   years in 1990s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum)%7
   years in 2000s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum+6)%7
   years in 2100s
   weekday=(parseInt(newYear/12)+(newYear-parseInt(newYear/12)*12)+parseInt((newYear-parseInt(newYear/12)*12)/4)+day+monthNum+4)%7
   
   
   day 
   if (weekday == 0){date = Saturday};
   else if (weekday == 1){date = Sunday};
   else if (weekday == 2){date = Monday};
   else if (weekday == 3){date = Tuesday};
   else if (weekday == 4){date = Wednesday};
   else if (weekday == 5){date = Thursday};
   else if (weekday == 6){date = Friday};

function makeCalender(){
    console.log((month+1)+"-"+day+"-"+year+" is a +" weekday");} */
