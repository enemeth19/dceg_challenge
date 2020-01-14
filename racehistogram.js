// Creating an array containing the races of all of the patients who had prostate cancer diagnoses
const countRaces = []
for (var i = 0; i < myData.length; i++) {
    countRaces.push(myData[i].race)
}

// A checkpoint that returns an array containing the index of the patient and his/her race
console.log(countRaces)

// A function that returns an object with number of prostate cancer patients associated with each racial group
function getRaceCounts(str, field) {
    const raceCount = [];
    for (var i = 0; i < myData.length; i++) {
        if (myData[i][field] == str) {                 
            if (raceCount[myData[i].race] == null) {
                raceCount[myData[i].race] = 1
            }
            else {
                raceCount[myData[i].race] += 1
            }
        }
    }
    return raceCount
}

// A checkpoint that returns an object with the number of diagnoses associated with patients who are Black/African American
console.log(getRaceCounts('Black/African American', 'race'))

function plotData(str, field) {
    const dataToPlot = {
        x: Object.keys(getRaceCounts(str, field)),
        y: Object.values(getRaceCounts(str, field)),
        type: 'bar'
      };
    return dataToPlot;
}

const getHistogram = [
    plotData('Black/African American', 'race'), 
    plotData('Multi-racial', 'race'),     
    plotData('Other Race', 'race'), // 'Other Race' includes Native Americans and Asian/Pacific Islander
    plotData('White', 'race')
];

const raceHistogramLayout = {
    title: 'Frequencies of Races in Prostate Cancer Diagnoses',
    font: {
        family: 'Raleway, sans-serif'
    },
    showlegend: false,
    xaxis: {
        title: 'Racial Group',
        tickangle: -45
    },
    yaxis: {
        title: 'Frequency',
        gridwidth: 2
    }
  };

Plotly.newPlot('racehistogram', raceHistogramLayout, layout);