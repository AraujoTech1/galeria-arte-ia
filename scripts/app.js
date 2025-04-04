document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Lista de imagens geradas por IA
    const images = [
        "assets/van-gogh-style.jpg",
        "assets/monet-style.jpg",
        "assets/picasso-style.jpg"
    ];

    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Arte gerada por IA";
        gallery.appendChild(img);
    });
});
