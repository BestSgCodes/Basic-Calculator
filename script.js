let digits = document.querySelector(".digits");
let digitArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "." ,0, "CLEAR"];
let str = ""
let result = document.querySelector("p");
let operators = document.querySelectorAll(".connectors");
let equalsTo = document.querySelector(".special-connector");
let finalVal = "";
let currentOperator = "";

for (let i = 0; i<=11; i++) {
    let val = digitArr[i];
    let newBtn = document.createElement("button");
    newBtn.value = val;
    newBtn.innerText = val;
    newBtn.className = "button";
    newBtn.id = val;
    digits.appendChild(newBtn);
    newBtn.addEventListener("click", (evt) => {
        str += newBtn.value;
        result.innerText = str;
        if (newBtn.value == "CLEAR"){
            str = "";
            result.innerText = "";
        }
    })
}

operators.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        currentOperator = btn.innerText;
        str += currentOperator;
        result.innerText = str;
    })
})

equalsTo.addEventListener("click", (evt) => {
    finalVal = eval(str);
    result.innerText = finalVal;
})