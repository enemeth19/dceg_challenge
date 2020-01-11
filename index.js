console.log('erika.js is starting');

myURL = "https://health.data.ny.gov/resource/gnzp-ekau.json?app_token=FwLXuOIVoXvCv7PRSwqJQ9NGJ&ccs_diagnosis_description=Cancer%20of%20prostate"
// specification of the api

myData = async function getData(myURL) {
    const meData = await fetch(myURL);
        // await means that the async function will not be executed until the promise passes first
    const idata = await meData.json();
    const cleaned = idata.map(item => ({
        age: item.age_group,
        gender: item.gender,
    }))
    return cleaned
}

console.log('erika.js finished');
