const posts = [
    [{
        image: "images/hollow-knight.jpg",
        desc: "Hollow Knight",
    },
    {
        image: "images/link-to-the-past.webp",
        desc: "The legend of Zelda A Link to the Past",
    },
    {
        image: "images/ratchet-and-clank.jpg",
        desc: "Ratchet and Clank: Tools of Destruction",
    },
    {
        image: "images/yu-gi-oh.jpg",
        desc: "Yu-gi-oh",
    },],
    [{
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
    },]
]

export default function myPosts(i){
    let allPosts = ``;
    for (let post of posts[i]){
        allPosts += `
        <div class="post">
            <img class="post-pics" src="${post.image}" />
            <p class="post-desc">${post.desc}</p>
        </div>`;
    }
    post.innerHTML = allPosts;
}
