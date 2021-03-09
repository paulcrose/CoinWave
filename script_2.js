

Chart.defaults.global.legend.display = false;
Chart.defaults.scale.gridLines.display = false;

const today = new Date();
const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

const jsonDateToday = today.toJSON();
const jsonDateYesterday = yesterday.toJSON();

console.log(jsonDateToday);
console.log(jsonDateYesterday);

const api_url_hist = "https://api.nomics.com/v1/currencies/sparkline?key=1e137867ca2750e7d2d854a3104dea88&ids=BTC,ETH,XRP&start="+jsonDateYesterday+"&end="+jsonDateToday+""

const shadow = "0 -17px 43.9px -20px rgba(255, 0, 15, 0.15), 0 -14.5px 69.3px -20px rgba(255, 0, 15, 0.20), 0 -3.9px 67.7px -20px rgba(255, 0, 15, 0.25), 0 38px 56px -20px rgba(255, 0, 15, 0.32)"

async function getValues() {
    const response = await fetch(api_url_hist);
    const data = await response.json();
    
    const priceList = [(data[0].prices[3]),(data[0].prices[7]),(data[0].prices[11]),(data[0].prices[15]),(data[0].prices[19]),(data[0].prices[23])]
    const priceList2 = [(data[1].prices[3]),(data[1].prices[7]),(data[1].prices[11]),(data[1].prices[15]),(data[1].prices[19]),(data[1].prices[23])]
    const priceList3 = [(data[2].prices[3]),(data[2].prices[7]),(data[2].prices[11]),(data[2].prices[15]),(data[2].prices[19]),(data[2].prices[23])]
    
    var value1 = (Number(Number(data[0].prices[23]).toFixed(2)).toLocaleString());
    var value2 = (Number(Number(data[1].prices[23]).toFixed(2)).toLocaleString());
    var value3 = (Number(Number(data[2].prices[23]).toFixed(2)).toLocaleString());
    
    console.log(data);

    document.getElementById("value1").innerText = `1 BTC = $${value1}`
    document.getElementById("value2").innerText = `1 ETC = $${value2}`
    document.getElementById("value3").innerText = `1 XRP = $${value3}`

    var percent1 = ((((data[0].prices[23]) - (data[0].prices[3])) / (data[0].prices[23]))*100).toFixed(2);
    var percent2 = ((((data[1].prices[23]) - (data[1].prices[3])) / (data[1].prices[23]))*100).toFixed(2);
    var percent3 = ((((data[2].prices[23]) - (data[2].prices[3])) / (data[2].prices[23]))*100).toFixed(2);

    var sign1; {
        if ((data[0].prices[3])<(data[0].prices[23])) {
            sign1 = "+";
        } else {
            sign1 = "";
        }
    }
    var sign2; {
        if ((data[1].prices[3])<(data[1].prices[23])) {
            sign2 = "+";
        } else {
            sign2 = "";
        }
    }
    var sign3; {
        if ((data[2].prices[3])<(data[2].prices[23])) {
            sign3 = "+";
        } else {
            sign3 = "";
        }
    }

    document.getElementById("percent1").innerText = `1 Day ${sign1}${percent1}%`
    document.getElementById("percent2").innerText = `1 Day ${sign2}${percent2}%`
    document.getElementById("percent3").innerText = `1 Day ${sign3}${percent3}%`

    console.log(percent1);
    console.log(percent2);
    console.log(percent3);

    
    var lineColor;
    if ((data[0].prices[3])<(data[0].prices[23])) {
        lineColor = "rgba(0,255,200,1)";
    } else {
        lineColor = "rgba(255,0,0,1)";
        document.getElementById("shadow1").style.boxShadow = shadow;
    }

    
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: priceList,
            borderColor: lineColor,
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 4,
            fill: "false",
            shadowOffsetX: 7,
            shadowOffsetY: 7,
            shadowBlur: 20,
            shadowColor: lineColor,
        }]
    },
    options: {
        aspectRatio: 1,
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});

    var lineColor2;
    if ((data[1].prices[3])<(data[1].prices[23])) {
        lineColor2 = "rgba(0,255,200,1)";
    } else {
        lineColor2 = "rgba(255,0,0,1)";
        document.getElementById("shadow2").style.boxShadow = shadow;
        document.getElementById("percent2").style.color = "rgba(255,0,0,1)";
    }

    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: priceList2,
            borderColor: lineColor2,
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 4,
            fill: "false",
            shadowOffsetX: 7,
            shadowOffsetY: 7,
            shadowBlur: 20,
            shadowColor: lineColor2,
        }]
    },
    options: {
        aspectRatio: 1,
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});

    var lineColor3;
    if ((data[2].prices[3])<(data[2].prices[23])) {
        lineColor3 = "rgba(0,255,200,1)";
    } else {
        lineColor3 = "rgba(255,0,0,1)";
        document.getElementById("shadow3").style.boxShadow = shadow;
        document.getElementById("percent3").style.color = "rgba(255,0,0,1)";
    }


    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: priceList3,
            borderColor: lineColor3,
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 4,
            fill: "false",
            shadowOffsetX: 7,
            shadowOffsetY: 7,
            shadowBlur: 20,
            shadowColor: lineColor3,
        }]
    },
    options: {
        aspectRatio: 1,
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    }
});

    }

getValues();



