const DATA_PRODUCT_LIST = [
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
  {
    percent: 50,
    link: '#',
    image: 'tesla.webp',
    title: 'The best car!',
    rating: 5,
    totalRating: '5M',
    price: 60000,
  },
];

let productList = '';
let recentlyViewList = '';
let recentlyAddedToFavoritesList = '';
let recommendedForYouList = '';
let newPrice = 0;

// CATE ITEME VREI PE FIECARE CAROUSEL, asta daca vrei poti sa o stergi
let numberOfProducts = 3;
let numberOfRecently = 4;
let numberOfFavorites = 4;
let numberOfRecommended = 3;

buildAllCarousels();

function buildAllCarousels() {
  buildProductsCarousel();

  recentlyViewList = buildCommonLineCarousel(2, numberOfRecently);
  recentlyAddedToFavoritesList = buildCommonLineCarousel(3, numberOfFavorites);
  recommendedForYouList = buildCommonLineCarousel(4, numberOfRecommended);

  $('.carousel-cards').append(productList);
  $('.carousel-cards-2').append(recentlyViewList);
  $('.carousel-cards-3').append(recentlyAddedToFavoritesList);
  $('.carousel-cards-4').append(recommendedForYouList);
}

function buildProductsCarousel() {
  productList = '';

  for (let i = 0; i < 3; i++) {
    productList += courselDOMBuilder(DATA_PRODUCT_LIST[i], 1);
    productList += `<a href="#"><div class="buy-btn"><p >Buy now</p></div></a>`;
    productList += '</div>';
  }
}

function buildCommonLineCarousel(rownumber, itemsToDisplay) {
  let result = '';
  for (let i = 0; i < itemsToDisplay; i++) {
    result += courselDOMBuilder(DATA_PRODUCT_LIST[i], rownumber);
    result += `<a href="#"><div class="buy-btn-2"><div class="red-left"><p><b>>></b></p></div><div class="blue-right"><p >Buy now</p></div></div></a></div>`;
  }
  return result;
}

function courselDOMBuilder(source, x) {
  let construct = '';
  construct += `<div class=\"card${x}\">`; //
  construct += '<div class="top-card">';

  if (source.percent > 0) {
    construct += '<div class="percent">';
    construct += `<p class=\"text-percent\">-${source.percent}%</p>`;
    construct += '</div>';
  } else {
    construct += `<div class="no-percent"></div>`;
  }

  construct += `<a href="#"><img class=\"favorite\" src=\"/Images/heart.png\"></a>`;
  construct += '</div>';
  construct += `<a href="${source.link}"><img class=\"product-img\" src=\"/Images/${source.image}\">`;
  construct += `<p class="product-name center"><b>${source.title}</b></p>`;
  construct += `<div class="rating center">`;

  for (let r = 0; r < source.rating; r++) {
    construct += `<img class="rating-star" src="/Images/rating.png">`;
  }
  construct += `<p class="rating-text">${
    source.rating + ' ( ' + source.totalRating + ' )'
  }</p>`;

  construct += '</div>';
  construct += ` <div class="old-price center">`;

  if (source.percent > 0) {
    construct += `<p class="old-price-text">${source.price} $</p>`;
    construct += `<p class="old-price-percent ">-${source.percent}%</p>`;
  }

  construct += '</div>';

  if (source.percent > 0) {
    newPrice = source.price - (source.price * source.percent) / 100;
    construct += `<p class="price center">${newPrice} $</p></a>`;
  } else {
    construct += `<p class="price center" >${source.price}$</p></a>`;
  }
  return construct;
}
