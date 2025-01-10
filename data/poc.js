function POC() {
    get = document.querySelector('#get');
    post = document.querySelector('#post');
    options = document.querySelector('#options');
    impact = ''
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

    var POC = 'Title:  CORS MISCONFIGURATION AT ' + input + '<br>Vulnerability: Improper Access Control - Generic<br><br>DESCRIPTION: <br>Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers.<br>URL: ' + input + '<br>Method: ' + method + '<br>Credentials Allowed: Yes <br>Severity: Medium<br><br>Attacker would treat many victims to visit attacker\'s website, if victim is logged in, then his personal information is recorded in attacker\'s server.'
    document.write(POC)
}