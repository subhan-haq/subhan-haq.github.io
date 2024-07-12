const pics = [
    {
        caption: "Signal Hill's Hill Top View",
        class: "landscape",
        image: "../photography/IMG_0666.jpg",
    },
    {
        caption: "Bowring Park Winter Sky",
        class: "landscape",
        image: "../photography/IMG_0949.jpg",
    },
    {
        caption: "Puffin Sculptures at the Botanical Ceneter",
        class: "portrait",
        image: "../photography/IMG_0717.jpg",
    },
    {
        caption: "Illuminated Tree",
        class: "portrait",
        image: "../photography/IMG_1005.jpg",
    },
];

let allPhotos = `<div id="all">`;

for (let pic of pics){
    allPhotos += `
    <div class="test">
        <h5 class="imgCap">${pic.caption}</h5>
        <img class="${pic.class}" src="${pic.image}" />
    </div>`;
}
allPhotos += `</div>`
photos.innerHTML = allPhotos;