
function loadCaluclator() {
    const calculatorContainer = document.getElementById("calculatorContainer");
    console.log(calculatorContainer)
    const buttonsText = [0,1,2,3,4,5,6,7,8,9,"*","+","/","-", "."];

    for (let index = 0; index < buttonsText.length; index++) {
        const buttonText =  buttonsText[index];

        let div1 = document.createElement("button");
        div1.innerHTML = buttonText;
        calculatorContainer.append(div1);
        if ((index+1) %3 == 0 && index != 0){
            calculatorContainer.append(document.createElement("br"))
        }
    }



}

loadCaluclator();
