const games = [
    {
        image: "images/mobileDevA1.png",
        desc: `Youtube link: <a href='https://youtu.be/czA1J9DgcXU'>https://youtu.be/czA1J9DgcXU</a> <br>
                This is a mobile application I created using dart. It is the first assignment of my mobile development course.`,
    },
    {
        image: "images/subhanInfo.png",
        desc: `Youtube link: <a href='https://youtu.be/MiIYiMqhka4'>https://youtu.be/MiIYiMqhka4</a> <br>
                An interactive infographic I created for my data visualization class. I Used the libraries: NumPy, Pandas, and Matplotlib throughout the assignment to clean and manipulate the data along with create
                the visualizations. To create the interactive component of this assignment I utilized IPyWidgets library for a better user experience.`,
    },
    {
        image: "images/kronos.png",
        desc: `Youtube link: <a href='https://www.youtube.com/watch?v=yyN70NIa3hs&feature=youtu.be'>https://www.youtube.com/watch?v=yyN70NIa3hs&feature=youtu.be</a> <br>
                This was a game created by my groupmates and myself. The features I worked on individually was comming up with the concept and the implementation of the core time manipulation features.
                Some of the core features that I worked on included: taking care of the file reading and writing, the level editor component where users can create their own custom levels, the movement abilities, implementing other minor features,
                and the solo creation of our project presentation. Additionally, I was very heavily involved in the debugging of the projects code, which included my own AND my groupmate' code.`,
    },
    {
        image: "images/GameOfLife.png",
        desc: `Youtube link: <a href='https://youtu.be/5dTWdfMPKrU'>https://youtu.be/5dTWdfMPKrU</a> <br>
                This is a Java project I created called the Game of Life. It was origionally created by John Conway. Depending on how many neighbouring pixels a pixel has, it either lives, dies, or is born.`,
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