Chart.defaults.global.legend.display = true;
Chart.defaults.scale.gridLines.display = false;
Chart.defaults.global.defaultFontFamily = "din-2014, sans-serif";

const shadow =
  "0 -20px 55px -15px rgba(255, 0, 15, 0.18), 0 -16px 69.3px -15px rgba(255, 0, 15, 0.25), 0 -3.9px 67.7px -15px rgba(255, 0, 15, 0.25), 0 38px 64px -15px rgba(255, 0, 15, 0.3)";

const api_url_BTC =
  "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=BTC&market=USD&interval=60min&apikey=LRTQF65CI2MDFNO6";
const api_url_ETH =
  "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ETH&market=USD&interval=60min&apikey=LRTQF65CI2MDFNO6";
const api_url_LTC =
  "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=LTC&market=USD&interval=60min&apikey=LRTQF65CI2MDFNO6";
const api_url_XRP =
  "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=XRP&market=USD&interval=60min&apikey=LRTQF65CI2MDFNO6";
const api_url_ZEC =
  "https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=ZEC&market=USD&interval=60min&apikey=LRTQF65CI2MDFNO6";

async function getValuesBTC() {
  const response = await fetch(api_url_BTC);
  const dataBTC = await response.json();
  const pricesBTC = dataBTC["Time Series Crypto (60min)"];

  const priceList1 = [
    pricesBTC[Object.keys(pricesBTC)[0]]["1. open"],
    pricesBTC[Object.keys(pricesBTC)[4]]["1. open"],
    pricesBTC[Object.keys(pricesBTC)[8]]["1. open"],
    pricesBTC[Object.keys(pricesBTC)[12]]["1. open"],
    pricesBTC[Object.keys(pricesBTC)[16]]["1. open"],
    pricesBTC[Object.keys(pricesBTC)[20]]["1. open"],
  ];

  var value1 = Number(Number(priceList1[0]).toFixed(2)).toLocaleString();

  document.getElementById("value1").innerText = `1 BTC = $${value1}`;

  var percent1 = (
    ((priceList1[5] - priceList1[0]) / priceList1[5]) *
    100
  ).toFixed(2);

  var sign1;
  {
    if (priceList1[0] < priceList1[5]) {
      sign1 = "+";
    } else {
      sign1 = "";
    }
  }

  document.getElementById("percent1").innerText = `${sign1}${percent1}%`;

  var lineColor1 = "#ffffff";
  if (priceList1[0] < priceList1[5]) {
    lineColor1 = "rgba(0,255,160,1)";
  } else {
    lineColor1 = "rgba(245,0,15,1)";
    document.getElementById("shadow1").style.boxShadow = shadow;
    document.getElementById("percent1").style.color = "rgba(250,0,15,1)";
    document.getElementById("percent1").style.fontWeight = "600";
  }

  var ctx = document.getElementById("myChart1").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Bitcoin",
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
        },
      ],
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 18,
          fontColor: "#01fdfe",
        },
      },
      aspectRatio: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
async function getValuesETH() {
  const response = await fetch(api_url_ETH);
  const dataETH = await response.json();
  const pricesETH = dataETH["Time Series Crypto (60min)"];

  const priceList2 = [
    pricesETH[Object.keys(pricesETH)[0]]["1. open"],
    pricesETH[Object.keys(pricesETH)[4]]["1. open"],
    pricesETH[Object.keys(pricesETH)[8]]["1. open"],
    pricesETH[Object.keys(pricesETH)[12]]["1. open"],
    pricesETH[Object.keys(pricesETH)[16]]["1. open"],
    pricesETH[Object.keys(pricesETH)[20]]["1. open"],
  ];

  var value2 = Number(Number(priceList2[0]).toFixed(2)).toLocaleString();

  document.getElementById("value2").innerText = `1 ETH = $${value2}`;

  var percent2 = (
    ((priceList2[5] - priceList2[0]) / priceList2[5]) *
    100
  ).toFixed(2);

  var sign2;
  {
    if (priceList2[0] < priceList2[5]) {
      sign2 = "+";
    } else {
      sign2 = "";
    }
  }

  document.getElementById("percent2").innerText = `${sign2}${percent2}%`;

  var lineColor2 = "#ffffff";
  if (priceList2[0] < priceList2[5]) {
    lineColor2 = "rgba(0,255,160,1)";
  } else {
    lineColor2 = "rgba(245,0,15,1)";
    document.getElementById("shadow2").style.boxShadow = shadow;
    document.getElementById("percent2").style.color = "rgba(250,0,15,1)";
    document.getElementById("percent2").style.fontWeight = "600";
  }

  var ctx = document.getElementById("myChart2").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Ethereum",
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
        },
      ],
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 18,
          fontColor: "#01fdfe",
        },
      },
      aspectRatio: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
async function getValuesLTC() {
  const response = await fetch(api_url_LTC);
  const dataLTC = await response.json();
  const pricesLTC = dataLTC["Time Series Crypto (60min)"];

  const priceList3 = [
    pricesLTC[Object.keys(pricesLTC)[0]]["1. open"],
    pricesLTC[Object.keys(pricesLTC)[4]]["1. open"],
    pricesLTC[Object.keys(pricesLTC)[8]]["1. open"],
    pricesLTC[Object.keys(pricesLTC)[12]]["1. open"],
    pricesLTC[Object.keys(pricesLTC)[16]]["1. open"],
    pricesLTC[Object.keys(pricesLTC)[20]]["1. open"],
  ];

  var value3 = Number(Number(priceList3[0]).toFixed(2)).toLocaleString();

  document.getElementById("value3").innerText = `1 LTC = $${value3}`;

  var percent3 = (
    ((priceList3[5] - priceList3[0]) / priceList3[5]) *
    100
  ).toFixed(2);

  var sign3;
  {
    if (priceList3[0] < priceList3[5]) {
      sign3 = "+";
    } else {
      sign3 = "";
    }
  }

  document.getElementById("percent3").innerText = `${sign3}${percent3}%`;

  var lineColor3 = "#ffffff";
  if (priceList3[0] < priceList3[5]) {
    lineColor3 = "rgba(0,255,160,1)";
  } else {
    lineColor3 = "rgba(245,0,15,1)";
    document.getElementById("shadow3").style.boxShadow = shadow;
    document.getElementById("percent3").style.color = "rgba(250,0,15,1)";
    document.getElementById("percent3").style.fontWeight = "600";
  }

  var ctx = document.getElementById("myChart3").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Litecoin",
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
        },
      ],
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 18,
          fontColor: "#01fdfe",
        },
      },
      aspectRatio: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
async function getValuesXRP() {
  const response = await fetch(api_url_XRP);
  const dataBTC = await response.json();
  const pricesXRP = dataBTC["Time Series Crypto (60min)"];

  const priceList4 = [
    pricesXRP[Object.keys(pricesXRP)[0]]["1. open"],
    pricesXRP[Object.keys(pricesXRP)[4]]["1. open"],
    pricesXRP[Object.keys(pricesXRP)[8]]["1. open"],
    pricesXRP[Object.keys(pricesXRP)[12]]["1. open"],
    pricesXRP[Object.keys(pricesXRP)[16]]["1. open"],
    pricesXRP[Object.keys(pricesXRP)[20]]["1. open"],
  ];

  var value4 = Number(Number(priceList4[0]).toFixed(2)).toLocaleString();

  document.getElementById("value4").innerText = `1 XRP = $${value4}`;

  var percent4 = (
    ((priceList4[5] - priceList4[0]) / priceList4[5]) *
    100
  ).toFixed(2);

  var sign4;
  {
    if (priceList4[0] < priceList4[5]) {
      sign4 = "+";
    } else {
      sign4 = "";
    }
  }

  document.getElementById("percent4").innerText = `${sign4}${percent4}%`;

  var lineColor4 = "#ffffff";
  if (priceList4[0] < priceList4[5]) {
    lineColor4 = "rgba(0,255,160,1)";
  } else {
    lineColor4 = "rgba(245,0,15,1)";
    document.getElementById("shadow4").style.boxShadow = shadow;
    document.getElementById("percent4").style.color = "rgba(250,0,15,1)";
    document.getElementById("percent4").style.fontWeight = "600";
  }

  var ctx = document.getElementById("myChart4").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Ripple",
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
        },
      ],
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 18,
          fontColor: "#01fdfe",
        },
      },
      aspectRatio: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
async function getValuesZEC() {
  const response = await fetch(api_url_ZEC);
  const dataZEC = await response.json();
  const pricesZEC = dataZEC["Time Series Crypto (60min)"];

  const priceList5 = [
    pricesZEC[Object.keys(pricesZEC)[0]]["1. open"],
    pricesZEC[Object.keys(pricesZEC)[4]]["1. open"],
    pricesZEC[Object.keys(pricesZEC)[8]]["1. open"],
    pricesZEC[Object.keys(pricesZEC)[12]]["1. open"],
    pricesZEC[Object.keys(pricesZEC)[16]]["1. open"],
    pricesZEC[Object.keys(pricesZEC)[20]]["1. open"],
  ];

  var value5 = Number(Number(priceList5[0]).toFixed(2)).toLocaleString();

  document.getElementById("value5").innerText = `1 ZEC = $${value5}`;

  var percent5 = (
    ((priceList5[5] - priceList5[0]) / priceList5[5]) *
    100
  ).toFixed(2);

  var sign5;
  {
    if (priceList5[0] < priceList5[5]) {
      sign5 = "+";
    } else {
      sign5 = "";
    }
  }

  document.getElementById("percent5").innerText = `${sign5}${percent5}%`;

  var lineColor5 = "#ffffff";
  if (priceList5[0] < priceList5[5]) {
    lineColor5 = "rgba(0,255,160,1)";
  } else {
    lineColor5 = "rgba(245,0,15,1)";
    document.getElementById("shadow5").style.boxShadow = shadow;
    document.getElementById("percent5").style.color = "rgba(250,0,15,1)";
    document.getElementById("percent5").style.fontWeight = "600";
  }

  var ctx = document.getElementById("myChart5").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Zcash",
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
        },
      ],
    },
    options: {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 18,
          fontColor: "#01fdfe",
        },
      },
      aspectRatio: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
}
getValuesBTC();
getValuesETH();
getValuesLTC();
getValuesXRP();
getValuesZEC();
