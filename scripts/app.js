function init() {
    appendContent("sort", createSorting());

    getMovies()
    .then((data) => {
      const fragment = document.createDocumentFragment();

      data.forEach((movie) => {
        fragment.appendChild(createContentTemplate(movie));
      });

      appendContent("content", fragment);
    });
}

init();
