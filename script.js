let button = document.querySelector('button');
let searchBox = document.querySelector('input');

button.addEventListener("click", search);
searchBox.addEventListener("keyup", listenKey);

function listenKey(e) {
  if(e.keyCode === 13) {
    search();
  }
}

function search() {
  let keyword = document.querySelector('input').value;
  let url = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search='+keyword;

  let xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open('GET', url, true);
  xmlHTTP.send();
  xmlHTTP.onload = function() {
    if (xmlHTTP.status === 200) {
      let recieved = xmlHTTP.response;
      let api = JSON.parse(recieved);
        print(api);
    } else {
      alert("err...api error!");
    }
  }
}

function print(api) {
  if (api[1].length > 0) {
    for(let i = 0; i < 10; i++) {
      let searchResult = '<li><a href='+api[3][i]+'>'+api[1][i]+'</a><br />'+api[2][i]+'</li>';
      document.getElementById(i).innerHTML = searchResult;
    }
  } else {
    alert("err...No result found!")
  }
}
