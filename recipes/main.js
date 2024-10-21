import {recipes} from "./recipes.js";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}


let template = document.getElementById("recipeTemplate");
template.innerHTML = recipeTemplate(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
    let stringBuilder = `<div class="recipe">
    <img src="${recipe.image}" alt="apple crisp">
    <div class="info">`;
        stringBuilder += tagsTemplate(recipe.tags);
        stringBuilder += `
        <h2>${recipe.name}</h2>
        <span
            class="rating"
            role="img"
            aria-label="Rating: ${recipe.rating} out of 5 stars"
            >`
            for(let i = 0; i < 5; i++) {
                if (i <recipe.rating) {
                    stringBuilder += `<span aria-hidden="true" class="icon-star">⭐</span>`     
                } else {
                   stringBuilder += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
                }
            } stringBuilder += 
            `
          </span>
            <p class="hide">${recipe.description}</p>
    </div>
 </div>`;

 return stringBuilder;
}

function tagsTemplate(tags) {
    let stringBuilder = ''
    tags.forEach(tag => {
        stringBuilder +=
        `<button id="button">${tag}</button>`
    });
    return stringBuilder;
}
function renderRecipes(recipeList) {
    let template = document.getElementById("recipeTemplate");
    const html = recipeList.map(recipeTemplate);
    template.innerHTML = html.join("");
}



function filter(query) {
    function filterFunction(recipe) {
        return (
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }
    const filtered = recipes.filter(filterFunction)
	console.log(filtered)
    // const sorted = filtered.sort(sortFunction)
    return filtered
}


function searchHandler(e) {
    e.preventDefault();
	const searchElement = document.querySelector("#find-a-recipe");
	const query = searchElement.value.toLowerCase();
	const filtered = filter(query);
    renderRecipes(filtered);
}

document.querySelector("#search-button").addEventListener('click', searchHandler);


 

