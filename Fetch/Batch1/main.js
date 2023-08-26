function getUserInfo() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respJson => respJson.json())
        .then(response => generateTable(response))
        .catch(e => console.log(e));
}
function generateTable(data) {

    for (let index = 0; index < data.length; index++) {
        const user = data[index];

        const h1 = document.createElement("h1");
        h1.innerText = user.name;
        document.getElementById("container").append(h1);
        // document.getElementById("container").innerHTML += "<h1>"  + user.name + "</h1>"    
        const image = document.createElement("img");
        image.src = user.thum
    }
}
const domainUrl = "http://192.168.1.15:8080";
function logAttendance() {
    fetch(domainUrl+"/api/attendance/takeAttendace", 
    {
        method: "POST",
        body: JSON.stringify({
            "rollNo": "2105005",
            "attendace": "P",
            "marks": "20"
        }),
        headers: { "Content-Type": "application/json", }
    },).then(resp => resp.json()).then(reponse => console.log(reponse))
}
logAttendance()
getUserInfo();