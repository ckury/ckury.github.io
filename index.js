const banner = document.createElement('template');

banner.innerHTML = `
    <div class="banner"></div>
`;

document.body.prepend(banner.content);