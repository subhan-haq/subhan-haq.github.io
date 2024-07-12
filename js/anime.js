const shows = [
    {
        image: "../images/dragon-ball.jpg",
        desc: `Like many others, Dragon Ball was one of the first anime I watched growing up along with many other iconic shows: pokemon, yugioh, digimon, and the list goes on.
                Dragon ball certainly influenced a lot of my interests early on as a child; many of which still remain today. Watching Goku train with dedication and conviction
                to become stronger was truly inspiring and was one of the reasons I started working out. It's also one of the reasons I love watching martial arts, such as boxing and MMA.`,
    },
    {
        image: "../images/vagabond.webp",
        desc: `Vagabond if my favourite manga of all time. Everything is perfect, from the story, to the art, to the characters, to the character development, and even the "ending." 
                The story follows the main character, Musashi Miyamoto, and his difficult journey to prove himself as a skilled and powerful swordsman. Early on we learn that Musashi has always
                been a troubled child, having a rough upbringing, and very few people to rely on. Through his travels and journey, Musashi not only grows as a swordsman, but also as an individual.
                The official manga has been on hiatus for almost a decade now with little to no hope of returning any time soon; however, the story leaves off at a point which is satisfying to me 
                as the reader. Seeing just how much Musashi has grown and gone through inspires me to grow in my own way as well.`,
    },
    {
        image: "../images/yu-yu-hakusho.webp",
        desc: `Yu Yu Hakusho funnily enough was a show I discovered through a gameboy game. I had no idea what the game was called or who the characters were because the game was actually in Japanese.
                I had mostly forgotten about it until almost 10 years later when I came across an online post where I immediately recognized the characters. I looked through the comments and discovered
                the show I had long been searching for. Yu Yu Hakusho follows the story of Yusuke Urameshi, a high school delinquent with almost no friends and no future. However, that all changes 
                when Yusuke encounters the spirit world. Spoiler alert: <p class="spoiler">Yusuke actually dies in the first episode which is how he encounters the spirit world. Due to the nature of his death
                they grant him a conditional second chance at life.</p> Through many trials, Yusuke encounters new people, some of which join him on his journey and ultimately become his close friends.
                Though Yu Yu hakusho may sound like a generic shonen anime, it's often times quite emotional and very well written. The author of Yu Yu Hakusho, Yoshiro Togashi, is actually the author of another
                incredibly popular series, Hunter x Hunter, another manga/anime that I love.`,
    },
    {
        image: "../images/code-geass.jpg",
        desc: `Code Geass is truly a master-piece. It rivals Death Note - being even better in my opionion: beautiful art with vibrant colours, an interesting story packed with strategic action, 
                lovely music, and captivating characters. I still remember watching the first episode and being completely hooked - something few shows are able to do in just 1 episode. I don't think
                I'll ever get over just how good the first opening is either. Theres too much to say and not enough words to say it all in, so I'll just say this: Code Geass has a phenomenal beginning and
                a phenomenal ending.`,
    },
];

let allPosts = ``;

for (let post of shows){
    allPosts += `
    <div class="post">
        <img class="post-pics" src="${post.image}" />
        <div class="post-desc">${post.desc}</div>
    </div>`;
}
post.innerHTML = allPosts;