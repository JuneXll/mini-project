



















var requestUrl="https://libraryofcongress.github.io/data-exploration/"

fetch(requestUrl).then(function(response) {
    if(!response.ok) {
        document.getElementById("searchBar".innerText="Error, invalid, or Joseph just futzed the code.");
    }
    return response.json();
}).then(function(data) {
    console.log(data);

    
})