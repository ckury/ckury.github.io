// FW-version: 1.0

const banner = document.createElement('template');
banner.innerHTML = `
    <div class="banner"></div>
`;

document.body.prepend(banner.content);

const sidenav = document.createElement('template');
sidenav.innerHTML = `
    <div class="sidenav">
        <a href="/pages/hello_world.html">Hello World</a>
        <a href="/pages/about.html">About</a>
        <button class="dropdown-btn" onclick="toggleDropdown(this)">STM32</button>
        <div class="dropdown-container">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
        </div>
    </div>
`;

document.body.prepend(sidenav.content);

function toggleDropdown(btn) {
    var dropdownContent = btn.nextElementSibling; 
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }
