const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript";
document.body.append(newParagraph);

const newImage = document.createElement("img")
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.")
document.body.append(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li><One></li><li>Two</li><li>Three</li></ul>";
document.body.append(newDiv);


const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.append(newH2);
const newP = document.createElement("p")
newP.innerText = "This was added through JavaScript";
newSection.append(newP);
document.body.append(newSection)

