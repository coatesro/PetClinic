// js main code
// create owner

function getOwner(){

    let lastname = input 

    function getOwner() {
 
            fetchData("GET", "http://localhost:9966/petclinic/api/owners/*/lastname/" + lastname).then((req) => {
                console.log('fulfilled', req.parsedResponse);
            })
                
            
            //
         document.getElementById("").elements[""].value;
         

}

// function to 

function fetchData(method, url, lastname){
        return new Promise((resolve,reject) => {
        const req = new XMLHttpRequest();
       
        req.onreadystatechange = () => {
            if(req.readyState === 4){
                if(req.status === 200){
                    console.log("Response code:200, Complete");
                    info = JSON.parse(req.responseText);
                    resolve(req);
                } else {
                    console.log("Response code: not 200");
                    reject("Something went wrong")
                }
            }
        } 

        req.open(method, url + lastname);     
        req.send();
    })
}
}
