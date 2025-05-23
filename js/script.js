// step one

const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        brand: "SoundMax",
        price: 89.99,
        category: "accessories",
        inStock: true
    },
    {
        id: 2,
        name: "4K Ultra HD Smart TV",
        brand: "VisionTech",
        price: 599.99,
        category: "phones",
        inStock: true
    },
    {
        id: 3,
        name: "Gaming Laptop",
        brand: "PowerCore",
        price: 1299.99,
        category: "laptop",
        inStock: false
    },
    {
        id: 4,
        name: "Smartphone Pro X",
        brand: "MobileOne",
        price: 799.99,
        category: "laptop",
        inStock: true
    },
    {
        id: 5,
        name: "Wireless Fitness Tracker",
        brand: "FitPulse",
        price: 59.99,
        category: "accessories",
        image: "",
        description: '',
        inStock: true
    }
];

// step 2 creating shoping cart
// this will store all items the customer wants

let cart =[];  //am empty box

// step 3: get refrecces to html
//thsis connnect to our js parts of oour webpage

const cartCountElement = document.getElementById('cort-count'); // cart-count from html 
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// step 4 untility function to form price
// make a price with a current

function formatPrice(price) {
    return 'R' + price.toFixed(2); //took price variable from products database arry
}

console.log('Javascript Loaded.')