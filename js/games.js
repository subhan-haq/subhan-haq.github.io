const games = [
    {
        image: "../images/hollow-knight.jpg",
        desc: `Hollow Knight is my favourite game. I have almost 300 hours in the game and have even earned all the achievments there are to unlock. I have also beaten all but 1 of the bosses 
                without taking any damage. Hollow Knight is an incredible game which provides all I seek in video game. The art is stunning, the mechanics and controls are fluid, the combat 
                doesn't feel repetative, the world is immersive, there is lots to explore and to come back to, the soundtrack is great, and the bosses are fun to fight and rewarding to beat.
                Hollow knight truly is an adventure. The best part - the game is only $20 on steam and $10 when its on sale. Being such a high quality game with tons of replay value, there isn't
                more you could ask for as a gamer; other than for the sequal Hollow Knight Silksong to release already (its never happening, I've been waiting for over 5 years now).`,
    },
    {
        image: "../images/link-to-the-past.webp",
        desc: `The legend of Zelda: A Link to the Past was the first Zelda game I ever played. I played it on the gameboy and absolutely loved every second of it. It was one of very few good gameboy
                games I could play at the time. It was my first zelda game and its still my favourite. I have played many of the others - Phantom Hourglass, Spirit Tracks, Ocarina of Time, Majora's Maks
                Minish Cap, a Link Between Worlds, and Breath of the Wild - all of them are good, but none are better than A Link to the Past.`,
    },
    {
        image: "../images/ratchet-and-clank.jpg",
        desc: `Ratchet and Clank: Tools of Destruction is probably my favourite Ratchet and Clank game. This game series isn't one, or at least wasn't one, of the series that were all that widely talked
                about until more recently; however, it has always released great games that dedicated fans adore. I origionally played my first Ratchet and Clank game on the psp, Ratchet and Clank: Size Matters,
                and played the rest on the ps3. I have always loved this series and always will. I unfortunately was never able to play the more recently released games on the ps4 and ps5 and probably never will
                considering how expensive those consoles were and with what a limited library they had compared to the ps3 - not to mention you have to pay to use your own internet to play online. Ratchet and Clank
                is an action packed adventure, its humerous, and its honestly just really cool.`,
    },
    {
        image: "../images/yu-gi-oh.jpg",
        desc: `Yu-Gi-Oh used to be one of my favourite games to play with friends. I remember being around 6 when an older friend of mine taught me how to play. I started watching the anime whenever it would come
                on 4kids because of this - back when 4kids was still around. I went and watched all the other iterations of the show up until Yu-Gi-Oh Zexal. I loved all the openings, but Yu-Gi-Oh 5D's was 
                certainly my favourite. Yu-Gi-Oh Gx was my favourite iteration though - which is actually pretty unpopular opinion among the Yu-Gi-Oh community. I actually went and rewatched it during the summmer 
                of 2023 - over a decade later. I continued playing the game with friends either in person or online until I was around 14. Unfortunately, the creators of the game took in a direction I wasn't
                fond of. The game ultimately became too fast paced and was no longer fun. Almost a decade later when I tried to get back into the game I saw that not only were the same problems still there -
                they were far worse than before. Most matches only last a few turns now with most turns taking 5 minutes of either player trying to win in 1 turn or as fast as possible without giving their 
                opponent the opportunity to actualy play the game, or have fun. Even though I no longer play the game I still think about it from time to time, often times finding myself missing it.`,
    },
];

let allPosts = ``;

for (let post of games){
    allPosts += `
    <div class="post">
        <img class="post-pics" src="${post.image}" />
        <div class="post-desc">${post.desc}</p>
    </div>`;
}
post.innerHTML = allPosts;