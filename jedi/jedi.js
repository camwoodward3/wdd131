import { articles } from "./jediList.js";

function convertHTML(item) {
  return `
        <div>
          <section class="modal-content">
          <span class="close-button" aria-label="Close modal">&times;</span>
          ${item.imgSrc2 ? `<img src="${item.imgSrc2}" alt="${item.imgAlt2}">` : ""}
          <h2>${item.name}</h2>
          <p>${item.info}</p>
          ${item.survivor ? `<h2>Order 66</h2>` : ""}
          ${item.survivor_info ? `<p>${item.survivor_info}</p>` : ""}
          ${item.death ? `<h2>Death</h2>` : ""}
          ${item.death_info ? `<p>${item.death_info}</p>` : ""}
          </section>
          </div>
          <div id="character">
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <button class="accordion ${item.lightsaber}">${item.name}</button>
            <div class="panel" style="display:none">
                <hr>
                <div class="biographic">
                    <h3>Biographical Information</h3>
                    ${item.birth ? `<p>Birth: ${item.birth}</p>` : ""}
                    ${item.death ? `<p>Death: ${item.death}</p>` : ""}
                </div>
                <hr>
                <div class="family">
                    ${item.family ? `<h3>${item.family}</h3>` : ""}
                    ${item.parents ? `<p>Parents: ${item.parents}</p>` : ""}
                    ${
                      item.grandparents
                        ? `<p>Grandparents: ${item.grandparents}</p>`
                        : ""
                    }
                    ${
                      item.stepParents
                        ? `<p>Step-Parents: ${item.stepParents}</p>`
                        : ""
                    }
                    ${item.spouse ? `<p>Spouse: ${item.spouse}</p>` : ""}
                    ${item.siblings ? `<p>Siblings: ${item.siblings}</p>` : ""}
                    ${item.children ? `<p>Children: ${item.children}</p>` : ""}
                    ${
                      item.uncleAunt
                        ? `<p>Uncles & Aunts: ${item.uncleAunt}</p>`
                        : ""
                    }
                    ${item.cousin ? `<p>Cousin(s): ${item.cousin}</p>` : ""}
                    ${
                      item.nephewNiece
                        ? `<p>Nephews/Nieces: ${item.nephewNiece}</p>`
                        : ""
                    }
                </div>
                <hr>
                <div class="descriptive">
                    <h3>Descriptive Information</h3>
                    <p>Species: ${item.species}</p>
                    <p>
                    ${item.master ? `<p>Trained by: ${item.master}</p>` : ""}
                    ${item.padawan ? `<p>Master to: ${item.padawan}</p>` : ""}
                    <p>Rank: ${item.rank}</p>
                    ${
                      item.lightsaber
                        ? `<p>Lightsaber: ${item.lightsaber}</p>`
                        : ""
                    }
                    ${
                      item.midochlorians
                        ? `<p>Midochlorians: ${item.midochlorians}</p>`
                        : ""
                    }
                </jedi>
                <hr>
                ${item.council ? `<p>Council Member: ${item.council}<p>` : ""}
                ${item.war ? `<p>${item.war}</p>` : ""}
                ${item.survivor ? `<p>${item.survivor}</p>` : ""}
                ${item.sith ? `<p>Sith: ${item.sith}</p>` : ""}
                ${item.alliance ? `<p>${item.alliance}</p>` : ""}
                ${item.republic ? `<p>${item.republic}</p>` : ""}
                ${item.newJediOrder ? `<p>${item.newJediOrder}</p>` : ""}
                ${item.resistance ? `<p>${item.resistance}</p>` : ""}
                ${item.mandalorians ? `<p>${item.mandalorians}</p>` : ""}
                ${item.civil_war ? `<p>${item.civil_war}</p>` : ""}
                ${item.lost ?  `<p>${item.lost}</p>` : ""}
                ${item.cold ? `<p>${item.cold}</p>` : ""}
                <hr>
                <h3>Appearances</h3>
                ${item.kotor ? `<p>${item.kotor}</p>` : ""}
                ${item.kotorII ? `<p>${item.kotorII}</p>` : ""}
                ${item.swtor ? `<p>${item.swtor}</p>` : ""}
                ${item.ta ? `<p>${item.ta}</p>` : ""}
                ${item.tpm ? `<p>${item.tpm}</p>` : ""}
                ${item.aotc ? `<p>${item.aotc}</p>` : ""}
                ${item.tcw ? `<p>${item.tcw}</p>` : ""}
                ${item.rots ? `<p>${item.rots}</p>` : ""}
                ${item.tbb ? `<p>${item.tbb}</p>` : ""}
                ${item.swjfo ? `<p>${item.swjfo}</p>` : ""}
                ${item.swjs ? `<p>${item.swjs}</p>` : ""}
                ${item.owk ? `<p>${item.owk}</p>` : ""}
                ${item.swr ? `<p>${item.swr}</p>` : ""}
                ${item.ro ? `<p>${item.ro}</p>` : ""}
                ${item.anh ? `<p>${item.anh}</p>` : ""}
                ${item.tesb ? `<p>${item.tesb}</p>` : ""}
                ${item.rotj ? `<p>${item.rotj}</p>` : ""}
                ${item.mandalorian ? `<p>${item.mandalorian}</p>` : ""} 
                ${item.tbobf ? `<p>${item.tbobf}</p>` : ""}
                ${item.ahsoka ? `<p>${item.ahsoka}</p>` : ""}
                ${item.tfa ? `<p>${item.tfa}</p>` : ""}
                ${item.tlj ? `<p>${item.tlj}</p>` : ""}
                ${item.ros ? `<p>${item.ros}</p>` : ""}

            </div>
        </div>
    `;
}
let filteredJedi = articles;
function renderJedi(JediList) {
  const container = document.querySelector("#article-container");
  container.innerHTML = ""; // Clear existing articles
  JediList.forEach((item) => {
    const newArticle = document.createElement("article");
    newArticle.classList.add("article");
    const articleTemplate = convertHTML(item);
    newArticle.innerHTML = articleTemplate;
    container.appendChild(newArticle);
  });

  // document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");

      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
    // });
  });
}
renderJedi(articles);

// function filterForAttributes(event) {
//   const selectedAttribute = event.target.value;

//   function performFilter(singleJediArticle) {
//     const currentJediTags = singleJediArticle.tags;
//     if (!currentJediTags) {
//       console.log("This Jedi doesn't have a tag");
//       return false;
//     }
//     return currentJediTags.includes(selectedAttribute);
//   }
//   filteredJedi = filteredJedi.filter(performFilter);

//   // Clear the container before rendering the filtered Jedi
//   renderJedi(filteredJedi);
// }

let tagSelector = document.getElementById("attribute-tags");
tagSelector.addEventListener("change", filter); 

// function filterForRanks(rank) {
//   const selectedRank = rank.target.value;
//   // if selectedRank = All {

//   // }

//   function performFilter(singleJediArticle) {
//     const currentJediTags = singleJediArticle.tags;
//     if (!currentJediTags) {
//       console.log("This Jedi doesn't have a tag");
//       return false;
//     }
//     return currentJediTags.includes(selectedRank);
//   }
//   filteredJedi = filteredJedi.filter(performFilter);

//   // Clear the container before rendering the filtered Jedi
//   renderJedi(filteredJedi);
// }

let rankSelector = document.getElementById("rank-tags");
rankSelector.addEventListener("change", filter);

function filter() {
  const selectedAttribute = document.querySelector("#attribute-tags").value;
  const selectedSpecies = document.querySelector("#species-tags").value;
  const selectedRank = document.querySelector("#rank-tags").value;
  const selectedColor = document.querySelector("#color-tags").value;
  // Get the selected value from all three select elements.

  const filtered = articles
    .filter((article) => {
      if (selectedAttribute == "All") {
        return true;
      } else if (!article.tags) {
        return false;
      } else if (article.tags.includes(selectedAttribute)) {
        return true;
      }
    })
    .filter((article) => {
      if(selectedSpecies == "All") {
        return true;
      } else if (article.species == selectedSpecies) {
        return true;
      } else {
        return false;
      }
    })
    .filter((article) => {
      if (selectedRank == "All") {
        return true;
      } else if (article.rank == selectedRank) {
        return true;
      } else {
        return false;
      }
    })
    .filter((article) => {
      if ((selectedColor == "All")) {
        return true;
      } else if (article.lightsaber && article.lightsaber.toLowerCase() === selectedColor.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filtered);
  // function performFilter(singleJediArticle) {
  //     const currentJediTags = singleJediArticle.tags;

  //     if (!currentJediTags) {
  //         console.log("This Jedi doesn't have a tag");
  //         return false;
  //     }
  //     return (currentJediTags.includes(selectedColor)||
  //     currentJediTags.includes(selectedRank) ||
  //     currentJediTags.includes(selectedAttribute)
  // );
  // }
  // // filtered = articles.filter(performFilter);
  renderJedi(filtered);
}

let speciesSelector = document.getElementById("species-tags");
speciesSelector.addEventListener("change", filter);

let colorSelector = document.getElementById("color-tags");
colorSelector.addEventListener("change", filter);
