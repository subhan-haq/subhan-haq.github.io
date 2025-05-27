const games = [
    {
        image: "images/mobileDevA1.png",
        desc: `Youtube link: <a href='https://youtu.be/czA1J9DgcXU'>https://youtu.be/czA1J9DgcXU</a> <br>
                This is a mobile application I created using dart. It is the first assignment of my mobile development course.`,
    },
    {
        image: "images/kronos.png",
        desc: `Youtube link: <a href='https://www.youtube.com/watch?v=yyN70NIa3hs&feature=youtu.be'>https://www.youtube.com/watch?v=yyN70NIa3hs&feature=youtu.be</a> <br>
                This was a game created by my groupmates and myself. The features I worked on individually was comming up with the concept and the implementation of the core time manipulation features.
                Some of the core features that I worked on included: taking care of the file reading and writing, the level editor component where users can create their own custom levels, the movement abilities, implementing other minor features,
                and the solo creation of our project presentation. Additionally, I was very heavily involved in the debugging of the projects code, which included my own AND my groupmate' code.`,
    },
    {
        image: "images/NASCAR.png",
        desc: `Youtube link: <a href='https://youtu.be/RjNXHYL4tfw'>https://youtu.be/RjNXHYL4tfw</a> <br>
                This was a NASCAR simulation that I worked on with a group partner. This was for our final project in our AI in video games course. We utilized many different AI principals and techinques that we talk about in the video.`,
    },
];

let allPosts = ``;

for (let post of games){
    allPosts += `
    <div class="post">
        <img class="post-pics" src="${post.image}" />
        <div class="post-desc">${post.desc}</div>
    </div>`;
}
post.innerHTML = allPosts;