const dataProducts = `
[ {
    "alt": "product1",
    "src": "./images/photo1.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "52.00"
  },
  {
    "alt": "product2",
    "src": "./images/photo2.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "52.00"
  },
  {
    "alt": "product3",
    "src": "./images/photo3.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "52.00"
  },
  {
    "alt": "product4",
    "src": "./images/photo4.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "52.00"
  },
  {
    "alt": "product5",
    "src": "./images/photo5.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "price": "52.00"
  },
  {
    "alt": "product6",
    "src": "./images/photo6.png",
    "name": "ELLERY X M'O CAPSULE",
    "text": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "price": "52.00"
  }
]`

const products = document.querySelector('.products');
const elementProducts = JSON.parse(dataProducts);

elementProducts.forEach(element => {
  const product = document.createElement('div');
  product.classList.add('product');
  products.appendChild(product);

  const productImage = document.createElement('img');
  productImage.classList.add('product_image');
  productImage.src = element.src;
  productImage.setAttribute('alt', element.alt);
  product.appendChild(productImage);

  const productName = document.createElement('h2');
  productName.classList.add('product_name');
  productName.textContent = element.name;
  product.appendChild(productName);
  
  const productText = document.createElement('p');
  productText.classList.add('product_text');
  productText.textContent = element.text;
  product.appendChild(productText);

  const productPrice = document.createElement('span');
  productPrice.classList.add('product_price');
  productPrice.textContent = `$${element.price}`;
  product.appendChild(productPrice);

});