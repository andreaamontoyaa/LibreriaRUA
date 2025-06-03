const books = [
  { title: "Funny Story", author: "Emily Henry", genre: "Romance", year: 2024, price: 405, format: "Ebook/Pasta Blanda/Pasta Dura",cover: "https://m.media-amazon.com/images/I/71PSVpqu3vL._AC_UF894,1000_QL80_.jpg" },
  { title: "That´s Not My Name", author:"Megan Lally",genre: "Misterio", year: 2024, price: 260, format:"Pasta Blanda",cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1717940704i/123429195.jpg" },
  { title: "Translation State", author:"Ann Leckie",genre: "Ciencia Ficción", year: 2023, price: 280, format:"Ebook",cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcShbD_dCAenh-OLbvFhuuL-RkHkfL2WZoNWoozVJ3_g-EXylPWy" },
  { title: "Heartless", author:"Marissa Meyer",genre: "Fantasía", year: 2023, price: 400, format:"Pasta Dura",cover: "https://books.google.com.mx/books/publisher/content?id=LSzEDwAAQBAJ&pg=PR987&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0SQlgnDkEgeEUQWfTvumhkSKKSDg&w=1280" },
  { title: "En Agosto Nos Vemos", author:"Gabriel García Márquez",genre: "Ficción", year: 2024, price: 348, format:"Pasta Blanda/Pasta Dura",cover: "https://www.planetadelibros.com.mx/usuaris/libros/fotos/395/m_libros/portada_en-agosto-nos-vemos-td_gabriel-garcia-marquez_202401121946.jpg" },
  { title: "Master Slave Husband Wife: An Epic Journey from Slavery to Freedom", author:"Ilyon Woo",genre: "No Ficción", year: 2023, price: 300, format:"Ebook",cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSPKuD2HnIPJKHgaWRyU1ARBygmb7_cg-AxXd9HC91T9XHFyZXz" },
  { title: "El Viento Conoce Mi Nombre", author:"Isabel Allende",genre: "Ficción", year: 2023, price: 419, format:"Pasta Blanda",cover: "https://books.google.com.mx/books/publisher/content?id=qavAEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0YlHL_W0Gto5Iv7Zqa34aun-AD8w&w=1280" },
  { title: "The Dragons, the Giant, the Women: A Memoir", author:"Wayétu Moore", genre: "No Ficción", year: 2020, price: 230, format:"Ebook/Pasta Blanda",cover: "https://m.media-amazon.com/images/I/81gq3RikG+L.jpg" },
  { title: "Por Si Un Día Volvemos", author:"María Dueñas", genre: "Ficción", year: 2025, price: 299, format:"Ebook/Pasta Blanda", cover: "https://books.google.com.mx/books/publisher/content?id=tdJCEQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2yVk_1CgQGiZzL16HPkFQCkj2cgA&w=1280" },
  { title: "Arsenic and Adobo", author:"Mia P. Manansala", genre: "Misterio", year: 2021, price: 351, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/71nGV9jxz2L._AC_UF894,1000_QL80_.jpg" },
  { title: "El Color de las Cosas Invisibles", author:"Andrea Longarela", genre: "Fantasía", year: 2023, price: 318, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/81vGiOlh3pL._SY522_.jpg" },
  { title: "The Hidden Girl and Other Stories", author:"Ken Liu", genre: "Ciencia Ficción", year: 2020, price: 220, format:"Ebook", cover: "https://m.media-amazon.com/images/I/617c4lTLEzL._AC_UF894,1000_QL80_.jpg" },
  { title: "Todas Esas Cosas Que Te Diré Mañana", author:"Elisabet Benavent", genre: "Romance", year: 2022, price: 390, format:"Pasta Blanda/Pasta Dura", cover: "https://m.media-amazon.com/images/I/91koevBEYEL._UF894,1000_QL80_.jpg" },
  { title: "Book Lovers", author:"Emily Henry", genre: "Romance", year: 2022, price: 299, format:"Pasta Blanda", cover: "https://haverhillpl.org/wp-content/uploads/2022/06/booklovers.jpg" },
  { title: "El Albatros Negro", author:"María Oruña", genre: "Misterio", year: 2025, price: 529, format:"Pasta Dura", cover: "https://imagessl4.casadellibro.com/a/l/s5/94/9788401034794.webp" },
  { title: "Crying in H Mart", author:"Michelle Zauner", genre: "Biografía", year: 2021, price: 500, format:"Pasta Blanda/Pasta Dura", cover: "https://m.media-amazon.com/images/I/81aS9JndklL._AC_UF894,1000_QL80_.jpg" },
  { title: "Matriarch: A Memoir", author:"Tina Knowles", genre: "Biografía", year: 2025, price: 710, format:"Pasta Dura", cover: "https://m.media-amazon.com/images/I/91at8Eu8ODL._AC_UF1000,1000_QL80_.jpg" },
  { title: "Olga Dies Dreaming", author:"Xochitl Gonzalez", genre: "Ficción", year: 2022, price: 290, format:"Ebook/Pasta Blanda", cover: "https://mpd-biblio-covers.imgix.net/9781250786173.jpg" },
  { title: "Yellow Bird: Oil, Murder, and a Woman's Search for Justice in Indian Country", author:"Sierra Crane Murdoch", genre: "Biografía", year: 2020, price: 500, format:"Pasta Blanda", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONfOMPAtxLzEnC8mV7HlzY5gKbtVwtA4OEQ&s"},
  { title: "Viuda de hierro: Iron Widow", author:"Xiran Jay Zhao", genre: "Ciencia Ficción", year: 2021, price: 353, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/81cYkC-zelL.jpg"},
  { title: "The Burning God", author:"R.F. Kuang", genre: "Fantasía", year: 2020, price: 353, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/71pNOR-3x3L._UF894,1000_QL80_.jpg"},
  { title: "I Heard Her Call My Name: A Memoir of Transition", author:"Lucy Sante", genre: "Biografía", year: 2024, price: 410, format:"Pasta Blanda/Pasta Dura", cover: "https://m.media-amazon.com/images/I/7193SrwqmqL._AC_UF1000,1000_QL80_.jpg"},
  { title: "Fire Weather", author:"John Vaillant", genre: "No Ficción", year: 2023, price: 390, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/81lcrLCVgsL.jpg"},
  { title: "Seven Days in June", author:"Tia Williams", genre: "Romance", year: 2021, price: 566, format:"Pasta Dura", cover: "https://m.media-amazon.com/images/I/91vd0KdrWBL._AC_UF894,1000_QL80_.jpg"},
  { title: "The Paris Apartment", author:"Lucy Foley", genre: "Misterio", year: 2022, price: 388, format:"Pasta Blanda", cover: "https://m.media-amazon.com/images/I/81AqVcL4OML.jpg"},
   { title: "Deep End", author:"Ali Hazelwood", genre: "Romance", year: 2025, price: 533, format:"Pasta Dura", cover: "https://m.media-amazon.com/images/I/91q7ElhoupL._AC_UF894,1000_QL80_DpWeblab_.jpg"},
   { title: "Hello Beautiful", author:"Ann Napolitano", genre: "Ficción", year: 2023, price: 260, format:"Ebook", cover: "https://m.media-amazon.com/images/I/91CQZ+V4ypL.jpg"}
];

const bookGrid = document.getElementById("bookGrid");
const priceFilter = document.getElementById("priceFilter");
const genreFilter = document.getElementById("genreFilter");
const yearFilter = document.getElementById("yearFilter");
const searchInput = document.getElementById("searchInput");

/*Boton Filtro de Busqueda*/
const toggleFiltersBtn = document.getElementById("toggleFilters");
const filtersPanel = document.getElementById("filtersPanel");

function renderBooks(filteredBooks) {
  bookGrid.innerHTML = "";
  if (filteredBooks.length === 0) {
    bookGrid.innerHTML = "<p>No se encontraron libros.</p>";
    return;
  }
  filteredBooks.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
<div class="book-container">
<img src="${book.cover}" alt="${book.title}">
<div class="book-info">
<p><strong>${book.title}</strong></p>
<p>${book.author}</p>
<p>Precio: $${book.price}</p>
<p>Formato: ${book.format || "No especificado"}</p>
</div>
</div>
    `;
    bookGrid.appendChild(div);
  });
}
function applyFilters() {
  let filtered = [...books];
  const selectedGenre = genreFilter.value;
  const selectedYear = yearFilter.value;
  const priceOrder = priceFilter.value;
  const searchText = searchInput.value.toLowerCase();
  if (selectedGenre !== "all") {
    filtered = filtered.filter(book => book.genre === selectedGenre);
  }
  if (selectedYear !== "all") {
    filtered = filtered.filter(book => book.year == selectedYear);
  }
  if (searchText.trim() !== "") {
    filtered = filtered.filter(book =>
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  }
  if (priceOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (priceOrder === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }
  renderBooks(filtered);
}


// Escuchamos todos los filtros
priceFilter.addEventListener("change", applyFilters);
genreFilter.addEventListener("change", applyFilters);
yearFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

//Escuchamos el botón de Filtros//
toggleFiltersBtn.addEventListener("click", ()=> {
  const isVisible = filtersPanel.style.display === "flex";
  filtersPanel.style.display = isVisible ? "none" : "flex";
  toggleFiltersBtn.textContent = isVisible ? "Filtros ↓" : "Filtros ↑";
});

// Render inicial
renderBooks(books);
