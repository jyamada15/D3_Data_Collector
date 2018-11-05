var abbrL = [];
var ageL = [];
var stateL = [];
var obesityL = [];
var incomeL = [];
var healthcareL = [];
var povertyL = [];
var smokesL = []



d3.json("api").then(function (response) {
    var abbr = response.data;
    var age = response.data;
    var healthcare = response.data;
    var income = response.data;
    var incomeMoe = response.data;
    var obesity = response.data;
    var state = response.data;
    var smokes = response.data;
    var poverty = response.data;


    var rem = 49;
    for (var j = 0; j < rem; j++) {

        obesityL.push(+(obesity[j].obesity).toFixed(2));
        povertyL.push(+(poverty[j].poverty).toFixed(2));
        smokesL.push(+(smokes[j].smokes).toFixed(2));
        ageL.push(+(age[j].age).toFixed(2));
        healthcareL.push(+(healthcare[j].healthcare).toFixed(2));
        stateL.push(state[j].state);
            };

    renderScatterChart(obesityL, povertyL, 'obesity-poverty', 'Obesity(%)','Poverty(%)', '#6cc3f9');
    renderScatterChart(obesityL, ageL, 'obesity-age', 'Obesity(%)','Age', '#FFA07A');
renderScatterChart(povertyL, smokesL, 'poverty-smokers', 'Poverty(%)', 'Smokers(%)','#90EE90');
    renderScatterChart(healthcareL, smokesL, 'healthcare-smokers', 'Healthcare(%)', 'Smokers(%)','#20B2AA');
})


function renderScatterChart(x_values, y1, chartname, name1, name2, colors) {
    var trace1 = {
        x: x_values,
        y: y1,
        text: stateL,
        mode: 'markers',
        marker:{
            size:10,
        },
        line: {
            color: colors,
            width:2
        },
    };

    var data = [trace1];

    var layout = {
        autosize: true,
        title: name1 + ' vs ' + name2,
        height: 350,
        yaxis: {
            title: name1,
            tickformat: '00.,0%'
        },
        xaxis: {
            title: name2,
            tickformat: '0,0.0%'
        }        
    };

    Plotly.newPlot(chartname, data, layout);
};