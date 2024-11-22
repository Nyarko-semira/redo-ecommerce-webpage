const product = [

    {
        id: 0,
        image: 'images/2150709463.jpg',
        title: 'Akosua  Nice',
        price: 105,
    },


    {
        id: 1,
        image: 'images/2150709523.jpg',
        title: 'Miliaka',
        price: 165,
    },


    {
        id: 2,
        image: 'images/2151073531.jpg',
        title: 'Alas quenncy',
        price: 55,
    },


    {
        id: 3,
        image: 'images/6520.jpg',
        title: 'Cute Mimi',
        price: 295,
    },

    {
        id: 4,
        image: 'images/pink-handbags.jpg',
        title: 'Natty bogo bag',
        price: 95,
    },


    {
        id: 5,
        image: 'images/beautiful-elegance-luxury-fashion-women-blue-handbag.jpg',
        title: 'Big Mama',
        price: 100,
    },






];

const grouping = [...new Set(product.map((item) => { return item }))]



document.getElementById('root').innerHTML = grouping.map((item, index) => {
    var { image, title, price } = item;

    return (

        `
        <div class="box">
            <div class="img-box">
                <img class="images" src="${image}" >
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button onclick="addtocart(${index})">Add to cart</button>
            </div>
        </div>
    `

    )

}).join(' ');



var cart = [];
function addtocart(a) {
    cart.push({ ...grouping[a] });
    displaycart();
}


function deleteElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let b = 0, total = 0;
    document.getElementById("card-no").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('status').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }


    else {
        document.getElementById("status").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='deleteElement(" + (b++) + ")'></i></div>"
            );
        }).join('');
    }

}


