
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dat = date.getDate();
var day = date.getDay();
month = (month < 10) ? ("0" + month ) : month;
dat = (dat < 10) ? ("0" + dat ) : dat;

//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var toDay1 = month + "-" + dat 
            + "-" + year;
var toDay2 = month + "/" + dat 
            + "/" + year;
var toDay3 = dat + "-" +  month
            + "-" + year;
  
            
console.log(toDay1 + "\t,\n" + 
            toDay2 + '\t,\n' +
            toDay3);         
