
var button = document.getElementById("netSalaryCalculation"); 
button.addEventListener("click", netSalaryCalculation); 
var input = document.getElementById("grossSalaryInput"); 

function netSalaryCalculation(){
    var inputValue = input.value; 
    if(inputValue >= 1){ 
        calculate(inputValue);
    }
}

function calculate(salary){ 
    //Gross 1000 EUR
    let socialTax = salary * 0.105; //105 EUR
    let grossSalaryMinusSocialTax = salary - socialTax; //895 EUR
    let personalIncomeTax = grossSalaryMinusSocialTax * 0.2; //179 EUR
    let socialTaxEmployersPart = salary * 0.2359; //235.90 EUR
    let netSalary = salary - socialTax - personalIncomeTax; //716 EUR
    let businessRiskFee = 0.36; //0.36 EUR
    let totEmployerExpenses = parseInt(salary) + socialTaxEmployersPart + businessRiskFee; //1236.26 EUR

    if(netSalary != ""){ 
        var netSalaryOutput = document.getElementById("netoSalaryOutput");
        netSalaryOutput.textContent = netSalary.toFixed(2);
    }

    /*
    console.log(`Monthly gross salary is ${grossSalary}, monthly net salary is ${netSalary},
    social tax 10.5% is ${socialTax}, presonal income tax is ${personalIncomeTax},
     social tax, employers part is ${socialTaxEmployersPart}, business risk fee is ${businessRiskFee},
      total employers expenses is ${totEmployerExpenses}.`);
      */

      document.getElementById("gross").innerHTML = salary;
      document.getElementById("net").innerHTML = netSalary;
      document.getElementById("socTax").innerHTML = socialTax;
      document.getElementById("incomeTax").innerHTML = personalIncomeTax;
      document.getElementById("employTax").innerHTML = socialTaxEmployersPart;
      document.getElementById("busFee").innerHTML = businessRiskFee;
      document.getElementById("emplEx").innerHTML = totEmployerExpenses;

}
