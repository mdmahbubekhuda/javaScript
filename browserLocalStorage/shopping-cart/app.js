const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value
    const quantity = quantityField.value
    productField.value = ''
    quantityField.value = ''

    displayProduct(product, quantity)
    saveToLocalStorage(product, quantity)

}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product}:${quantity}`
    ul.appendChild(li)
}

const getShoppingCart = () => {
    const storedCart = localStorage.getItem('cart')
    let cart = {}
    if (storedCart) cart = JSON.parse(storedCart)
    return cart
}

const saveToLocalStorage = (product, quantity) => {
    const cart = getShoppingCart()
    cart[product] = quantity
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
}

// display cart from local storage
const displayLocalStorage = () => {
    const savedCart = getShoppingCart()
    console.log(savedCart)
    for (product in savedCart) {
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayLocalStorage()