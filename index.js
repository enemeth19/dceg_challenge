console.log('erika.js starting');

function getData(url) {
    let response = '';
    let xhr = new XMLHttpRequest(); // creating an XMLHTTPRequest
    if(xhr != null) {
        xhr.open('GET', url, false); // configuring the request
        xhr.send(null); // sending the request to the server
        response = xhr.responseText;
        console.log(xhr.responseText)
    }
    return response;
}

let myURL = getData('https://health.data.ny.gov/resource/gnzp-ekau.json?$$app_token=FwLXuOIVoXvCv7PRSwqJQ9NGJ&ccs_diagnosis_description=Cancer%20of%20prostate&$limit=5000')

let myData = JSON.parse(myURL) // an array with all the data for patients with prostate cancer diagnoses

console.log(JSON.parse(myURL))

console.log('erika.js finished');
