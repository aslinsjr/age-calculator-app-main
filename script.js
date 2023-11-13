const submitBtn = document.querySelector(".arrow-container");
const fields = document.querySelectorAll("[required]");

const actualdDate= new Date();
const actualAge = actualdDate.getFullYear();
const actualMonth = actualdDate.getMonth();
const actualDay = actualdDate.getDate();

const yearSpan = document.querySelector("#years-value");
const monthSpan = document.querySelector("#months-value");
const daySpan = document.querySelector("#days-value");

const ageInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");

submitBtn.addEventListener("click", ()=> {

    let userAge = actualAge - ageInput.value;

    let userMonth = "";

    if(monthInput.value >= (actualMonth+1)){
        userAge = (actualAge - ageInput.value) - 1;
        userMonth = (actualMonth-monthInput.value)+12;
    }else{
        userMonth = actualMonth - monthInput.value;
    }

    const userDay = 31 - (dayInput.value - actualDay);


    yearSpan.innerHTML = userAge;
    monthSpan.innerHTML = userMonth;
    daySpan.innerHTML = userDay;
})

submitBtn.addEventListener("dblclick", ()=> {
    window.location.reload();
})
