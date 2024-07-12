const options = [
  {
    ref: "../html/index.html",
    id: "home-button",
    text: "Home",
  },
  {
    ref: "../html/projects.html",
    id: "projects-button",
    text: "Projects",
  },
  {
    ref: "../html/photography.html",
    id: "photography-button",
    text: "Photography",
  },
  {
    ref: "../html/anime.html",
    id: "anime-button",
    text: "Anime & Manga",
  },
  {
    ref: "../html/games.html",
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
  