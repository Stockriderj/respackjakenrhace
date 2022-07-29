if (window.rootpath != null) {
  console.log("rootpath: " + window.rootpath);
} else {
  window.rootpath = "";
  console.log("file in root folder");
}

function getRootFile(filename) {
  return `${window.rootpath}${filename}`;
}

function getImageFile(filename) {
  return `${window.rootpath}assets/images/${filename}`;
}

// Head
document.querySelector("head").innerHTML += `
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="${getImageFile("favicon")}">
    <link rel="icon" type="image/png" sizes="32x32" href="${getImageFile("favicon/favicon-32x32.png")}">
    <link rel="icon" type="image/png" sizes="16x16" href="${getImageFile("favicon/favicon-16.16")}">
    <link rel="manifest" href="${getImageFile("favicon/site.webmanifest")}">
`;

// Navbar
const navbarEl = $("#main-header nav");
const navbar = `
<div class="container-fluid px-5">

    <a class="navbar-brand" href="index.html">
        <img class="rounded-3 me-2" src="${getImageFile("respak-flag.jpeg")}" alt="Respackjakenrhace" width="10%">
        <span>Respackjakenrhace</span>
    </a>

    <div class="navbar-nav">
        <a class="nav-link" href="${getRootFile("blog.html")}">Blog</a>
        <a class="nav-link" href="${getRootFile("origin.html")}">Origin</a>
        <a class="nav-link" href="${getRootFile("language.html")}">Language</a>
    </div>

</div>
`;
navbarEl.addClass("navbar navbar-expand-sm bg-primary navbar-dark");
navbarEl.html(navbar);

// Main
const mainEl = $("main");
mainEl.addClass("container my-3");