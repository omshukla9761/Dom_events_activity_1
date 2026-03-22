let btn = document.querySelector('button');

btn.addEventListener("click", function () {
    // console.log("button clicked");
    let heading = document.querySelector("h2");

    let rgbcolor = getrgbvalue();
    heading.innerText = rgbcolor;

    let div = document.querySelector('div');3
    div.style.backgroundColor = rgbcolor;
    console.log("color updated");
});


function getrgbvalue() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb; // return value
};
