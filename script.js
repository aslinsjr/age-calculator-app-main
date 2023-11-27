// Inputs and Submit Button
const ageInput = document.querySelector("#year");
const monthInput = document.querySelector("#month");
const dayInput = document.querySelector("#day");
const submitBtn = document.querySelector(".arrow-container");

// Actual Dates
const actualdDate= new Date();
const actualAge = actualdDate.getFullYear();
const actualMonth = (actualdDate.getMonth())+1;
const actualDay = actualdDate.getDate();

// Result Span
const yearSpan = document.querySelector("#years-value");
const monthSpan = document.querySelector("#months-value");
const daySpan = document.querySelector("#days-value");

// // Error Span
const dayError = document.querySelector("#day-error");
const monthError = document.querySelector("#month-error");
const ageError = document.querySelector("#age-error");


submitBtn.addEventListener("click", ()=> {
    
    function calcAge(actual, birth, coefficient1, coefficient2) {
        return ((actual - birth) + coefficient1) - coefficient2
    }
    
    function validationYear(actual, birth) {
        if(actual <= birth) {
            return ageCoefficient = -1;
        }else{
            return ageCoefficient = 0;
        }
    }
    
    function validationMonth1(actual, birth) {
        if(actual <= birth) {
            return monthCoefficient1 = 12;
        }else {
            return monthCoefficient1 = 0;
        }
    }
    
    function validationMonth2(actual, birth) {
        if(actual <= birth) {
            return monthCoefficient2 = 1;
        }else {
            return monthCoefficient2 = 0;
        }
    }
    
    function validationDay(actual, birth) {
        if(actual <= birth) {
            return dayCoefficient = numberDays;
        }else {
            return dayCoefficient = 0;
        }
    }
    
    function calcNumberDays (birthMonth) {
        if(birthMonth === 2){
            return numberDays = 29;
        }if(birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12){
            return numberDays = 31;
        }else{
            return numberDays = 30;
        }
    }
    
    // Day
    calcNumberDays(monthInput.value)
    
    validationDay(actualDay, dayInput.value)
    
    const userDay = calcAge(actualDay, dayInput.value, dayCoefficient, 0)
    
    // Month
    validationMonth2(actualDay , dayInput.value)
    
    validationMonth1(actualMonth, monthInput.value)
    
    const userMonth = calcAge(actualMonth, monthInput.value, monthCoefficient1, monthCoefficient2)
    
    // Age
    validationYear(actualMonth, monthInput.value)
    
    const userAge = calcAge(actualAge, ageInput.value, ageCoefficient, 0)
    
    // Print Result
        yearSpan.innerHTML = userAge;
        monthSpan.innerHTML = userMonth;
        daySpan.innerHTML = userDay;

 })

submitBtn.addEventListener("dblclick", ()=> {
    window.location.reload();
})







