const games = [
    {
        image: "../images/hollow-knight.jpg",
        desc: "Hollow Knight",
    },
    {
        image: "../images/link-to-the-past.webp",
        desc: "The legend of Zelda A Link to the Past",
    },
    {
        image: "../images/ratchet-and-clank.jpg",
        desc: "Ratchet and Clank: Tools of Destruction",
    },
    {
        image: "../images/yu-gi-oh.jpg",
        desc: "Yu-gi-oh",
    },
];

const shows = [
    {
        image: "../images/dragon-ball.jpg",
        desc: "Dragon Ball",
    },
    {
        image: "../images/vagabond.webp",
        desc: "Vagabond",
    },
    {
        image: "../images/code-geass.jpg",
        desc: "Code Geass",
    },
    {
        image: "../images/yu-yu-hakusho.webp",
        desc: "Yu Yu Hakusho",
    },
];

function myPosts(posts){
    let allPosts = ``;
    for (let post of posts){
        allPosts += `
        <div class="post">
            <img class="post-pics" src="${post.image}" />
            <p class="post-desc">${post.desc}</p>
        </div>`;
    }
    post.innerHTML = allPosts;
}
