function clickHandle(params) {
    console.log(params);
    document.getElementById("display").value +=params;
}
function equals(params) {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}
function clearinput(params) {
    document.getElementById("display").value = ""
}

















function loadCalculator(params) {
    const buttons = [
        [7, 8, 9, "+"],
        [4, 5, 6, "-"],
        [1, 2, 3, "="],
        ["*", 0, "/", "C"]
    ];
    const container = document.getElementById("calcContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.id = "display";

    container.append(input);
    for (let index = 0; index < buttons.length; index++) {
        const buttonsRow = buttons[index];
        // 1
        const buttonContaier = document.createElement("div");
        for (let index = 0; index < buttonsRow.length; index++) {
            const buttontext = buttonsRow[index];
            const button = document.createElement("button");
            // 2
            button.innerText = buttontext;
            buttonContaier.append(button);

            button.addEventListener("click", function click(params) {
                console.log(buttontext);

            })
        }
        container.append(buttonContaier);
    }
}