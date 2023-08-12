function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(responsesjson => responsesjson.json())
        .then(respo => parseData(respo))
        .catch(e => {
        });
}
function parseData(data) {
    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        console.log(user.name, user);
        
        // const h1 = document.createElement("h1");
        // h1.innerText = user.name;
        generateCard(user);
        // document.getElementById("container").append(h1);
    }
}

function generateCard(user) {
    const divCard  = document.createElement("div");
    divCard.classList.add("card")
  
    const divHeader  = document.createElement("div");
    divHeader.classList.add("card-header");
    divHeader.innerText = user.name;

    const divBody  = document.createElement("div");
    divBody.classList.add("card-body");
    divBody.innerText = user.phone;
    
    const divFooter  = document.createElement("div");
    divFooter.classList.add("card-footer")
    const a = document.createElement("a");
    a.href = user.website;
    a.innerText = "Web"
    divFooter.append(a);


    divCard.append(divHeader, divBody, divFooter);

    document.getElementById("container").append(divCard);


}
getData();