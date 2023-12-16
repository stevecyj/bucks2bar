// 假設您已經有了以下的數據
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var income = [];
var expenses = [];

for (var i = 0; i < months.length; i++) {
  var month = months[i].toLowerCase();
  var incomeInput = document.getElementById(month + "-income");
  var expensesInput = document.getElementById(month + "-expenses");

  if (incomeInput && incomeInput.value) {
    income.push(Number(incomeInput.value));
  } else {
    income.push(0);
  }

  if (expensesInput && expensesInput.value) {
    expenses.push(Number(expensesInput.value));
  } else {
    expenses.push(0);
  }
}

var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: income,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: expenses,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function updateChart() {
  // 獲取新的收入和支出數據
  var income = [];
  var expenses = [];
  for (var i = 0; i < months.length; i++) {
    var month = months[i].toLowerCase();
    var incomeInput = document.getElementById(month + "-income");
    var expensesInput = document.getElementById(month + "-expenses");

    if (incomeInput && incomeInput.value) {
      income.push(Number(incomeInput.value));
    } else {
      income.push(0);
    }

    if (expensesInput && expensesInput.value) {
      expenses.push(Number(expensesInput.value));
    } else {
      expenses.push(0);
    }
  }

  // 更新圖表的數據
  myChart.data.datasets[0].data = income;
  myChart.data.datasets[1].data = expenses;
  myChart.update();
}

document.getElementById("chart-tab").addEventListener("click", function () {
  // 在這裡運行您的代碼
  updateChart();
});

// document.getElementById("download").addEventListener("click", function () {
//   var canvas = document.getElementById("myChart");
//   var imgURL = canvas.toDataURL("image/png");

//   var link = document.createElement("a");
//   link.href = imgURL;
//   link.download = "chart.png";
//   link.click();
// });

function download() {
  var canvas = document.getElementById("myChart");
  var imgURL = canvas.toDataURL("image/png");

  var link = document.createElement("a");
  link.href = imgURL;
  link.download = "chart.png";
  link.click();
}
