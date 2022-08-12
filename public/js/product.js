const productImages = document.querySelectorAll(".product-images img"); /* select all product images*/
const productImageSlide = document.querySelector(".image-slider"); /*select image slider element */

let activeImageSlide = 0; /*following variable will store current active image */

productImages.forEach((item, i) => { /*loop through the image elements */
    item.addEventListener('click', () => { /* add click event to each image */
        productImages[activeImageSlide].classList.remove('active'); /*remove the active class from current image */
        item.classList.add('active'); /*add active class to the item element  */
        productImageSlide.style.backgroundImage = `url('${item.src}')`; /*change the background image of image slide element using style method */
        activeImageSlide = i; /*store its index to the active image slide variable */
    })
})

//toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); /*select all the label elements */
let checkedBtn = 0; /*following variable will store current selected label  */
let size;

sizeBtns.forEach((item, i) => { /*loop through labels and add click event to them */
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check'); /*toggle the classes of the label elements here */
        item.classList.add('check');
        checkedBtn = i;
        size = item.innerHTML;
    })
})

const setData = (data) => {
    let title = document.querySelector('title');

    // setup the images
    productImages.forEach((img, i) => {
        if(data.images[i]){
            img.src = data.images[i];
        } else{
            img.style.display = 'none';
        }
    })
    productImages[0].click();

    // setup size buttons
    sizeBtns.forEach(item => {
        if(!data.sizes.includes(item.innerHTML)){
            item.style.display = 'none';
        }
    })

    // setting up texts
    const name = document.querySelector('.product-brand');
    const shortDes = document.querySelector('.product-short-des');
    const des = document.querySelector('.des');

    title.innerHTML += name.innerHTML = data.name;
    shortDes.innerHTML = data.shortDes;
    des.innerHTML = data.des;

    // pricing 
    const sellPrice = document.querySelector('.product-price');
    const actualPrice = document.querySelector('.product-actual-price');
    const discount = document.querySelector('.product-discount-price');

    sellPrice.innerHTML =  `Rs.${data.sellPrice}`;
    actualPrice.innerHTML = `Rs.${data.actualPrice}`;
    discount.innerHTML =  `( ${data.discount}% off )`;

    // wishlist and cart btn
    const wishlistBtn = document.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => {
        wishlistBtn.innerHTML = add_product_to_cart_or_wishlist('wishlist', data);
    })

    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.addEventListener('click', () => {
        cartBtn.innerHTML = add_product_to_cart_or_wishlist('cart', data);
    })
}

// fetch data
const fetchProductData = () => {
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({id: productId})
    })
    .then(res => res.json())
    .then(data => {
        setData(data);
        getProducts(data.tags[1]).then(data => createProductSlider(data, '.container-for-card-slider', 'similar products' ))
    })
    .catch(err => {
        location.replace('/404');
    })
}

let productId = null;
if(location.pathname != '/products'){
    productId = decodeURI(location.pathname.split('/').pop());
    fetchProductData();
}