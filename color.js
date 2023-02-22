const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 30;

const generatePalette = () => {
    
    //clearing the container
    container.innerHTML = "";
    
    for (let i = 0; i < maxPaletteBoxes; i++) {
       
        //Generating Random Color codes
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
       
       
        //creating li element & inserting the element to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        
        
        //Copying the color code
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    
    //Copying the value, updating the text to copied
    //after 1 sec the text will change to its original hex value
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000)
    }).catch(() => alert("Failed to copy the color code!")); //Alert in case color can't be copied
}


refreshBtn.addEventListener("click", generatePalette);