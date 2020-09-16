
//function to calculate the tip of a bill based on the inputted values
function tipCalculator(){
    var bill = Number(document.getElementById('bill').value);
    var tip= Number(document.getElementById('tip').value);

    var tipAmount = multiplyNumbers(bill,divideNumbers(tip, 100));
    var totalBill = addNumbers(bill, tipAmount);

    alert("Bill Amount: $" + bill + "\n" + "Tip Amount: $" + tipAmount + "\n" + "-------------------"+ "\n" +"Total Bill: $" + totalBill);
};

//function to add up 2 numbers
function addNumbers(num1, num2){
    return num1 + num2;
}
//function to divide up 2 numbers
function divideNumbers(num1, num2){
    return num1 / num2;
}

//function to multiply up 2 numbers
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

module.exports.tipCalculator = tipCalculator;
module.exports.addNumbers = addNumbers;
module.exports.divideNumbers = divideNumbers;
module.exports.multiplyNumbers = multiplyNumbers;
