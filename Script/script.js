const productsCarousel =
    [{
        percent:50,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    },
    {
        percent:50,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    },
    {
        percent:50,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    },
    {
        percent:50,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    },
    {
        percent:50,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    },
    {
        percent:0,
        link:"#",
        image:"tesla.webp",
        title:"The best car!",
        rating:5,
        totalRating:"5M",
        price:60000
    }];




window.onload = function() {
   // RELATIVE PATHS si ABSOULTE PATHS
let productCarousel = "";
let newPrice;
// daca pun i < 6 (cum e normal) imi va pune mai mult de 6 carduri!



for(let i=0; i<3;i++){
    productCarousel += carouselConstruct(productsCarousel[i], productCarousel,1);
    productCarousel += `<a href="#"><div class="buy-btn"><p >Buy now</p></div></a>`;
    productCarousel += "</div>";

}


let secondProductCarousel="";
// daca pun i < 6 (cum e normal) imi va pune mai mult de 6 carduri!
for(let i=0; i<3;i++){
    secondProductCarousel += carouselConstruct(productsCarousel[i],secondProductCarousel,2);
    secondProductCarousel += `<a href="#"><div class="buy-btn-2"><div class="red-left"><p><b>>></b></p></div><div class="blue-right"><p >Buy now</p></div></div></a>`;//!
    secondProductCarousel += "</div>";

}

let thirdProductCarousel="";

for(let i=0; i<3;i++){
    thirdProductCarousel += carouselConstruct(productsCarousel[i],thirdProductCarousel,3);
    thirdProductCarousel += `<a href="#"><div class="buy-btn-2"><div class="red-left"><p><b>>></b></p></div><div class="blue-right"><p >Buy now</p></div></div></a>`;//!
    thirdProductCarousel += "</div>";
}

let fourthProductCarousel="";

for(let  i=0; i<3;i++){
    fourthProductCarousel += carouselConstruct(productsCarousel[i],fourthProductCarousel,4);
    fourthProductCarousel += `<a href="#"><div class="buy-btn-2"><div class="red-left"><p><b>>></b></p></div><div class="blue-right"><p >Buy now</p></div></div></a>`;//!
    fourthProductCarousel += "</div>";
}

function carouselConstruct(source, construct,x){
    console.log('productCarousel, ', x)

    construct +=`<div class=\"card${x}\">`;//
    construct +="<div class=\"top-card\">";
    if(source.percent>0){
        construct +="<div class=\"percent\">";
        construct +=`<p class=\"text-percent\">-${source.percent}%</p>`;
        construct += "</div>";
    }else{
        construct += `<div class="no-percent"></div>`;
    }
    construct += `<a href="#"><img class=\"favorite\" src=\"/Images/heart.png\"></a>`;
    construct += "</div>";
    construct += `<a href="${source.link}"><img class=\"product-img\" src=\"/Images/${source.image}\">`;
    construct += `<p class="product-name center"><b>${source.title}</b></p>`;  
    construct += `<div class="rating center">`;
    for(let r=0;r<source.rating;r++){
    construct +=`<img class="rating-star" src="/Images/rating.png">`;
    }
    construct += `<p class="rating-text">${source.rating+" ( "+ source.totalRating+" )"}</p>`;
    construct += "</div>";
    construct += ` <div class="old-price center">`;
    if(source.percent>0){
        construct += `<p class="old-price-text">${source.price} $</p>`;
        construct += `<p class="old-price-percent ">-${source.percent}%</p>`;
    }
    construct += "</div>";
    if(source.percent>0){
        newPrice = source.price - ((source.price * source.percent)/100);
        construct += `<p class="price center">${newPrice} $</p></a>`;
    } else {
        construct += `<p class="price center" >${source.price}$</p></a>`;
    }
    return construct;
}
$('.carousel-cards').append(productCarousel);
$('.carousel-cards-2').append(secondProductCarousel);
$('.carousel-cards-3').append(thirdProductCarousel);
$('.carousel-cards-4').append(fourthProductCarousel);
}
