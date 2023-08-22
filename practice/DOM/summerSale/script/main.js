// function get element using querySelector
function getElement(selector) {
    const element = document.querySelector(selector)
    return element
}

// get total price and add title to cart
const cards = document.querySelectorAll('.card')
let totalPrice = 0
let discount = 0
let total = 0
for (const card of cards) {
    card.addEventListener('click', function () {
        // title display
        const productTitle = this.querySelector('h2').innerText

        const selectItemDisplay = getElement('#item-title-display')
        const childCount = selectItemDisplay.childElementCount

        const li = document.createElement('li')
        li.innerText = `${childCount + 1}. ${productTitle}`

        selectItemDisplay.appendChild(li)

        // total price (products)
        const productPrice = parseFloat(this.querySelector('span').innerText)
        totalPrice += productPrice

        const priceDisplay = getElement('#total-price');
        priceDisplay.innerText = totalPrice.toFixed(2)

        // grand total
        total = totalPrice
        const totalDisplay = getElement('#total')
        totalDisplay.innerText = total.toFixed(2)

        // activate coupon button
        const couponBtn = getElement('#btn-coupon');
        (totalPrice >= 200) ? couponBtn.removeAttribute('disabled') : couponBtn.setAttribute('disabled', '')

        // discount
        const inputCoupon = getElement('#input-coupon')
        const discountDisplay = getElement('#discount')
        couponBtn.addEventListener('click', function (event) {
            event.stopImmediatePropagation()
            if (inputCoupon.value === 'SELL200') {
                discount = totalPrice * 0.2
                discountDisplay.innerText = discount.toFixed(2)
                totalDisplay.innerText = (totalPrice - discount).toFixed(2)
                inputCoupon.value = ''
                couponBtn.setAttribute('disabled', 'true')
            }
            else return alert('Invalid coupon code')
        })

        // activate purchase button
        const purchaseBtn = getElement('#btn-purchase button');
        (totalPrice > 0) ? purchaseBtn.removeAttribute('disabled') : purchaseBtn.setAttribute('disabled', '')

        // modal go home button -reset
        document.querySelector('#btn-modal-home').addEventListener('click', function () {
            // reset display
            priceDisplay.innerText = '0.00'
            discountDisplay.innerText = '0.00'
            totalDisplay.innerText = '0.00'
            selectItemDisplay.innerHTML = ``
            // reset calculation variables
            totalPrice = 0
            discount = 0
            total = 0
            // disable buttons
            couponBtn.setAttribute('disabled', 'true')
            purchaseBtn.setAttribute('disabled', 'true')
        })
    })
}
