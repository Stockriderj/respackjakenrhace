const navbarEl = $("#main-header nav");
const navbar = `

<div class="container-fluid px-5">
    <a class="navbar-brand" href="index.html"><img class="rounded-3 me-2" src="assets/images/respak-flag.jpeg" alt="Respackjakenrhace" width="50"><span>Respackjakenrhace</span></a>
</div>

`;
navbarEl.addClass("navbar bg-light");
navbarEl.html(navbar);

console.log("hello");
