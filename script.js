document.addEventListener("DOMContentLoaded", function () {
  const imagens = [
    "imagens/imagem1.jpg", "imagens/imagem2.jpg", "imagens/imagem3.jpg",
    "imagens/imagem4.jpg", "imagens/imagem5.jpg", "imagens/imagem6.jpg",
    "imagens/imagem7.jpg", "imagens/imagem8.jpg", "imagens/imagem9.jpg",
    "imagens/imagem10.jpg", "imagens/imagem11.jpg", "imagens/imagem12.jpg",
  ];

  const galeria = document.getElementById("galeria");
  imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("obra");
    galeria.appendChild(img);
  });
});
