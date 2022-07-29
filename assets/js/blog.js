function createPost(title, date, content) {

    const newEl = document.createElement("div");
    newEl.classList.add("mt-3", "bg-light", "p-4", "rounded-3");

    newEl.innerHTML = `
    
    <h2>${title}</h2>
    <p class="figure-caption">${date}</p>

    <p>${content}</p>
    
    `;

    $("#blog-posts-section").append(newEl);

}