const observeCartChanges = () => {
    const cartObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const isValidRequestType = ['xmlhttprequest', 'fetch'].includes(entry.initiatorType);
        const isCartAddRequest = /\/cart\/add/.test(entry.name);
        if (isValidRequestType && isCartAddRequest) {
          //get last item added to cart using fetch /cart.js
            fetch('/cart.js').then((response) => {
                return response.json();
            }).then((data) => {
                // get last item added to cart
                const lastItem = data.items[data.items.length - 1];
                modifyModal(lastItem,data)

                document.querySelector('.cart-modal-popup-container').closest('section').style.display = 'block';
            });
        }
      });
    });
    cartObserver.observe({ entryTypes: ["resource"] });
}

document.addEventListener('DOMContentLoaded', () => {
    observeCartChanges();
});


const modifyModal = (lastItem,cart) => {

    let options = '';

    lastItem.options_with_values.forEach((option) => {
        options += `<p>${option.name}: ${option.value}</p>`
    });

    document.querySelector('.popup-cart-count').textContent = cart.item_count;

    document.querySelector('.popup-item-image').src = lastItem.image;
    document.querySelector('.popup-item-details').querySelector('.Product-Title').textContent = lastItem.product_title;
    document.querySelector('.Product-Options').innerHTML = `${options}`
    
    let expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 6);
    // document.querySelector(`.expiry-date`).textContent =  `EXP ` +expiryDate.toLocaleString('en-US', { month: '2-digit', year: '2-digit' });
}

const closePopupModal = (parentID) => {
    let el = document.querySelector(parentID);

    el.style.display = 'none';
}