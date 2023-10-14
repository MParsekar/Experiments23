let currentIndex = 0;
let rollNoList = [];
function finaliseChoiceOfSubject() {
    console.log("done");
    const subject = document.getElementById("subject").value;
    const exam = document.getElementById("exam").value;
    const section = document.getElementById("section").value;

    if (subject == "") {
        window.alert("Please Enter subject ");
    } else if (exam == "") {
        window.alert("Please Enter exam")
    } else {
        const markSection = document.getElementById("markSection")
        const selectedSubject = document.getElementById("selectedSubject");
        const selectedExam = document.getElementById("selectedExam");

        const selectedSection = document.getElementById("selectedSection");
        const subjectSection = document.getElementById("subjectSection");
        markSection.hidden = false;
        subjectSection.hidden = true;

        selectedSubject.innerText = subject;
        selectedExam.innerText = exam;
        selectedSection.innerText = section;
        currentIndex = 0;
        rollNoList = [];

        fetch("/api/student/getStudentRollNo").then(respoj => respoj.json()).then(response => {


            document.getElementById("selectedRollNo").innerText = response[currentIndex];

            rollNoList = response;
        });
    }

}


function saveMarks() {
    const rollNo = document.getElementById("selectedRollNo").innerText
    const subjectName = document.getElementById("selectedSubject").innerText
    const marks = document.getElementById("marks").value
    const exam = document.getElementById("selectedExam").innerText

    fetch("/api/marks/save", {
        method: "POST",
        body: JSON.stringify({
            rollNo
            , subjectName
            , marks
            , exam
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resj => resj.json()).then(response => {
        console.log(response);
        
        currentIndex++;
        document.getElementById("selectedRollNo").innerText = rollNoList[currentIndex];
        document.getElementById("marks").value = "";
    })
}