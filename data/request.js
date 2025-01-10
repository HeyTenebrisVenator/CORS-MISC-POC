function Cors() {
    get = document.querySelector('#get');
    post = document.querySelector('#post');
    options = document.querySelector('#options');
    method = ''
    if (get.checked) {
        method = 'GET';
    }
    else if (post.checked) {
        method = 'POST';
    }
    else if (options.checked) {
        method = 'OPTIONS';
    }

    input = document.getElementById('input').value;
    var request = new XMLHttpRequest(); 

    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (this.readyState == 4 && request.status === 200) {
                document.getElementById('response').innerHTML = '<h3 id="response" class="vulnerable">Vulnerable!</h3><br><button onmousedown="POC()">MAKE PoC?</button>';
                document.getElementById('CODE').innerHTML = request.status;
            }
            else {
                document.getElementById('response').innerHTML = '<h3 id="response" class="not_vulnerable">Not Vulnerable...</h3>';
                document.getElementById('CODE').innerHTML = request.status;
            }
    }
}
    request.open(method, input, true);
    request.withCredentials = true;
    request.send();
}
