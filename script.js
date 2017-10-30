let button = document.querySelector('button');
button.addEventListener("click", function() {
    let keyword = document.querySelector('input').value;
    let url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+keyword;

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
});

function print(api) {
    for(let i = 0; i < 10; i++) {
        let searchResult = '<li><a href='+api[3][i]+'>'+api[1][i]+'</a><br />'+api[2][i];
        document.getElementById(i).innerHTML = searchResult;
    }
}
