let extraDeliveryCharge = document.getElementById('extradeliverycharge')
let extraMemory = document.getElementById('extramemory')
let extraStorage = document.getElementById('extrastoragecost');
const bestPrice = 1299;

// Total Funtion
function total() {
    const totalPrice = bestPrice + parseFloat(extraDeliveryCharge.innerText) + parseFloat(extraMemory.innerText) + parseFloat(extraStorage.innerText);
    document.getElementById('totalprice').innerText = totalPrice;
    document.getElementById('totalp').innerText = totalPrice;
    return totalPrice;
}

// Memory

function memory(memoryValue) {
    extraMemory.innerText = memoryValue;
}
document.getElementById('extraMemory').addEventListener('click', function () {
    memory(180);
    total();

})

document.getElementById('baseMemory').addEventListener('click', function () {
    memory(0);
    total();

})

// Storage

function storage(storageValue) {
    extraStorage.innerText = storageValue;
}

document.getElementById('storage').addEventListener('click', function () {
    storage(0);
    total();

})
document.getElementById('storage1').addEventListener('click', function () {
    storage(100);
    total();
})
document.getElementById('storage2').addEventListener('click', function () {
    storage(180);
    total();
})

// Delivery

function delivery(deliveryCost) {
    extraDeliveryCharge.innerText = deliveryCost;
}

document.getElementById('freedelivery').addEventListener('click', function () {
    delivery(0);
    total();
})
document.getElementById('deliverycharge').addEventListener('click', function () {
    delivery(20);
    total();
})

// promo code
document.getElementById('promo-code').addEventListener('click', function (event) {
    const couponName = document.getElementById('coupon-name');
    const coupon = couponName.value;
    if (coupon == 'stevekaku') {
        const getTotalPrice = total();
        const couponDiscountPercentage = 20 / 100;
        const discountPrice = getTotalPrice - (getTotalPrice * couponDiscountPercentage);
        document.getElementById('totalp').innerText = discountPrice;
        couponName.value = '';
    }

})






