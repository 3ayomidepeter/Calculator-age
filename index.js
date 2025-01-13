import { DateTime } from "https://cdn.skypack.dev/luxon";


// Your existing code here...


const dateInput = document.getElementById('date');
const btnEl = document.getElementById('btn-el');
const result = document.getElementById('result');

function calculateAge(dob) {
    const birthDate = DateTime.fromISO(dob);
    const today = DateTime.now();
    const age = today.diff(birthDate, ["years", "months", "days"]).toObject();
    return `${Math.floor(age.years)} years, ${Math.floor(age.months)} months, and ${Math.floor(age.days)} days`;
}

btnEl.addEventListener('click', function (e) {
    e.preventDefault()
    const dob = dateInput.value;
    if (dob) {
        const age = calculateAge(dob);
        result.textContent = `You are ${age} years`;
        console.log(age);  // Moved inside the if block
    } else {
        result.textContent = `Enter a valid date`;
    }
});
