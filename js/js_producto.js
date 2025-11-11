// componente mejorado

const productos = [
  {
    nombre: "Funko_Rick",
    precio: 1000,
    img: "https://m.media-amazon.com/images/I/616u5o14sQL.jpg",
  },
  {
    nombre: "Funko_Morty",
    precio: 1200,
    img: "https://m.media-amazon.com/images/I/61H6yws5+eL.jpg",
  },
];

const contenedor = document.getElementById("contenedor");

productos.forEach((prod) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
        `;

  contenedor.appendChild(card);
});
