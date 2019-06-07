

sendReq();

function sendReq() {
    const req = new XMLHttpRequest();
    console.log("BBBBBBBBBBBBBB");
    req.onreadystatechange = function myRequest() {
        if (req.readyState === 4) {
            console.log("CCCCCCCCCCCCCCCCCCC")
            let user = JSON.parse(req.responseText);
            console.log(user);
            

        }
    }
    req.open("GET", "http://localhost:9966/petclinic/api/pets");
    req.send();

}

