document.addEventListener("load", () => {
    console.log("HI")
    loadCalculator();
});
const operation = ["+", "-", "*", "/", "c", "C", "="];
let operationSelected = "";
let number1 = 0;
let reset = false;
//This event handles key presses done by the user
document.addEventListener('keypress', (event) => {
    var name = event.key;
    // checks if the input is a number or is one of the supported operation
    if (!isNaN(name) || (operation.includes(name))) {
        //Calling the logic to do the calculations
        calculatorButtonHandlerLogic(name);
    }

});
//Load the calculator
const loadCalculator = () => {
    const calculatorContainer = document.getElementById("calculatorContainer");
    const buttons = [
        ["7", "8", "9", "+"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "="],
        ["*", "0", "/", "C"],

    ]

    const labelRowdiv = document.createElement("div");
    labelRowdiv.id = "calculatorInputdiv"
    labelRowdiv.style.display = "flex";
    labelRowdiv.style.justifyContent = "end";
    labelRowdiv.style.padding = "10px";


    const label = document.createElement("label");
    label.id = "calculatorInput";
    label.textContent = "0";
    labelRowdiv.append(label);

    calculatorContainer.append(labelRowdiv);

    for (let index = 0; index < buttons.length; index++) {
        const buttonRow = buttons[index];
        const buttonRowdiv = document.createElement("div");

        for (let index2 = 0; index2 < buttonRow.length; index2++) {
            const element = buttonRow[index2];
            const button = document.createElement("button");
            button.id = element;
            button.innerText = element;
            button.addEventListener("click", () => {

                calculatorButtonHandlerLogic(element)
            });

            buttonRowdiv.append(button);

        }
        calculatorContainer.append(buttonRowdiv);
    }

}
const calculatorButtonHandlerLogic = (key) => {
    console.log(key)
    const highlighted = document.querySelector("button[highlight]")

    if (operation.includes(key)) {
        key = key.toUpperCase()
        const highlighted = document.querySelector("button[highlight]")
        if (highlighted)
            highlighted.removeAttribute("highlight");
        document.getElementById(key).setAttribute("highlight", true);
        if (!number1) {

            number1 = parseInt(document.getElementById("calculatorInput").innerText);
            document.getElementById("calculatorInput").innerText = "0"
        }
        reset = true
        switch (key) {

            case "+":

                if (operationSelected && number1) {
                    let number2 = parseInt(document.getElementById("calculatorInput").innerText)
                    document.getElementById("calculatorInput").innerText = number2 + number1;
                    number1 = parseInt(document.getElementById("calculatorInput").innerText)
                    console.log(number2, number1)
                }
                operationSelected = "+";
                break;
            case "-":
                if (operationSelected && number1) {
                    let number2 = parseInt(document.getElementById("calculatorInput").innerText)
                    document.getElementById("calculatorInput").innerText = number2 - number1;
                    number1 = parseInt(document.getElementById("calculatorInput").innerText)
                }
                operationSelected = "-";
                console.log("-")
                break;
            case "/":

                if (operationSelected && number1) {
                    let number2 = parseInt(document.getElementById("calculatorInput").innerText)
                    document.getElementById("calculatorInput").innerText = number1 / number2;
                    number1 = parseInt(document.getElementById("calculatorInput").innerText)
                }
                operationSelected = "/";
                console.log("/")
                break;
            case "*":
                if (operationSelected && number1) {
                    let number2 = parseInt(document.getElementById("calculatorInput").innerText)
                    document.getElementById("calculatorInput").innerText = number2 + number1;
                    number1 = parseInt(document.getElementById("calculatorInput").innerText)
                }
                operationSelected = "*";
                console.log("*")
                break;
            case "=":
                if (highlighted)
                    highlighted.removeAttribute("highlight");
                console.log("=")
                if (operationSelected && number1) {
                    calculatorButtonHandlerLogic(operationSelected)
                    operationSelected = "";
                    // number1 = parseInt(document.getElementById("calculatorInput").innerText) 
                }
                window.setTimeout(() => {
                    document.querySelectorAll("button[highlight]").forEach(e => {
                        e.removeAttribute("highlight")
                    })
                }, 1000);
                break;
            case "C" || "c":
                if (highlighted)
                    highlighted.removeAttribute("highlight");
                number1 = 0
                calculatorInput.innerText = "0"
                window.setTimeout(() => { document.getElementById(key).removeAttribute("highlight"); }, 1000);

                break;

            default:
                break;
        }
    } else if (!isNaN(key)) {
        if (highlighted)
            highlighted.removeAttribute("highlight");
        document.getElementById(key).setAttribute("highlight", true);


        const calculatorInput = document.getElementById("calculatorInput");
        if (calculatorInput.innerText == "0" || reset) {
            calculatorInput.innerText = "";
            reset = false
        }

        calculatorInput.innerText += key;

        window.setTimeout(() => { document.getElementById(key).removeAttribute("highlight"); }, 1000);

    }
}