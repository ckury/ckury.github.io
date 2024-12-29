// FW-version: 1.0

addTemplateToBody('/templates/banner.html')
addTemplateToBody('/templates/sidenav.html')
addScriptSrc('/templates/sidenav.js')


function addTemplateToBody(url) {
    const htmlTemplate = document.createElement('div');

    getContent(url, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            htmlTemplate.innerHTML = data;
            document.body.prepend(htmlTemplate.firstChild)
        }
    })

}

function addScriptSrc(url) {
    const script = document.createElement("script")
    script.src = url
    document.head.appendChild(script)
}

function getContent(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(null, xhr.responseText); 
    } else {
      callback(new Error(`Request failed.  Returned status of ${xhr.status}`));
    }
  };

  xhr.onerror = function() {
    callback(new Error('Request failed due to Network'));
  };

  xhr.send();
}
