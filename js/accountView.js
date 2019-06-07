

sendReq();

function sendReq() {
    const req = new XMLHttpRequest();
    console.log("BBBBBBBBBBBBBB");
    req.onreadystatechange = function myRequest() {
        if (req.readyState === 4) {
            console.log("CCCCCCCCCCCCCCCCCCC")
            let user = JSON.parse(req.responseText);
            console.log(user);
            const myNames = user;
            myNames.forEach((element) => {
                console.log(element);
            });
            // for (let z of user) {
            //     console.log(x);
            // }
            // for (let x in user) {

            // }

        }
    }
    req.open("GET", "http://localhost:9966/petclinic/api/pets");
    req.send();

}

for (let x in user) {
    let paste = document.createElement("th");
    paste.innerText = x;
    document.getElementById("heading").appendChild(paste);
}