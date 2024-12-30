// FW-version: 1.0
addTemplateToBody('/templates/sidenav.html', () => {
    addIdsToHeaders(document.getElementsByClassName("content")[0])
    populatePageNav(document.getElementsByClassName("page")[0], document.getElementsByClassName("pagenav")[0])
})

addScriptSrc('/templates/sidenav.js')

function addTemplateToBody(url, callback) {
    const htmlTemplate = document.createElement('div');

    getContent(url, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            htmlTemplate.innerHTML = data;
            document.body.prepend(htmlTemplate.firstChild)

            if (callback) {callback();}
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

// Document Modification

function addIdsToHeaders(div) {
    const headers = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const usedIds = {};
  
    headers.forEach(header => {
      let id = header.textContent.trim().replace(/\s+/g, '-'); // Replace spaces with hyphens along with removing any beginning or trailing whitespace
      id = encodeURIComponent(id); // URL encode the id for URL compliance
      id = id.substring(0, 50); // Truncate initial id to 50 characters
  
      if (usedIds[id]) { // Check for duplicate ids and increment a number if already existing
        let count = 1;
        while (usedIds[id + '_' + count]) {
          count++;
        }
        id += '_' + count;
      }
  
      header.id = id; // Add the id attribute
      usedIds[id] = true; // Mark the id as used
    });
}

function populatePageNav(page_div, pagenav_div) {
    if (!page_div || !pagenav_div) {
      console.error("populatePageNav: One or both elements not found!");
      return; 
    }

    const title = page_div.querySelector('.page-title');

    if (title) {
        const element = document.createElement('a');
        element.href = "#";
        element.textContent = title.innerHTML;
        element.classList.add("pagenav-title")
        pagenav_div.appendChild(element);
    } else {
        console.error('populatePageNav: No page_title found in page_div');
    }
  
    const headers = page_div.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
    if (headers.length === 0) {
      console.log("populatePageNav: No headers found in page_div");
      return; 
    }
  
    headers.forEach(header => {
        const element = document.createElement('a');
        element.href = "#" + header.id;
        element.textContent = header.textContent;
        element.classList.add("pagenav-" + header.tagName.toLowerCase())
        pagenav_div.appendChild(element);
    });
}

async function selectCode(object) {
  const code = object.closest(".code").getElementsByClassName('code-content')[0].firstChild;

  if (document.body.createTextRange) {
    const range = docuemnt.body.createTextRange();
    range.moveToElementText(code);
    range.select
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text.");
    return;
  }
}