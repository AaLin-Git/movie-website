const movies = [
  {
    title: "Думки мої тихі",
    image: "https://i.ibb.co/35ZKPNZ/image.jpg",
    description:
      'Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем.',
    date: "2020-01-16T00:00:00",
    director: "Антоніо Лукіч",
    duration: "1год 54хв",
  },
  {
    title: "Додому",
    image: "https://i.ibb.co/9gN9dvj/Evge-poster.jpg",
    description:
      "«Додому» — український драматичний фільм 2019 року, повнометражний режисерський дебют Нарімана Алієва з Ахтемом Сеітаблаєвим у головній ролі.",
    date: "2019-07-14T00:00:00",
    director: "Володимир Яценко",
    duration: "1год 36хв",
  },
];

function createSorting() {
  const sort = new URLSearchParams(location.search).get("sort");

  const nav = `
  <a class="sort__item ${sort === "name" ? "active" : ""}" href="${
    location.origin + location.pathname + "?sort=name"
  }">Назва</a>
  <a class="sort__item ${sort === "date" ? "active" : ""}" href="${
    location.origin + location.pathname + "?sort=date"
  }">Дата</a>
  `;

  return createFragmentTemplate(nav);
}

function createContentTemplate(movie) {
  const article = `<article class="card">
      <header class="card__header" style="background-image: url(${
        movie.image
      })">
        <h2 class="card__title">${movie.title}</h2>
        <span class="card__info">${new Date(movie.date).getFullYear()} - ${
    movie.duration
  }</span>
      </header>
      <section class="card__content">
        <p class="card__description">${movie.description}</p>
        <hr />
        <p>Режиссер: ${movie.director}</p>
      </section>
    </article>`;

  return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement("template");

  template.innerHTML = str;

  return template.content;
}

function appendContent(id, content) {
  const el = document.getElementById(id);

  el.appendChild(content);
}

function sortMovies(data) {
  const sort = new URLSearchParams(location.search).get("sort");

  switch (sort) {
    case "name":
      return data.sort((a, b) => a.title.localCompare(b.title));
    case "date":
      return data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    default:
      return data;
  }
}

function init(movies) {
  const fragment = document.createDocumentFragment();

  sortMovies(movies).forEach((movie) => {
    fragment.appendChild(createContentTemplate(movie));
  });

  appendContent("content", fragment);
  appendContent("sort", createSorting());
}

init(movies);

// class Movie {
//   constructor(movie) {
//     this.title = movie.title;
//     this.image = movie.image;
//     this.description = movie.description;
//     this.date = new Date(movie.date).getFullYear();
//     this.director = movie.director;
//     this.duration = movie.duration;
//   }

// createContent() {
//   //card
//   const article = document.createElement("article");
//   article.classList.add("card");

//   //header
//   const header = document.createElement("header");
//   header.classList.add("card__header");
//   header.style.backgroundImage = `url(${this.image})`;

//   const h2 = document.createElement("h2");
//   h2.classList.add("card__title");
//   h2.textContent = this.title;

//   const info = document.createElement("span");
//   info.classList.add("card__info");
//   info.textContent = `${this.date} - ${this.duration}`;

//   header.appendChild(h2);
//   header.appendChild(info);

//   //section
//   const section = document.createElement("section");
//   section.classList.add("card__content");

//   const description = document.createElement("p");
//   description.classList.add("card__description");
//   description.textContent = this.description;

//   const line = document.createElement("hr");

//   const director = document.createElement("p");
//   director.textContent = this.director;

//   section.appendChild(description);
//   section.appendChild(line);
//   section.appendChild(director);

//   article.appendChild(header);
//   article.appendChild(section);

//   return article;
// }
//}

// class App {
//   static renderAll(movies) {
//     const el = document.getElementById("content");
//     const fragment = document.createDocumentFragment();

//     movies.forEach((movie) => {
//       fragment.appendChild(new Movie(movie).createContent());
//     });

//     el.appendChild(fragment);
//   }
// }

// App.renderAll(movies);

// function createContent(movie) {}
