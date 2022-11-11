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
      return data.sort((a, b) => a.title.localeCompare(b.title));
    case "date":
      return data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    default:
      return data;
  }
}
