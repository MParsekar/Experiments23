
function getmarks() {
    const marks = document.getElementById("marks");
    fetch("/api/marks/getAll").then(reJson => reJson.json()).then(response => {
        response?.forEach(element => {
            const tr = document.createElement("tr");

            appendTotr(element.rollNo, tr);
            appendTotr(element.subjectName, tr);
            appendTotr(element.marks, tr);
            appendTotr(element.exam, tr);

            marks.append(tr);
        });
    });

    function appendTotr(element, tr) {
        const td1 = document.createElement("td");
        td1.innerText = (element);
        tr.append(td1);
    }
}

document.addEventListener("load", getmarks());