/*
$("input[name='brutto']").change(function(){
    $("input[name='netto']").val(Math.round($(this).val()*1.19));
});

$("input[name='netto']").change(function(){
    $("input[name='brutto']").val(Math.round($(this).val()/1.19));
});
*/


function salaryInput() {
    let grossSalary = document.getElementById('floatingInput').value;
    return document.getElementById('floatingInput').innerHTML = grossSalary;   
  }


function calculateSalary(grossSalary){
    let socialTax = grossSalary * 0.105; //105 EUR
    let grossSalaryMinusSocialTax = grossSalary - socialTax; //895 EUR
    let personalIncomeTax = grossSalaryMinusSocialTax * 0.2; //179 EUR
    let socialTaxEmployersPart = grossSalary * 0.2359; //235.90 EUR
    let netSalary = grossSalary - socialTax - personalIncomeTax; //716 EUR
    let businessRiskFee = 0.36; //0.36 EUR
    let totEmployerExpenses = grossSalary + socialTaxEmployersPart + businessRiskFee; //1236.26 EUR

    console.log(`Monthly gross salary is ${grossSalary}, monthly net salary is ${netSalary},
    social tax 10.5% is ${socialTax}, presonal income tax is ${personalIncomeTax},
     social tax, employers part is ${socialTaxEmployersPart}, business risk fee is ${businessRiskFee},
      total employers expenses is ${totEmployerExpenses}.`);
    
    document.getElementById("gross").innerHTML = grossSalary;
    document.getElementById("net").innerHTML = netSalary;
    document.getElementById("socTax").innerHTML = socialTax;
    document.getElementById("incomeTax").innerHTML = personalIncomeTax;
    document.getElementById("employTax").innerHTML = socialTaxEmployersPart;
    document.getElementById("busFee").innerHTML = businessRiskFee;
    document.getElementById("emplEx").innerHTML = totEmployerExpenses;

    //return calculateSalary();
}
//calculateSalary(1000);


/*
1.Jāiegūst vērtība no input
2.Jāaizlied ievadīt negatīvas vērtības un (burtu) ievades validācijas daļa
3.Nosūtam vērtību un aprēķinu
4.Aprēķins
5.Aprēķina izvade
*/


let button = document.getElementById("salaryCalc");
let input = document.getElementById("salaryInput");
button.addEventListener("click", salaryCalc);

console.log();

function salaryCalc(){
    //console.log("Calc");

    var inputValue=input.value;
}

//aprēķini formulas
function calculate(){
    //console.log("calculate");
}