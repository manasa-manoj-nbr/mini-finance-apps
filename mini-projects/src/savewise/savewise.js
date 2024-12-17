
// function calculateProgress() {

//     const goalAmt = parseFloat(document.getElementById('goalAmt').value);
//     const monthly = parseFloat(document.getElementById('monthly').value);
//     const current = parseFloat(document.getElementById('current').value);

//     const progress = document.getElementById('progress-bar');
//     const result = document.getElementById('result');
//     console.log(result);

//     if (isNaN(goalAmt) || isNaN(monthly) || isNaN(current)) {
//         result.textContent = "Please enter valid numbers!";
//         result.classList.remove("opacity-0", "translate-y-5");
//         result.classList.add("show");
//         return;
//       }


//     const remainingAmt = goalAmt - current;
//     const monthsToGoal = Math.ceil(remainingAmt / monthly);

//     const progressPercent = Math.min((current / goalAmt) * 100, 100);

//     progress.style.width = `${progressPercent}%`;

//     // result.textContent = `Months to goal: ${monthsToGoal}`;
//     // result.classList.remove("opacity-0", "translate-y-5");
//     // result.classList.add("show");
//     result.classList.remove("show");
//     setTimeout(() => {
//         if (current >= goalAmt) {
//             result.innerHTML = "🎉Congratulations! Your savings have bloomed to reach your goal!";
//         } else {
//             result.innerHTML = `🌿 Keep nurturing your savings! You'll reach your goal in ${monthsToGoal} months.`;
//         }
//         result.classList.add("show")
//     },100)
// }

// document.getElementById('calculate-btn').addEventListener('click', calculateProgress);

function calculateProgress() {
    const goalAmt = parseFloat(document.getElementById('goalAmt').value);
    const monthly = parseFloat(document.getElementById('monthly').value);
    const current = parseFloat(document.getElementById('current').value);

    const progress = document.getElementById('progress-bar');
    const result = document.getElementById('result');
    console.log(result);

    if (isNaN(goalAmt) || isNaN(monthly) || isNaN(current)) {
        result.textContent = "Please enter valid numbers!";
        result.classList.remove("opacity-0", "translate-y-5");
        result.classList.add("show");
        return;
    }

    const remainingAmt = goalAmt - current;
    const monthsToGoal = Math.ceil(remainingAmt / monthly);

    const progressPercent = Math.min((current / goalAmt) * 100, 100);

    // Set the width of the progress bar dynamically
    progress.style.width = `${progressPercent}%`;

    // Delay the result text and update the content
    result.classList.remove("show");
    setTimeout(() => {
        if (current >= goalAmt) {
            result.innerHTML = "🎉 Congratulations! Your savings have bloomed to reach your goal!";
        } else {
            result.innerHTML = `🌿 Keep nurturing your savings! You'll reach your goal in ${monthsToGoal} months.`;
        }
        result.classList.add("show");
    }, 100);
}

document.getElementById('calculate-btn').addEventListener('click', calculateProgress);
