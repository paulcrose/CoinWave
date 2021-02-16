const today = new Date();
const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

const jsonDateToday = today.toJSON();
const jsonDateYesterday = yesterday.toJSON();

console.log(jsonDateToday);
console.log(jsonDateYesterday);


const api_url_price = "https://api.nomics.com/v1/currencies/ticker?key=1e137867ca2750e7d2d854a3104dea88&ids=BTC&interval=1d,30d&convert=USD&per-page=100&page=1"
const api_url_hist = "https://api.nomics.com/v1/currencies/sparkline?key=1e137867ca2750e7d2d854a3104dea88&ids=BTC&start="+jsonDateYesterday+"&end="+jsonDateToday+""


async function getValues() {
    const response = await fetch(api_url_hist);
    const data = await response.json();
    
    const priceList = [(data[0].prices[3]),(data[0].prices[7]),(data[0].prices[11]),(data[0].prices[15]),(data[0].prices[19]),(data[0].prices[23])]
    console.log(data);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: priceList,
            borderColor: "rgba(255,0,0,0.5)",
            lineTension: "0",
            pointStyle: "circle",
            radius: "0",
            borderWidth: 2,
            fill: "false",
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});

}

getValues();

async function getPrice() {
    const response = await fetch(api_url_price);
    const data = await response.json();
    
    console.log(data[0].price);
    document.getElementById("value").innerText = `${data[0].price}`
    
}

getPrice();