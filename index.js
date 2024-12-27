// FW-version: 1.0

const banner = document.createElement('template');
banner.innerHTML = `
    <div class="banner"></div>
`;

document.body.prepend(banner.content);

const sidenav = document.createElement('template');
sidenav.innerHTML = `
    <div class="sidenav">
        <a href="/" class="sidetitle">CKURY GitHub</a>
        <a href="/hello_world.html" class="sideoption">Hello World</a>
        <a href="/about.html" class="sideoption">About</a>
    </div>
`;

document.body.prepend(sidenav.content);