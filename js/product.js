let $ = document;

let backBtn = $.querySelector("#back");
let shoeTitle = $.querySelector("h1");
let shoeDesc = $.querySelector("p");
let shoeImg = $.querySelector("img");

let productsArray = [
  { id: 1, title: "sport Shoes", price: 53, img: "./images/1.png", desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (sport Shoes)" },
  { id: 2, title: "women Shoes", price: 81, img: "./images/2.png", desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias? (women Shoes)" },
  { id: 3, title: "Boot", price: 34, img: "./images/3.png" , desc: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequuntur incidunt molestias? (Boot) "},
];

let locationParams = new URLSearchParams(location.search);
let mainProductID = locationParams.get("id");

let mainProductObject = productsArray.find(function (product) {
  return product.id === Number(mainProductID);
});

if (mainProductObject) {
    shoeTitle.innerHTML = mainProductObject.title
     shoeDesc.innerHTML = mainProductObject.desc
    shoeImg.setAttribute('src' ,mainProductObject.img )
} else {
    location.href = 'http://127.0.0.1:5500/'
}

console.log(mainProductObject);

backBtn.addEventListener("click", function () {
  history.back();
});

// ✌ :))
