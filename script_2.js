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


async function getValues() {
    const response = await fetch(api_url_hist);
    const data = await response.json();
    
    const priceList = [(data[0].prices[3]),(data[0].prices[7]),(data[0].prices[11]),(data[0].prices[15]),(data[0].prices[19]),(data[0].prices[23])]
    const priceList2 = [(data[1].prices[3]),(data[1].prices[7]),(data[1].prices[11]),(data[1].prices[15]),(data[1].prices[19]),(data[1].prices[23])]
    const priceList3 = [(data[2].prices[3]),(data[2].prices[7]),(data[2].prices[11]),(data[2].prices[15]),(data[2].prices[19]),(data[2].prices[23])]
    
    document.getElementById("value1").innerText = `${data[0].prices[23]}`
    document.getElementById("value2").innerText = `${data[1].prices[23]}`
    document.getElementById("value3").innerText = `${data[2].prices[23]}`

    console.log(data);

    
    var lineColor;
    if ((data[0].prices[3])<(data[0].prices[23])) {
        lineColor = "rgba(0,255,0,1)";
    } else {
        lineColor = "rgba(255,0,0,1)";
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
        lineColor2 = "rgba(0,255,0,1)";
    } else {
        lineColor2 = "rgba(255,0,0,1)";
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
        lineColor3 = "rgba(0,255,0,1)";
    } else {
        lineColor3 = "rgba(255,0,0,1)";
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



