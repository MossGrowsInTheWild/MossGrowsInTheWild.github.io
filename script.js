function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark> \<br\> You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+" </mark> \<br\>"
//the highligher almost makes it look like someone is grading your test, I would probably just bold and/or underline the outputs instead.
    
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}      

function formValidation() {
    var pvali = document.getElementById("principal");

    if(pvali.value <= 0){
        alert("Please enter a positive value.");
        principal.focus();
        return true
    }
}