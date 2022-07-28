// Navbar
const navbarEl = $("#main-header nav");
const navbar = `

<div class="container-fluid px-5">
    <a class="navbar-brand" href="index.html">
        <img class="rounded-3 me-2" src="assets/images/respak-flag.jpeg" alt="Respackjakenrhace" width="10%">
        <span>Respackjakenrhace</span>
    </a>
</div>

`;
navbarEl.addClass("navbar bg-primary navbar-dark");
navbarEl.html(navbar);
