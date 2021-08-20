



document.getElementById('phone-plus-button').addEventListener('click', function () {
    const phonePrice = quantityUpdate('phone', 1200, true);


});

document.getElementById('phone-minus-button').addEventListener('click', function () {
    const phonePrice = quantityUpdate('phone', 1200, false);

});


document.getElementById('case-plus-button').addEventListener('click', function () {

    const casePrice = quantityUpdate('case', 50, true);



});

document.getElementById('case-minus-button').addEventListener('click', function () {

    const casePrice = quantityUpdate('case', 50, false);



});



function quantityUpdate(product, price, buttonKey) {

    const quantityText = document.getElementById(product + '-quantity');
    let quantity = parseInt(quantityText.value);

    if (buttonKey == true) {
        quantity = quantity + 1;

        //   console.log(quantityValue);

    }
    else if (quantity > 0) {
        quantity = quantity - 1;

        //   console.log(quantityValue);


    }

    quantityText.value = quantity;

    //update price
    const itemPriceText = document.getElementById(product + '-item-price');
    // const itemPrice = parseInt(itemPriceText.innerText);
    itemPriceText.innerText = price * quantity;

    //  console.log(itemPriceText.innerText);
    subTotalPrice();
    tax();
    totalPrice();

}


function getPrice(priceId) {
    const priceText = document.getElementById(priceId);
    const itemPrice = parseFloat(priceText.innerText);
    return itemPrice;

}



function subTotalPrice() {
    const subTotal = document.getElementById('sub-total');

    const phonePrice = getPrice('phone-item-price');
    const casePrice = getPrice('case-item-price');


    subTotal.innerText = phonePrice + casePrice;
    return subTotal.innerText;

}

// tax calculation

function tax() {

    const subTotal = parseFloat(subTotalPrice());

    const taxField = document.getElementById('tax-rate');

    const taxRate = (7.5 / 100);
    const tax = subTotal * taxRate;

    taxField.innerText = tax;
    return taxField.innerText;



}

function totalPrice() {

    const totalPrice = document.getElementById('total-price');

    const subTotal = parseFloat(subTotalPrice());
    const taxAmount = parseFloat(tax());

    totalPrice.innerText = subTotal + taxAmount;


    //console.log(totalPrice);


}




