function calculateTip() {
    const billAmt = parseFloat(document.getElementById("billAmt").value);
    const tipAmt = parseFloat(document.getElementById("tip").value);
    const pplNum = parseFloat(document.getElementById("ppl").value);

    if (isNaN(billAmt) || billAmt < 0) {
        alert("Please enter valid bill amount");
        return
    }
    if (pplNum <= 0) {
        alert("Please enter valid details!")
        return;
    }

    const tip = billAmt * tipAmt;
    const total = billAmt + tip;
    const perP = total / pplNum;
    const tipPerP = tip / pplNum;

    document.getElementById("tipAmt").textContent = `$ ${tip.toFixed(2)}`;
    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
    document.getElementById("perPerson").textContent = `$ ${perP.toFixed(2)}`;
    document.getElementById("tipPerPerson").textContent = `$ ${tipPerP.toFixed(2)}`;
}

const allElements = document.querySelectorAll('input,select').forEach((element) => {
    element.addEventListener("input", calculateTip);
});