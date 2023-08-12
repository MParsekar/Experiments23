function getUserInfo() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respJson=>respJson.json())
    .then(response=>generateTable(response))
    .catch(e=>console.log(e));
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

getUserInfo();