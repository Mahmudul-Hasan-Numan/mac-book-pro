// Memory Section 
function memoryAMount(price) {
    const memoryPrice = document.getElementById('memory-cost');
    memoryPrice.innerText = price;
    return memoryPrice;

}
document.getElementById('free-memory').addEventListener('click', function () {
    memoryAMount(0)
    getTotalAmount()
})

document.getElementById('buy-memory').addEventListener('click', function () {
    memoryAMount(180)
    getTotalAmount()
})

// Storage Section 
function storageTotal(price) {
    const storagePrice = document.getElementById('storage-price');
    storagePrice.innerText = price;

    return storagePrice
}
document.getElementById('free-storage').addEventListener('click', function () {
    storageTotal(0)
    getTotalAmount()
})
document.getElementById('storage-minimum-price').addEventListener('click', function () {
    storageTotal(100)
    getTotalAmount()
})
document.getElementById('storage-highest-price').addEventListener('click', function () {
    storageTotal(180)
    getTotalAmount()
})

// Delivery Section 
function deliveryChaarge(price) {
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryTotal = deliveryCost.innerText;
    deliveryCost.innerText = (price);

    return deliveryTotal;
}
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryChaarge(0)
    getTotalAmount()
})

document.getElementById('delivery-with-charge').addEventListener('click', function () {
    deliveryChaarge(20)
    getTotalAmount()

})

function getTotalAmount() {
    const bestPrice = document.getElementById('best-price');
    const bestAmount = parseInt(bestPrice.innerText);
    const memoryprice = document.getElementById('memory-cost');
    const memoryTotal = parseInt(memoryprice.innerText);
    const storageAmount = document.getElementById('storage-price');
    const storageValue = parseInt(storageAmount.innerText);
    const deliveryCharge = document.getElementById('delivery-cost');
    const deliveryTotal = parseInt(deliveryCharge.innerText);
    const totalValue = document.getElementById('total-price');
    const totalPrice = totalValue.innerText;
    totalValue.innerText = bestAmount + memoryTotal + storageValue + deliveryTotal;
    const discountValue = document.getElementById('discouunt-value');
    discountValue.innerText = totalValue.innerText;
}