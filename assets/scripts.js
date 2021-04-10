var search=document.getElementById("search").value;

var format=document.getElementById("dropdown").value;

var requestUrl="https://www.loc.gov/"+format+"/?q="+search+"&fo=json"

document.getElementById("search").addEventListener("submit",function(event) {
    event.preventDefault();
    

//This part checks if the input is correct.
    fetch(requestUrl).then(function(response) {
        if(!response.ok) {
            document.getElementById(/*Add a place for an error message in body*/);
        } 
        return response.json();
    }).then(function(data) {
        console.log(data);
    });})