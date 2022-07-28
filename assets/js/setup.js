// Head
document.querySelector("head").innerHTML += `

    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon/">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/images/favicon/site.webmanifest">

`;

// Navbar
const navbarEl = $("#main-header nav");
const navbar = `

<div class="container-fluid px-5">
    <a class="navbar-brand" href="index.html">
        <img class="rounded-3 me-2" src="assets/images/respak-flag.jpeg" alt="Respackjakenrhace" width="10%">
        <span>Respackjakenrhace</span>
    </a>
    <ul class="navbar-nav">
    
        <li class="navbar-item">
            <a class="nav-link" href="language.html">Language</a>
        </li>
        
    </ul>
</div>

`;
navbarEl.addClass("navbar bg-primary navbar-dark");
navbarEl.html(navbar);
