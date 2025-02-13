let totalBudget = 0;
let totalIncome = 0;
let totalExpenses = 0;

const incomeAmount = document.getElementById("income-amount");
const incomeNote = document.getElementById("income-note");
const incomeDate = document.getElementById("income-date");
const addIncomeButton = document.getElementById("add-income");

const expenseCategory = document.getElementById("expense-category");
const expenseAmount = document.getElementById("expense-amount");
const expenseNote = document.getElementById("expense-note");
const expenseDate = document.getElementById("expense-date");
const addExpenseButton = document.getElementById("add-expense");

const amountDisplay = document.getElementById("amount");
const totalIncomeDisplay = document.getElementById("total-income");
const totalExpensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("balance-amount");

const transactionList = document
  .getElementById("transaction-list")
  .getElementsByTagName("tbody")[0];

const expenseChartCtx = document
  .getElementById("expense-chart")
  .getContext("2d");
let expenseChart;

// Initialize Chart
function initializeChart() {
  expenseChart = new Chart(expenseChartCtx, {
    type: "bar",
    data: {
      labels: [],
      datasets: [
        {
          label: "Expenses",
          data: [],
          backgroundColor: "#587ef4",
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
}

// Update Chart
function updateChart(category, amount) {
  const index = expenseChart.data.labels.indexOf(category);
  if (index === -1) {
    expenseChart.data.labels.push(category);
    expenseChart.data.datasets[0].data.push(amount);
  } else {
    expenseChart.data.datasets[0].data[index] += amount;
  }
  expenseChart.update();
}

// Add Income
addIncomeButton.addEventListener("click", () => {
  const income = parseFloat(incomeAmount.value);
  if (isNaN(income) || income <= 0) return;

  totalIncome += income;
  totalBudget += income;
  updateDisplays();

  const newRow = transactionList.insertRow();
  newRow.innerHTML = `
        <td>${incomeDate.value}</td>
        <td>Income</td>
        <td>+${income}</td>
        <td>${incomeNote.value}</td>
        <td>Income</td>
    `;

  incomeAmount.value = "";
  incomeNote.value = "";
  incomeDate.value = "";
});

// Add Expense
addExpenseButton.addEventListener("click", () => {
  const expense = parseFloat(expenseAmount.value);
  if (isNaN(expense) || expense <= 0) return;

  totalExpenses += expense;
  totalBudget -= expense;
  updateDisplays();

  const category = expenseCategory.value;
  const newRow = transactionList.insertRow();
  newRow.innerHTML = `
        <td>${expenseDate.value}</td>
        <td>${category}</td>
        <td>-${expense}</td>
        <td>${expenseNote.value}</td>
        <td>Expense</td>
    `;

  updateChart(category, expense);

  expenseAmount.value = "";
  expenseNote.value = "";
  expenseDate.value = "";
});

// Update Displays
function updateDisplays() {
  amountDisplay.innerText = totalBudget;
  totalIncomeDisplay.innerText = totalIncome;
  totalExpensesDisplay.innerText = totalExpenses;
  balanceDisplay.innerText = totalBudget;
}

// Initialize Chart on Load
initializeChart();
