const amountInput = document.getElementById("amount");
const discountAmountInput = document.getElementById("discount-amount");
const couponInput = document.getElementById("coupon-input");
const finalPayInput = document.getElementById("pay");
const form = document.querySelector("form");

const coupons = [
    {name: "HELLO5", discount: 5},
    {name: "SAVE10", discount: 10},
    {name: "MIXED15", discount: 15},
    {name: "DIVE20", discount: 20},
    {name: "MINE25", discount: 25},

];

const nairaFormatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2
});

const updateValues = () => {
    const amount = Number(amountInput.value);
    const userCode = couponInput.value.trim().toUpperCase();

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount greater than 0");
        return;
    }
const foundCoupon = coupons.find(c => c.name === userCode);
    let percentage = 0;
    if(foundCoupon){
        percentage = foundCoupon.discount;
    }else if (userCode !== ""){
        alert("Invalid Coupon Code")
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