const banner = document.createElement('template');
banner.innerHTML = `
    <div class="banner"></div>
`;

document.body.prepend(banner.content);

const sidenav = document.createElement('template');
sidenav.innerHTML = `
    <div class="sidenav">
        <p>ckury.github.io</p>
        <a href="index.html">Hello World</a>
        <a href="about.html">About</a>
    </div>
`;

document.body.prepend(sidenav.content);