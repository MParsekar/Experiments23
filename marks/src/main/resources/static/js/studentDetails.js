
function saveDetails() {
    const studentName = document.getElementById("studentName").value;
    const rollNo = document.getElementById("rollNo").value;
    const section = document.getElementById("section").value;
    const phoneNumber = document.getElementById("phoneNumber").value;



    if (studentName == "") {

        window.alert("Please enter Name ")
    }
    else if (rollNo == "") {

        window.alert("Please enter rollNo ")
    }
    else if (section == "") {

        window.alert("Please enter section ")
    }
    else if (phoneNumber.length < 10) {
        window.alert("Please enter phone number properly ")
    } else {

        fetch("/api/student/saveStudent", {
            body: JSON.stringify({
                studentName
                , rollNo
                , section
                , phoneNumber
            }), headers: {
                "Content-Type": "application/json"
            },
            method: "POST"

        })
            .then(jsonrsponse => jsonrsponse.json())
            .then(respo => {

            })
            .catch(e => console.log(e));
    }
}   