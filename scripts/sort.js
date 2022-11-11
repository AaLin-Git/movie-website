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
