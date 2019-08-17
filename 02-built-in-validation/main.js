
let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'https://sushant345.github.io/final/main.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function(){
  var deals = request.response;
  topheader(deals);
  products1(deals);
}

 function topheader(jsonObj) {
  var headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['title'];
  header.appendChild(headerH1);
}


function products1(jsonObj){


  let product = jsonObj['products'];


  for(let i =0; i < products.length; i++) {

    let article = document.createElement('article');
    let  h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let ul = document.createElement('ul');


    img.setAttribute('src', 'https://sushant345.github.io/final/images' + products[i].image);

    img.setAttribute('alt', products[i].name);
    h2.textContent = products[i].name;
    p1.textContent = products[i].price;
    p2.textContent = products[i].description;

    let benefits = products[i].benefits;

     for(var j = 0; j<benefits.length; j++){
       let listItem = document.createElement['li'];
       listItem.textContent = benefits[j]
       list.appendChild(listItem);
     }


     article.appendChild(img);
     article.appendChild(h2);
     article.appendChild(p1);
     article.appendChild(p2);
     article.appendChild(ul);
     section.appendChild(article);

  }
}
