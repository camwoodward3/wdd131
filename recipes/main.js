console.log(recipes,"here");

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

 

