function postOwner(jsonOwner, url) {
    return new Promise(function (resolve, reject) {
        let postUrl = "http://localhost:9966/petclinic/api/owners/"
        const XHR = new XMLHttpRequest();

        XHR.onreadystatechange = function () {
            if (XHR.readyState === 4) {
                if (XHR.status === 201) {
                    resolve();
                } else {
                    reject();
                }
            }
        }
        XHR.open('POST', postUrl, true);
        XHR.setRequestHeader('Content-Type', 'application/json');
        XHR.send(jsonAccount);
    });
}

function registerAccount() {
    let firstname = document.getElementById("registerForm").elements["firstname"].value;
    let lastname = document.getElementById("registerForm").elements["lastname"].value;
    console.log(lastname);
    let address = document.getElementById("registerForm").elements["address"].value;
    let city = document.getElementById("registerForm").elements["city"].value;
    let telephone = document.getElementById("registerForm").elements["telephone"].value;

    let owner = new Owner(firstname, lastname, address, city, telephone);
    let jsonOwner = JSON.stringify(owner);

    postOwner(jsonOwner).then((value) => {
        let green = document.getElementById("successAlert");
        green.style.display = "block";
    }).catch((value) => {
        let red = document.getElementById("failAlert");
        red.style.display = "block";
	});

    return false;
}