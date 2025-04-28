function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green  = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
   
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}


        const colorButton = document.getElementById("colorButton");

        colorButton.addEventListener("click", changeBackgroundColor);
    