// Javascript Document
let header = document.querySelector('header');
let section = document.querySelector('section');
//step 2 Store the url of a json file in a variables
let requestURL = 'https://github.com/200396815/final-/blob/master/coffee/Coffee.json';
//step 3 Create a new XHR object
let request = new XMLHttpRequest();
//step 4 open a new request using the request method
request.open('GET', requestURL);
//step 5 set js to accept json from the server
request.responseType = 'json';
// step 7 send the request
request.send();


request.onload = function(){
  var coffee = request.response;
  heading(coffee);
  para.(coffee);

}

function heading(jsonObj) {
  // add the heading
  var headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['heading'];
  header.appendChild(headerH1);

}

function para(jsonObj){
  //bind the json obj topFlavours to a variables

  let coffee = jsonObj['coffee'];

  // loop through the top Flavour object

  for(let i =0; i < coffee.length; i++) {
    // built the html elements
    let article = document.createElement('article');
    let ul = document.createElement('ul');
    let ul2 = document.createElement('ul');



    let type = coffee[i].type;

     for(var i = 0; i<type.length; i++){
       let listItem = document.createElement['li'];
       listItem.textContent = type[i]
       list.appendChild(listItem);
     }

     let size = coffee[i].size;

      for(var j = 0; j<size.length; j++){
        let listItem = document.createElement['li'];
        listItem.textContent = size[j]
        list.appendChild(listItem);
      }

     //append each item to a section elements

     article.appendChild(ul);
     article.appendChild(ul2);
     section.appendChild(article);



      }
    }
