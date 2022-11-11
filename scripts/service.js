function getMovies() {
    return fetch("https://run.mocky.io/v3/1be5a8b1-2625-488e-95a9-83a508b6cb34")
    .then((res) => res.json())
    .then(sortMovies);
}
