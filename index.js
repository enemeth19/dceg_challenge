console.log('erika.js is starting');

// Checking if my API URL works to begin with
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://health.data.ny.gov/resource/gnzp-ekau.json?$$app_token=FwLXuOIVoXvCv7PRSwqJQ9NGJ&ccs_diagnosis_description=Cancer%20of%20prostate', true)
    // open() allows a user to open a new window
xhr.onload = function() {
    // onload() is an event that occurs once an object has been loaded
    if (this.status === 200)
    {
        console.log(JSON.parse(this.responseText));
    }
}
xhr.send();
    // send() sends the request to the server
    // if there is an error in the construction of our api, then we will be notified by an error, such as Error 400

myURL = 'https://health.data.ny.gov/resource/gnzp-ekau.json?$$app_token=FwLXuOIVoXvCv7PRSwqJQ9NGJ&ccs_diagnosis_description=Cancer%20of%20prostate'

async function lalaGet(placeholderForURL){
    const dataRequest = await fetch(placeholderForURL);
    const theData = await dataRequest.json();
    const cleanData = theData.map(item=> ({
        age: item.gender,
        ethnicity: item.ethnicity
    }))
    return cleanData;
}

letsdothis = lalaGet(myURL)

console.log('erika.js finished');
