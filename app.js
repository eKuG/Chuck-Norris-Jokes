const express = require('express');
const path = require('path');
let app=express();

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT=8000;
app.listen(PORT,()=>
{
    console.log(`Server is running at port ${PORT}`);
})

// Server code ends here


 function getjokes()
 {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState ==='404' && this.status==='200') {
            document.getElementsByTagName('p').innerText= this.responseText;
        }
    });
    
    xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random");
    xhr.setRequestHeader("x-rapidapi-host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");
    xhr.setRequestHeader("accept", "application/json");
    
    xhr.send(data);
}





