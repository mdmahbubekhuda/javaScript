// function get element using querySelector
function getElementFn(selector) {
    const element = document.querySelector(selector)
    return element
}
// display product title
function productNameFn(select) {
    // product title
    const productTitle = select.closest('.card-body').querySelector('.card-title').innerText
    const itemDisplay = getElementFn('#item-title-display')
    // create li element
    const li = document.createElement('li')
    li.classList.add('dynamic-li', 'ml-8', 'p-4')
    li.innerHTML = `
    <div class="flex gap-2 items-center">
    <p>${productTitle}</p>
    <button class="btn-remove btn btn-secondary btn-sm text-white">Remove</button>
    </div>`
    // add item to cart
    itemDisplay.appendChild(li)
}
// display prices
function productPricesFn(select) {

    const productPrice = parseFloat(select.closest('.card-body').querySelector('span').innerText)
    subTotal += productPrice
    // set subTotal
    const subTotalDisplay = getElementFn('#sub-total');
    subTotalDisplay.innerText = subTotal.toFixed(2)
    // set grand total (without discount)
    grandTotal = subTotal
    const grandTotalDisplay = getElementFn('#grand-total')
    grandTotalDisplay.innerText = grandTotal.toFixed(2)

    // activate purchase button
    const purchaseBtn = getElementFn('#btn-purchase button');
    (subTotal > 0) ? purchaseBtn.removeAttribute('disabled') : purchaseBtn.setAttribute('disabled', '')

    // activate coupon button
    const couponBtn = getElementFn('#btn-coupon');
    (subTotal >= 200) ? couponBtn.removeAttribute('disabled') : couponBtn.setAttribute('disabled', '')

}
// discount
function productDiscountFn() {
    const inputCoupon = getElementFn('#input-coupon')
    const discountDisplay = getElementFn('#discount')
    const grandTotalDisplay = getElementFn('#grand-total')
    const couponBtn = getElementFn('#btn-coupon')

    if (inputCoupon.value === 'SELL200') {
        discount = subTotal * 0.2
        discountDisplay.innerText = discount.toFixed(2)
        grandTotalDisplay.innerText = (subTotal - discount).toFixed(2)

        inputCoupon.value = ''
        couponBtn.setAttribute('disabled', 'true')
    }
    else return alert('Invalid coupon code')
}
// reset
function resetCartFn() {
    // reset display
    getElementFn('#sub-total').innerText = '0.00'
    getElementFn('#discount').innerText = '0.00'
    getElementFn('#grand-total').innerText = '0.00'
    getElementFn('#item-title-display').innerHTML = ``
    // reset calculation variables
    subTotal = 0
    discount = 0
    grandTotal = 0
    // disable buttons
    getElementFn('#btn-coupon').setAttribute('disabled', 'true')
    getElementFn('#btn-purchase').setAttribute('disabled', 'true')
}

let subTotal = 0
let discount = 0
let grandTotal = 0
document.querySelector('#product-section').addEventListener('click', function (e) {
    // add to cart
    document.querySelectorAll('.btn-add-item').forEach(element => {
        if (e.target === element) {
            // title display
            productNameFn(e.target)
            // price display
            productPricesFn(e.target)
        }
    });
    // coupon discount
    if (e.target.matches('#btn-coupon')) productDiscountFn()
    // remove item
    if (e.target.matches('.btn-remove')) {
        e.target.closest('.dynamic-li').remove()
    }
    // reset cart
    if (e.target.matches('#btn-modal')) resetCartFn()
})
