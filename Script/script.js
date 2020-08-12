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
    }
  ];
  const CHAT_DIALOG = [
    { from: 'user',
      message: 'Lorem ipsum dolor sit amet'
    },
    {
      from: 'agent',
      message: 'Fusce odio orci, placerat vitae mollis id, dapibus vel odio. Donec vitae nisi at nisi ultricies malesuada quis a dolor. Etiam sem lacus, euismod ac pulvinar eu, consequat sit amet libero'
    },
    { from: 'user',
    message: ' Aenean quis odio velit. Vestibulum et quam quis sapien semper congue non sed eros. Morbi id elit a est commodo imperdiet eget ut ex.'
    },
    { from: 'user',
    message: 'Nam risus nibh, rhoncus vitae dapibus non, fermentum at erat. In laoreet dolor congue, molestie tortor id, lacinia nisi. Praesent dignissim diam quis nulla elementum sollicitudin.'
    },
  ]


  let productList = '';
  let recentlyViewList = '';
  let recentlyAddedToFavoritesList = '';
  let recommendedForYouList = '';
  let newPrice = 0;

  let colNr = 4;
  // CATE ITEME VREI PE FIECARE CAROUSEL, asta daca vrei poti sa o stergi
  if(screen.width < 1080 && screen.width > 830){
   colNr = 3;
  }
  else if (screen.width < 830 && screen.width > 540){
    colNr = 2;
  } else if (screen.width < 540){
    colNr = 1;
  }

  let numberOfProducts = 8;
  let numberOfRecently = colNr;
  let numberOfFavorites = colNr;
  let numberOfRecommended = colNr;
  
  buildAllCarousels();
  
  function buildAllCarousels() {
    buildProductsCarousel(numberOfProducts);
  
    recentlyViewList = buildCommonLineCarousel(2, numberOfRecently);
    recentlyAddedToFavoritesList = buildCommonLineCarousel(3, numberOfFavorites);
    recommendedForYouList = buildCommonLineCarousel(4, numberOfRecommended);
  
    $('.carousel-cards').append(productList);
    $('.carousel-cards-2').append(recentlyViewList);
    $('.carousel-cards-3').append(recentlyAddedToFavoritesList);
    $('.carousel-cards-4').append(recommendedForYouList);
  }
  
  function buildProductsCarousel(itemsToDisplay) {
    productList = '';
  
    for (let i = 0; i < itemsToDisplay; i++) {
      productList += courselDOMBuilder(DATA_PRODUCT_LIST[i], 1);
      productList += `<a href="#"><div class="buy-btn"><p >Buy now</p></div></a>`;
      productList += '</div>';
    }
    
  }
  
  function buildCommonLineCarousel(rownumber, itemsToDisplay) {
    let result = '';
    for (let i = 0; i < itemsToDisplay; i++) {
      result += courselDOMBuilder(DATA_PRODUCT_LIST[i], rownumber);
      result += `<a href="#"><div class="buy-btn-2"><div class="red-left white-text"><p><b>>></b></p></div><div class="blue-right white-text"><p >Buy now</p></div></div></a></div>`;
    }
    return result;
  }
  
  function courselDOMBuilder(source, x) {
    let construct = '';
    construct += `<div class=\"card${x}\">`; //
    construct += '<div class="top-card">';
  
    if (source.percent > 0) {
      construct += '<div class="percent">';
      construct += `<p class=\"text-percent white-text\">-${source.percent}%</p>`;
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
 
  $('.chat-window').append( chatDialog(CHAT_DIALOG));
 

function chatDialog(arr) {
 
  let dialogConstruct = '';
  for( let i = 0 ; i < arr.length ; i++) {
    if (arr[i].from === 'user') {
      dialogConstruct += '<div class="message user-message">';
    }else{
      dialogConstruct += '<div class="message agent-message">';
    }
    dialogConstruct += `<p class="white-text">${arr[i].message}</p>`;
      dialogConstruct += `</div>`
  }
  return dialogConstruct;

}