function createContentTemplate(movie) {
  const article = `<article class="card">
    <header class="card__header" style="background-image: url(${movie.image})">
      <h2 class="card__title">${movie.title}</h2>
      <span class="card__info">${new Date(movie.date).getFullYear()} - ${
      movie.duration
  }</span>
    </header>
    <section class="card__content">
      <p class="card__description">${movie.description}</p>
      <hr>
      <p>Режисер: ${movie.director}</p>
    </section>
  </article>`;

  return createFragmentTemplate(article);
}
