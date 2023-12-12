const jsonData = [
    { "tag": "New", "imageSrc": "https://picsum.photos/id/238/120/135", "productName": "Christmas Tree", "productPrice": "$50" },
    { "tag": "Sale", "imageSrc": "https://picsum.photos/id/239/120/135", "productName": "Christmas Lights", "productPrice": "$30", "discount": "$40" },
    { "tag": "Hot", "imageSrc": "https://picsum.photos/id/240/120/135", "productName": "Christmas Ornaments", "productPrice": "$20" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/241/120/135", "productName": "Christmas Wreath", "productPrice": "$35" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/242/120/135", "productName": "Christmas Stockings", "productPrice": "$25" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/243/120/135", "productName": "Christmas Candles", "productPrice": "$40" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/244/120/135", "productName": "Christmas Snow Globe", "productPrice": "$45" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/200/120/135", "productName": "Christmas Garland", "productPrice": "$30" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/260/120/135", "productName": "Christmas Nutcracker", "productPrice": "$55" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/247/120/135", "productName": "Christmas Advent Calendar", "productPrice": "$35" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/248/120/135", "productName": "Christmas Tablecloth", "productPrice": "$40" },
    { "tag": "", "imageSrc": "https://picsum.photos/id/249/120/135", "productName": "Christmas Placemats", "productPrice": "$25" }
];

const productSection = document.querySelector('.product-section');
const products = productSection.querySelectorAll('.product');

products.forEach((product, index) => {
    const data = jsonData[index];
    const tag = product.querySelector('.tag');
    tag.textContent = data.tag;
    if (data.tag) {
        tag.classList.add(data.tag.toLowerCase());
    }

    const image = product.querySelector('.image img');
    image.src = data.imageSrc;

    const productName = product.querySelector('[data-product-name]');
    productName.textContent = data.productName;

    const productPrice = product.querySelector('[data-product-price]');
    productPrice.textContent = data.productPrice;

    if (data.tag === 'Sale' && data.discount) {
        const price = parseFloat(data.productPrice.replace('$', ''));
        const discount = parseFloat(data.discount.replace('$', ''));
        const percentage = Math.round(((price - discount) / price) * 100);
        tag.textContent = `${percentage}%`;

        const productDiscount = product.querySelector('[data-product-discount]');
        if (productDiscount) {
            productDiscount.textContent = `${data.discount}`;
        }
    }
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        if (buttonText === 'Add to cart') {
            button.textContent = 'Added to cart';
            button.classList.add('visible');
        } else {
            button.textContent = 'Add to cart';
            button.classList.remove('visible');
        }
    });
});