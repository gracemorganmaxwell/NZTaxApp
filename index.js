const taxBrackets = [
    { minIncome: 0, maxIncome: 14000, taxRate: 0.105 },
    { minIncome: 14001, maxIncome: 48000, taxRate: 0.175 },
    { minIncome: 48001, maxIncome: 70000, taxRate: 0.30 },
    { minIncome: 70001, maxIncome: 180000, taxRate: 0.33 },
    { minIncome: 180001, maxIncome: Infinity, taxRate: 0.39 }
];

document.getElementById('calculateButton').addEventListener('click', function() {
    let income = Number(document.getElementById('incomeInput').value);
    let taxAmount = getTaxAmount(income);
    document.getElementById('result').innerText = `Your tax amount is: ${taxAmount.toFixed(2)}`;
});

function getTaxAmount(income) {
    for (let bracket of taxBrackets) {
        if (income >= bracket.minIncome && income <= bracket.maxIncome) {
            return income * bracket.taxRate;
        }
    }
}
