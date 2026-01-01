const amountInput = document.getElementById("amount");
const discountSelect = document.getElementById("discount-percentage");
const discountAmountInput = document.getElementById("discount-amount");
const finalPayInput = document.getElementById("pay");
const form = document.querySelector("form");

const nairaFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2
});

const updateValues = () => {
    const amount = Number(amountInput.value);
    const percentage = Number(discountSelect.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0");
        return;
    }

    const discount = (amount * percentage) / 100;
    const finalPay = amount - discount;

    discountAmountInput.value = nairaFormatter.format(discount);
    finalPayInput.value = nairaFormatter.format(finalPay);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    updateValues();
});