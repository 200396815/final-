// Javascript Document

let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'C:/Users/susha/Desktop/assignment JAVA/javascript/final/employee.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();


request.onload = function(){
  var employeeinfo = request.response;
  topinfo(employeeinfo);
  interests(employeeinfo);

}

function topinfo(jsonObj) {
  // add the heading
  var headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['employeeinfo'];
  header.appendChild(headerH1);
  // add the employee info
  var headerPara = document.createElement('p');
  headerPara.textContent = 'Employee Name' + jsonObj['name'] + ', Employee ID Number' + jsonObj['employeeNumber'] + ', Employee Department' + jsonObj['department'] +  ', Employee Status' + jsonObj['active'];
  header.appendChild(headerPara);
}



    //ul = list
    let interests = interests[i].interests;
     for(var j = 0; j<interests.length; j++){
       let listItem = document.createElement['li'];
       listItem.textContent = interests[j]
       list.appendChild(listItem);
     }

     
     article.appendChild(ul);
     section.appendChild(article);


      }
    }
