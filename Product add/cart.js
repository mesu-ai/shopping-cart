const displayLocalStorageCart = () => {
    const items = getCart();

    for (const item in items) {
        displayItem(item);

    }

}

const addItem = () => {
    const itemField = document.getElementById('item-field');
    const item = itemField.value;
    itemField.value = '';

    if (!item) {
        return;
    }

    displayItem(item);

    addProductToCart(item);

}

const displayItem = item => {
    const itemContainer = document.getElementById('item-container');

    const li = document.createElement('li');
    li.innerText = item;

    itemContainer.appendChild(li);

}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);

    } else {
        cartObject = {};
    }

    return cartObject;

}

const addProductToCart = name => {
    const cart = getCart();

    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }

    // console.log(cart);

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const placeOrder = () => {
    document.getElementById('item-container').textContent = '';

    localStorage.removeItem('cart');
}

displayLocalStorageCart();