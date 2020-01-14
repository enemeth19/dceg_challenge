// Creating an array containing the health service areas (HSA) of all of the patients who had prostate cancer diagnoses
const countHSA = []
for (var i = 0; i < myData.length; i++) {
    countHSA.push(myData[i].health_service_area)
}

// A checkpoint that returns an array containing the index of the patient and his/her HSA
console.log(countHSA)

// A function that returns an object with number of prostate cancer patients associated with each HSA
function getHSAcounts(str, field) {
    const HSACount = [];
    for (var i = 0; i < myData.length; i++) {
        if (myData[i][field] == str) {                 
            if (HSACount[myData[i].health_service_area] == null) {
                HSACount[myData[i].health_service_area] = 1
            }
            else {
                HSACount[myData[i].health_service_area] += 1
            }
        }
    }
    return HSACount
}

// A checkpoint that returns an object with the number of diagnoses associated with patients whose HSA is New York City
console.log(getHSAcounts('New York City', 'health_service_area'))

function plotData(str, field) {
    const dataToPlot = {
        x: Object.keys(getHSAcounts(str, field)),
        y: Object.values(getHSAcounts(str, field)),
        type: 'bar'
      };
    return dataToPlot;
}

const getHSAhistogram = [
    plotData('Capital/Adirondack', 'health_service_area'),    
    plotData('Central NY', 'health_service_area'),
    plotData('Finger Lakes', 'health_service_area'),
    plotData('Hudson Valley', 'health_service_area'),
    plotData('Long Island', 'health_service_area'),
    plotData('New York City', 'health_service_area'),
    plotData('Southern Tier', 'health_service_area'),
    plotData('Western NY', 'health_service_area')
];

const HSAhistogramLayout = {
    title: 'Frequencies of Health Service Areas with Prostate Cancer Diagnoses',
    font: {
        family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
        title: 'Health Service Area',
        tickangle: -45
    },
    yaxis: {
        title: 'Frequency',
        gridwidth: 2
    }
  };

Plotly.newPlot('hsahistogram', getHSAhistogram, HSAhistogramLayout);