const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch(
        "https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
    getImage();
});

const getData = async function () {
    const userRequest = await fetch ("https://randomuser.me/api?results=5");
    const data = await userRequest.json();

    const userResults = data.results;
    displayUsers(userResults);
};

getData();

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userReesults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
                <h3>${name}</h3>
                <p>${country}</p>
                <img src=${imageUrl} alt="User avatar" />
            `;
        randomFolks.append(userDiv);
    }
};