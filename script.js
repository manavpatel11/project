function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal*rate*years/100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal==""){
        alert("Please Enter Principle Amount !")
        principal.focus();
        return false;
    }
    if (principal<=0){
        alert("Please Enter a Positive Number !")
        principal.focus();
        return false;
    }
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
function updateRate(x){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}