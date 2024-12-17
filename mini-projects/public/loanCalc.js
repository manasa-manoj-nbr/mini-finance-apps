const loanAmtInput = document.getElementById("loanAmt");
const interestInput = document.getElementById("interest");
const termInput = document.getElementById("term");

const EMI = document.getElementById("monthly")
const totalPayment = document.getElementById("total")
const totalInterest = document.getElementById("totalInterest")

document.getElementById("submit").addEventListener("click", () => {

    const principal = parseFloat(loanAmtInput.value);
    const interest = parseFloat(interestInput.value)/100/12;
    const years = parseFloat(termInput.value) * 12;

    if (isNaN(principal || interest || years)) {
        alert("Please enter a valid number!");
        return;
    }

    const x = Math.pow(1 + interest, years);
    const monthly = (principal * interest * x) / (x - 1);
    if (isFinite(monthly)) {
        const total = monthly * years;
        const totalI = total - principal
        
        animate(EMI,0,monthly,1000)
        animate(totalPayment,0,total,1000)
        animate(totalInterest,0,totalI,1000)

    } else {
        alert("Please check your numbers!")
     }
})

function animate(element,start,end,duration) {
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = start + (end - start) * progress;
        element.textContent = `$${current.toFixed(2)}`;
        if (progress < 1) {
            requestAnimationFrame(update)
        }
    }
    requestAnimationFrame(update)
}