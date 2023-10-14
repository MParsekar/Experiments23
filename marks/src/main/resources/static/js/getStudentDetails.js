
function getmarks() {
    const studentDetail = document.getElementById("studentDetail");
    fetch("/api/student/getAll").then(reJson => reJson.json()).then(response => {
        response?.forEach(element => {
            const tr = document.createElement("tr");

            appendTotr(element.studentName, tr);
            appendTotr(element.rollNo, tr);
            appendTotr(element.section, tr);
            appendTotr(element.phoneNumber, tr);

            studentDetail.append(tr);
        });
    });

    function appendTotr(element, tr) {
        const td1 = document.createElement("td");
        td1.innerText = (element);
        tr.append(td1);
    }
}

document.addEventListener("load", getmarks());