window.onresize = function(){ location.reload(); }

Chart.defaults.global.legend.display = true;
Chart.defaults.scale.gridLines.display = false;

const today = new Date();
const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

const jsonDateToday = today.toJSON();
const jsonDateYesterday = yesterday.toJSON();

console.log(jsonDateToday);
console.log(jsonDateYesterday);

const api_url_hist = "https://api.nomics.com/v1/currencies/sparkline?key=1e137867ca2750e7d2d854a3104dea88&ids=BTC,ETH,XRP,ZEC,LTC&start="+jsonDateYesterday+"&end="+jsonDateToday+""

const shadow = "0 -17px 43.9px -20px rgba(255, 0, 15, 0.15), 0 -14.5px 69.3px -20px rgba(255, 0, 15, 0.20), 0 -3.9px 67.7px -20px rgba(255, 0, 15, 0.25), 0 38px 56px -20px rgba(255, 0, 15, 0.32)"

async function getValues() {
    const response = await fetch(api_url_hist);
    const data = await response.json();
    
    const priceList1 = [(data[0].prices[3]),(data[0].prices[7]),(data[0].prices[11]),(data[0].prices[15]),(data[0].prices[19]),(data[0].prices[23])]
    const priceList2 = [(data[1].prices[3]),(data[1].prices[7]),(data[1].prices[11]),(data[1].prices[15]),(data[1].prices[19]),(data[1].prices[23])]
    const priceList3 = [(data[2].prices[3]),(data[2].prices[7]),(data[2].prices[11]),(data[2].prices[15]),(data[2].prices[19]),(data[2].prices[23])]
    const priceList4 = [(data[3].prices[3]),(data[3].prices[7]),(data[3].prices[11]),(data[3].prices[15]),(data[3].prices[19]),(data[3].prices[23])]
    const priceList5 = [(data[4].prices[3]),(data[4].prices[7]),(data[4].prices[11]),(data[4].prices[15]),(data[4].prices[19]),(data[4].prices[23])]
    
    var value1 = (Number(Number(data[0].prices[23]).toFixed(2)).toLocaleString());
    var value2 = (Number(Number(data[1].prices[23]).toFixed(2)).toLocaleString());
    var value3 = (Number(Number(data[2].prices[23]).toFixed(2)).toLocaleString());
    var value4 = (Number(Number(data[3].prices[23]).toFixed(2)).toLocaleString());
    var value5 = (Number(Number(data[4].prices[23]).toFixed(2)).toLocaleString());
    
    console.log(data);

    document.getElementById("value1").innerText = `1 BTC = $${value1}`
    document.getElementById("value2").innerText = `1 ETH = $${value2}`
    document.getElementById("value3").innerText = `1 LTC = $${value3}`
    document.getElementById("value4").innerText = `1 XRP = $${value4}`
    document.getElementById("value5").innerText = `1 ZEC = $${value5}`

    var percent1 = ((((data[0].prices[23]) - (data[0].prices[3])) / (data[0].prices[23]))*100).toFixed(2);
    var percent2 = ((((data[1].prices[23]) - (data[1].prices[3])) / (data[1].prices[23]))*100).toFixed(2);
    var percent3 = ((((data[2].prices[23]) - (data[2].prices[3])) / (data[2].prices[23]))*100).toFixed(2);
    var percent4 = ((((data[3].prices[23]) - (data[3].prices[3])) / (data[3].prices[23]))*100).toFixed(2);
    var percent5 = ((((data[4].prices[23]) - (data[4].prices[3])) / (data[4].prices[23]))*100).toFixed(2);

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
    var sign4; {
        if ((data[3].prices[3])<(data[3].prices[23])) {
            sign4 = "+";
        } else {
            sign4 = "";
        }
    }
    var sign5; {
        if ((data[4].prices[3])<(data[4].prices[23])) {
            sign5 = "+";
        } else {
            sign5 = "";
        }
    }

    document.getElementById("percent1").innerText = `1 Day ${sign1}${percent1}%`
    document.getElementById("percent2").innerText = `1 Day ${sign2}${percent2}%`
    document.getElementById("percent3").innerText = `1 Day ${sign3}${percent3}%`
    document.getElementById("percent4").innerText = `1 Day ${sign4}${percent4}%`
    document.getElementById("percent5").innerText = `1 Day ${sign5}${percent5}%`

    console.log(percent1);
    console.log(percent2);
    console.log(percent3);
    console.log(percent4);
    console.log(percent5);

    
    var lineColor1;
    if ((data[0].prices[3])<(data[0].prices[23])) {
        lineColor1 = "rgba(0,255,200,1)";
    } else {
        lineColor1 = "rgba(255,0,0,1)";
        document.getElementById("shadow1").style.boxShadow = shadow;
        document.getElementById("percent1").style.color = "rgba(255,0,0,1)";
    }

    
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Bitcoin',
            data: priceList1,
            borderColor: lineColor1,
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 4,
            fill: "false",
            shadowOffsetX: 7,
            shadowOffsetY: 7,
            shadowBlur: 20,
            shadowColor: lineColor1,
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 18,
                fontColor: '#01fdfe'
            }
        },
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
            label: 'Ethereum',
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
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 18,
                fontColor: '#01fdfe'
            }
        },
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
            label: 'Litecoin',
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
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 18,
                fontColor: '#01fdfe'
            }
        },
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

var lineColor4;
if ((data[3].prices[3])<(data[3].prices[23])) {
    lineColor4 = "rgba(0,255,200,1)";
} else {
    lineColor4 = "rgba(255,0,0,1)";
    document.getElementById("shadow4").style.boxShadow = shadow;
    document.getElementById("percent4").style.color = "rgba(255,0,0,1)";
}

var ctx = document.getElementById('myChart4').getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: 'Ripple',
        data: priceList4,
        borderColor: lineColor4,
        lineTension: "0",
        pointStyle: "circle",
        radius: "0",
        borderWidth: 4,
        fill: "false",
        shadowOffsetX: 7,
        shadowOffsetY: 7,
        shadowBlur: 20,
        shadowColor: lineColor4,
    }]
},
options: {
    legend: {
        labels: {
            boxWidth: 0,
            fontSize: 18,
            fontColor: '#01fdfe'
        }
    },
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

var lineColor5;
    if ((data[4].prices[3])<(data[4].prices[23])) {
        lineColor5 = "rgba(0,255,200,1)";
    } else {
        lineColor5 = "rgba(255,0,0,1)";
        document.getElementById("shadow5").style.boxShadow = shadow;
        document.getElementById("percent5").style.color = "rgba(255,0,0,1)";
    }

    
    var ctx = document.getElementById('myChart5').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Zcash',
            data: priceList5,
            borderColor: lineColor5,
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 4,
            fill: "false",
            shadowOffsetX: 7,
            shadowOffsetY: 7,
            shadowBlur: 20,
            shadowColor: lineColor5,
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 18,
                fontColor: '#01fdfe'
            }
        },
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



