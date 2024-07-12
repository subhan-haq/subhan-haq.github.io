const options = [
  {
    ref: "index.html",
    id: "home-button",
    text: "Home",
  },
  {
    ref: "projects.html",
    id: "projects-button",
    text: "Projects",
  },
  {
    ref: "photography.html",
    id: "photography-button",
    text: "Photography",
  },
  {
    ref: "anime.html",
    id: "anime-button",
    text: "Anime & Manga",
  },
  {
    ref: "games.html",
    id: "games-button",
    text: "Games",
  },
];

let allOptions = `
  <header class="header">
    <ul class="header-list">`;

for (let option of options) {
    allOptions += `
      <li class="list-item">
        <a href="${option.ref}">
          <button class="header-button" id="${option.id}" type="button">
            ${option.text}
          </button>
        </a>
      </li>
`;
}

allOptions += `
    </ul>
  </header>
  `;

  header.innerHTML = allOptions; 
  