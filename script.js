// var DOB = "20 october, 1997";
// var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
// var millisecondsBetweenNowAnd1970 = Date.now();
// var ageInMilliseconds = millisecondsBetweenNowAnd1970-millisecondsBetweenDOBAnd1970;


//   var milliseconds = ageInMilliseconds;
//   var second = 1000;
//   var minute = second*60;
//   var hour = minute*60;
//   var day = hour*24;
//   var month = day*30; 

//   var year = day*365;


// var years = Math.round(milliseconds/year);
// var days = years*365;


  
// function printResults(){
//   var message = "Age in Years : "+years+
//        "</br>Age in Days : "+days;

//   document.getElementById('placeholder').innerHTML = message;
// }

// window.onload = printResults;


$(document).ready(function(){
  $("#calculate").click(function(){
      var mdate = $("#birth_date").val().toString();
      var yearThen = parseInt(mdate.substring(0,4), 10);
      var monthThen = parseInt(mdate.substring(5,7), 10);
      var dayThen = parseInt(mdate.substring(8,10), 10);
      
      var today = new Date();
      var birthday = new Date(yearThen, monthThen-1, dayThen);
      
      var differenceInMilisecond = today.valueOf() - birthday.valueOf();
      
      var year_age = Math.floor(differenceInMilisecond / 31536000000);
      var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
      
      if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
          alert("Happy B'day!!!");
      }
      
      var month_age = Math.floor(day_age/30);
      
      day_age = day_age % 30;
      
      if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
          $("#exact_age").text("Invalid birthday - Please try again!");
      }
      else {
          $("#exact_age").html("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
      }
  });
});