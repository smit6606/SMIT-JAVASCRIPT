// currency-converter.js

// Exchange rates object
const exchangeRates = {
    USD: { INR: 82, EUR: 0.85, AUD: 1.5, CAD: 1.3, DZD: 136 },
    INR: { USD: 0.012, EUR: 0.010, AUD: 0.018, CAD: 0.016, DZD: 1.65 },
    EUR: { USD: 1.18, INR: 100, AUD: 1.76, CAD: 1.53, DZD: 160 },
    AUD: { USD: 0.67, INR: 55, EUR: 0.57, CAD: 0.87, DZD: 90 },
    CAD: { USD: 0.77, INR: 60, EUR: 0.65, AUD: 1.15, DZD: 102 },
    DZD: { USD: 0.0074, INR: 0.61, EUR: 0.0063, AUD: 0.011, CAD: 0.0098 },
};

document.getElementById('currency-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Validate input
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }
    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = 'From and To currencies must be different.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    if (rate) {
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = 'Conversion rate not available.';
    }
});
