function motivationalSpeechWallpaper(message, colorCode, wallpaperUrl, verticalLocation, horizontalLocation) {

    let innerFlex = document.createElement("div");
    innerFlex.classList.add("innerFlex");
    // innerFlex.classList.add("d-flex", "justify-content-center", "align-items-center");

    let container = document.createElement("div");
    container.classList.add("container");



    let messageDiv = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = message;
    p.style.color = "#" + colorCode;
    p.style.fontSize = "25px";
    if (verticalLocation === "top" && horizontalLocation === "right") {
        messageDiv.classList.add("top-right");
    }
    else if (verticalLocation === "center" && horizontalLocation === "left") {
        messageDiv.classList.add("center-left");
    }
    else if (verticalLocation === "center" && horizontalLocation === "center") {
        messageDiv.classList.add("center-center");
    }
    messageDiv.append(p);

    let pictureImg = document.createElement("img");
    pictureImg.src = wallpaperUrl;



    container.append(pictureImg);
    container.append(messageDiv);
    innerFlex.append(container);

    return innerFlex;
}

let domObj = document.getElementById("target");

let div1 = motivationalSpeechWallpaper("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");

let div2 = motivationalSpeechWallpaper("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");

let div3 = motivationalSpeechWallpaper("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

domObj.append(div1);
domObj.append(div2);
domObj.append(div3);