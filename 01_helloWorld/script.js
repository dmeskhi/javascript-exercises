const container = document.querySelector("#container");

//const content = document.createElement("div");
//content.classList.add("content");
//content.textContent = "Hello, I'm David and I'm a web developer!";

const content = document.createElement("div");

content.classList.add("content");
content.setAttribute("style", "border: 1px solid black; width: 500px; background:pink;");
container.appendChild(content);


const header = document.querySelector(".content");

header.classList.add("h1");
header.innerHTML = "I'm a div<br /><br />";
header.appendChild(header);

const paragraph = document.querySelector(".content");

paragraph.classList.add("p");
paragraph.textContent = "Me too";
paragraph.appendChild(paragraph);
