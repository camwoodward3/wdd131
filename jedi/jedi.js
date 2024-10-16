const articles = [
    {
        id: 1,
        imgSrc: 'images/quigon.jpg',
        imgAlt: 'Qui-Gon Jinn',
        name: 'Qui-Gon Jinn',
        birth: '80BBY, Coruscant',
        death: '32BBY, Naboo',
        species: 'Human',
        master: 'Count Dooku',
        padawan: 'Obi-Wan Kenobi',
        rank: 'Jedi Master',
        lightsaber: 'green',
        midochlorians: '17,500'
    },
    {
        id: 2,
        imgSrc: 'images/obiwan.jpeg', 
        imgAlt: 'Obi-Wan Kenobi',
        name: 'Obi-Wan Kenobi',
        birth: '57BBY, Stewion',
        death: '0 ABY, Death Star',
        species: 'Human',
        master: 'Qui-Gon Jinn',
        padawan: 'Anakin Skywalker, Luke Skywalker',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '13,400',
        council: '21-19BBY, replaced Depa Billaba',
        survivor: 'Order 66 Survivor (19BBY-0ABY)'
    },
    {
        id: 3,
        imgSrc: 'images/anakin.jpg',
        imgAlt: 'Anakin Skywalker',
        name: 'Anakin Skywalker',
        birth: '41 BBY, Tatooine',
        death: '4 ABY, Death Star',
        species: 'Human',
        family: 'Family',
        parents: 'Shmi Skywalker, Cliegg Lars(step-father)',
        spouse: 'Padme Amidala',
        siblings: 'Owen Lars, Beru(sister-in-law)',
        children: 'Luke Skywalker, Leia Organa',
        master: 'Obi-Wan Kenobi',
        padawan: 'Ahsoka Tano',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        midochlorians: '27,000',
        council: '19BBY, replaced Oppo Rancisis'
    },
    {
        id: 4,
        imgSrc: 'images/Quinlan_Vos.jpeg',
        imgAlt: 'Quinlan Vos',
        name: 'Quinlan Vos',
        birth: '57BBY',
        species: 'Human/Kiffar',
        master: 'Tholme, Count Dooku',
        padawan: 'Aayla Secura',
        rank: 'Jedi Master',
        lightsaber: 'green',
        survivor: 'Order 66 Survivor'

    },
    {
        id: 5,
        imgSrc: 'images/yoda.jpeg',
        imgAlt: 'Yoda',
        name: 'Yoda',
        birth: '896 BBY',
        death: '4 ABY, Dagobah',
        species: 'Unknown',
        padawan: 'Count Dooku, Mace Windu, Ki-Adi Mundi, Obi-Wan Kenobi, Cin Drallig, Anakin Skywalker, Luke Skywalker',
        rank: 'Grand Master',
        lightsaber: 'green',
        midochlorians: '16,900',
        council: '382-19BBY',
        survivor: 'Order 66 Survivor'

    },
    {
        id: 6,
        imgSrc: 'images/Mace_Windu.PNG',
        imgAlt: 'Mace_Windu',
        name: 'Mace Windu',
        birth: '72BBY, Haruun Kai',
        death: '19BBY, Coruscant',
        species: 'Human',
        master: 'Yoda',
        padawan: 'Depa Billaba',
        rank: 'Jedi Master',
        lightsaber: 'purple',
        midochlorians: '12,000',
        council: '32-19BBY'
    },
    {
        id: 7,
        imgSrc: 'images/Ki-Adi_Mundi.JPG',
        imgAlt: 'Ki-Adi Mundi',
        name: 'Ki-Adi Mundi',
        birth: '92 BBY',
        death: '19BBY, Mygeeto',
        species: 'Cerean',
        Master: 'Yoda',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '13,500',
        council: '33-19 BBY'
    },
    {
        id: 8,
        imgSrc: 'images/Plo_Koon.PNG',
        imgAlt: 'Plo Koon',
        name: 'Plo Koon',
        birth: '400 BBY',
        death: '19 BBY, Cato Neimoidia',
        species: 'Kel Dor',
        padawan: 'Butlar Swan',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '12,800',
        council: '33-19 BBY'
    },
    {
        id: 9,
        imgSrc: 'images/Saesse_Tinn.jpeg',
        imgAlt: 'Saesse Tinn',
        name: 'Saesse Tinn',
        death: '19BBY, Coruscant',
        species: 'Iktotchi',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '40-19 BBY'
    },
    {
        id: 10,
        imgSrc: 'images/Yaddle.jpeg',
        imgAlt: 'Yaddle',
        name: 'Yaddle',
        birth: '509BBY',
        death: '32BBY, Coruscant',
        species: 'Unknown',
        padawan: 'Oppo Rancisis, Jarol Tapal',
        rank: 'Jedi Master',
        lightsaber: 'green',
        midochlorians: '13,817',
        council: '-32BBY'
    },
    {
        id: 11,
        imgSrc: 'images/Even_Piell.jpeg',
        imgAlt: 'Even Piell',
        name: 'Even Piell',
        death: '20BBY, Lola Sayu',
        species: 'Lannik',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '33-20BBY, replaced by Coleman Kcaj'
    },
    {
        id: 12,
        imgSrc: 'images/Oppo_Rancisis.JPG',
        imgAlt: 'Oppo Rancisis', 
        name: 'Oppo Rancisis',
        species: 'Thisspiasian',
        master: 'Yaddle',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '232-19BBY',
        survivor: 'Order 66 Survivor'
    },
    {
        id: 13,
        imgSrc: 'images/Ada_Gallia.jpeg',
        imgAlt: 'Ada Gallia',
        name: 'Ada Gallia',
        death: '19BBY, Florrum',
        species: 'Tholothian',
        family: 'Family',
        cousin: 'Stass Allie',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        council: '32-19BBY, replaced by Stass Allie'
    },
    {
        id: 14,
        imgSrc: 'images/Yarael_Poof.jpeg',
        imgAlt: 'Yarael Poof',
        name: 'Yarael Poof',
        death: '22BBY',
        species: "Quermian",
        rank: 'Jedi Master',
        lightsaber: 'blue',
        council: '232-22BBY'
    },
    {
        id: 15,
        imgSrc: 'images/Eeth_Koth.jpeg',
        imgAlt: 'Eeth Koth',
        name: 'Eeth Koth',
        death: '14BBY',
        species: 'Zabrak',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '40-21BBY',
        tags: ['Order 66 Survivor']
    },
    {
        id: 16,
        imgSrc: 'images/Depa_Billaba.JPG',
        imgAlt: 'Depa Billaba',
        name: 'Depa Billaba',
        death: '19BBY, Kaller',
        species: 'Chalactan',
        master: 'Mace Windu',
        padawan: 'Kanan Jarrus',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '40-21BBY'
    },
    {
        id: 17,
        imgSrc: 'images/Kit_Fisto.jpeg',
        imgAlt: 'Kit Fisto',
        name: 'Kit Fisto',
        death: '19BBY, Coruscant',
        species: 'Nautolan',
        padawan:'Nahdar Vebb',
        rank: 'Jedi Master',
        lightsaber: 'green',
        midochlorians: '17,300',
        council: '22-19BBY, replaced Coleman Trebor'
    },
    {
        id: 18,
        imgSrc: 'images/Luminara.jpeg',
        imgAlt: 'Luminara Unduli',
        name: 'Luminara Unduli',
        death: '19BBY',
        species: 'Mirialan',
        padawan: 'Barris Offee',
        rank: 'Jedi Master',
        lightsaber: 'green',
        midochlorians: '16,200',
        survivor: 'Order 66 Suvivor'
    },
    {
        id: 19,
        imgSrc: 'images/Barris_Offee.jpg',
        imgAlt: 'Barris Offee',
        name: 'Barris Offee',
        birth: '40BBY',
        species: 'Mirialan',
        master: 'Luminara Unduli',
        rank: 'Padawan',
        lightsaber: 'blue',
        survivor: 'Order 66 Survivor'
    },
    {
        id: 20,
        imgSrc: 'images/Shaak_Ti.jpeg',
        imgAlt: 'Shaak Ti',
        name: 'Shaak Ti',
        death: '19BBY',
        species: 'Togruta',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '15,300',
        council: '32-19BBY, replaced Yaddle',
    },
    {
        id: 21,
        imgSrc: 'images/Coleman_Trebor.jpeg',
        imgAlt: 'Coleman Trebor',
        name: 'Coleman Trebor',
        death: '22BBY, Genosis',
        species: 'Vurk',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '23-22BBY, replaced Yarael Poof, replaced by Kit Fisto'
    },

    {
        id: 22,
        imgSrc: 'images/Jocasta_Nu.jpg',
        imgAlt: 'Jocasta Nu',
        name: 'Jocasta Nu',
        death: '19BBY, Coruscant',
        species: 'Human',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        survivor: 'Order 66 Survivor'
    },

    {
        id: 23,
        imgSrc: 'images/Zett_Jukassa.jpg',
        imgAlt: 'Zett Jukassa',
        name: 'Zett Jukassa',
        death: '19BBY, Coruscant',
        rank: 'Padawan',
        lightsaber: 'blue'
    },
    {
        id: 24,
        imgSrc: 'images/Aayla_Secura.jpg',
        imgAlt: 'Aayla Secura',
        name: 'Aayla Secura',
        birth: '48BBY, Ryloth',
        death: '19BBY, Felucia',
        species: "Twi'lek",
        master: 'Quinlan Vos',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '10,000'  
    },
    {
        id: 25,
        imgSrc: 'images/Sifo-Dyas.jpg',
        imgAlt: 'Sifo-Dyas',
        name: 'Sifo-Dyas',
        birth: '102BBY, Minashee',
        death: '32BBY, over the Oba Diah moon',
        species: 'Human',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        council: '39-before 32BBY',
    },
    {
        id: 27,
        imgSrc: 'images/Dooku.jpeg',
        imgAlt: 'Count Dooku',
        name: 'Count Dooku',
        birth: '102BBY, Serennoo',
        death: '19BBY, Coruscant',
        species: 'Human',
        master: 'Yoda, Darth Sidious',
        padwan: 'Qui-Gon Jinn, Asajj Ventress, Savage Oppress, Quinlan Vos, General Grievous',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '16,500'

    },
    {
        id: 28,
        imgSrc: 'images/Pablo_Jill.jpeg',
        imgAlt: 'Pablo Jill',
        name: 'Pablo Jill',
        death: 'between 19-9BBY',
        species: 'Ongree',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
    },
    {
        id: 29,
        imgSrc: 'images/Agen_Kolar.jpeg',
        imgAlt: 'Agen Kolar',
        name: 'Agen Kolar',
        death: '19BBY, Coruscant',
        species: 'Zabrak',
        padawan: 'Tan Yuster',
        rank: 'Jedi Master',
        lightsaber: 'green, blue',
        council: '21-19BBY, replaced Eeth Koth'
    },
    {
        id: 30,
        imgSrc: 'images/Stass_Allie.jpeg',
        imgAlt: 'Stass Allie',
        name: 'Stass Allie',
        death: '19BBY, Saleucami',
        species: 'Tholothian',
        family: 'family',
        cousin: 'Ada Gallia',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '19BBY, replaced Ada Gallia'
    },
    { 
        id: 31,
        imgSrc: 'images/Butlar_Swan.jpg',
        imgAlt: 'Butlar Swan',
        name: 'Butlar Swan',
        species: 'Human',
        master: 'Plo Koon',
        rank: 'Jedi Master',
        lightsaber: 'green',
    },

    {
        id: 32,
        imgSrc: 'images/Nicanas_Tassu.jpg',
        imgAlt: 'Nicanas Tassu',
        name: 'Nicanas Tassu',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'green'
    },
    {
        id: 33,
        imgSrc: 'images/Sephjet_Josall.jpg',
        imgAlt: 'Sephjet Josall',
        name: 'Sephjet Josall',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue'
    },
    {
        id: 34,
        imgSrc: 'images/Sar_Laboooda.jpg',
        imgAlt: 'Sar Laboooda',
        name: 'Sar Laboooda',
        death: '22BBY, Genosis',
        species: 'Human',
        family: 'Family',
        siblings: 'Depa Billaba',
        rank: 'Unknown',
        lightsaber: 'green'
    },
    {
        id: 35,
        imgSrc: 'images/Sarissa_Jeng.jpg',
        imgAlt: 'Sarissa Jeng',
        name: 'Sarissa Jeng',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue'
    },
    {
        id: 36,
        imgSrc: 'images/Ekim_Ryelli.jpg',
        imgAlt: 'Ekim Ryelli',
        name: 'Ekim Ryelli',
        species: 'Human',
        rank: 'Jedi Master',
        lightsaber: 'green'
    },
    {
        id: 37,
        imgSrc: 'images/Lumas_Etima.jpg',
        imgAlt: 'Lumas Etima',
        name: 'Lumas Etima',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Padawan',
        lightsaber: 'blue'
    },
    {
        id: 38,
        imgSrc: 'images/Tan_Yuster.jpg',
        imgAlt: 'Tan Yuster',
        name: 'Tan Yuster',
        death: '22BBY, Genosis',
        species: 'Human',
        master: 'Agen Kolar',
        rank: 'Padawan',
        lightsaber: 'green'
    },
    {
        id: 39,
        imgSrc: 'images/Fi-Ek_Sirch.jpg',
        imgAlt: 'Fi-Ek Sirch',
        name: 'Fi-Ek Sirch',
        death: '22BBY, Genosis',
        species: 'Nikito',
        rank: 'Jedi Knight',
        lightsaber: 'blue'
    },
    {
        id: 40,
        imgSrc: 'images/Que-Mars_Redath-Gom.jpg',
        name: 'Que-Mars Redath-Gom',
        death: '22BBY, Genosis',
        species: 'Weequay',
        rank: 'Jedi Knight',
        lightsaber: 'green'
    },
    {
        id: 41,
        imgSrc: 'images/Ichi-Tan_Micoda.jpeg',
        imgAlt: 'Ichi-Tan Micoda',
        name: 'Ichi-Tan Micoda',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue'
    },
    {
        id: 42,
        imgSrc: 'images/Roan_Shryne.jpg',
        imgAlt: 'Roan Shryne',
        name: 'Roan Shryne',
        death: '19BBY, Kashykk',
        species: 'Human',
        master: 'Nat-Sem',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        survivor: 'Order 66 Survivor'
    },
    {
        id: 43,
        imgSrc: 'images/Joclad_Danva.jpg',
        imgAlt: 'Joclad Danva',
        name: 'Joclad Danva',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'green'
    },
    {
        id: 44,
        imgSrc: 'images/Roth-Del_Masona.jpg',
        imgAlt: 'Roth-Del Masona',
        name: 'Roth-Del Masona',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue'

    },
    {
        id: 45,
        imgSrc: 'images/Tarados_Gon.jpg',
        imgAlt: 'Tarados Gon',
        name: 'Tarados Gon',
        species: 'Klatooinian',
        rank: 'Jedi Knight',
        lightsaber: 'blue'
    },
    {
        id: 46,
        imgSrc: 'images/Sora_Bulq.jpg',
        imgAlt: 'Sora Bulq',
        name: 'Sora Bulq',
        species: 'Weequay',
        padawan: 'Galdos Stouff',
        rank: 'Jedi Master',
        lightsaber: 'blue'
    },
    {
        id: 47,
        imgSrc: 'images/Khaat_Qiyn.jpg',
        imgAlt: 'Khaat Qiyn',
        name: 'Khaat Qiyn',
        species: 'Human',
        padawan: 'Bairdon Jace',
        rank: 'Jedi Knight',
        lightsaber: 'green'
    },
    {
        id: 48,
        imgSrc: 'images/Bairdon_Jace.jpg',
        imgAlt: 'Bairdon Jace',
        name: 'Bairdon Jace',
        species: 'Human',
        master: 'Khaat Qiyn',
        rank: 'Padawan',
        lightsaber: 'blue'
    },
    {
        id: 49,

    },
    {
        id: 50,

    },
    {
        id: 51,

    },
    {
        id: 52,

    },
    {
        id: 50,
        imgSrc: 'images/Coleman_Kcaj.JPG',
        imgAlt: 'Coleman Kcaj',
        name: 'Coleman Kcaj',
        death: '9BBY',
        species: 'Ongree',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '19BBY, replaced Even Piell',
        survivor: 'Order 66 Survivor (19-9BBY)'


    }

]

const container = document.querySelector('#article-container');
articles.forEach(item => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article');
    const articleTemplate = `
        <div id="character">
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <button class="accordion ${item.lightsaber}">${item.name}</button>
            <div class="panel" style="display:none">
                <hr>
                <div class="biographic">
                    <h3>Biographical Information</h3>
                    ${item.birth ? `<p>Birth: ${item.birth}</p>` : ''}
                    ${item.death ? `<p>Death: ${item.death}</p>` : ''}
                </div>
                <hr>
                <div class="family">
                    ${item.family ? `<h3>${item.family}</h3>` : ''}
                    ${item.parents ? `<p>Parents: ${item.parents}</p>` : ''}
                    ${item.spouse ? `<p>Spouse: ${item.spouse}</p>` : ''}
                    ${item.siblings ? `<p>Siblings: ${item.siblings}</p>` : ''}
                    ${item.children ? `<p>Children: ${item.children}</p>` : ''}
                    ${item.cousin ? `<p>Cousin(s): ${item.cousin}</p>` : ''}
                </div>
                <hr>
                <div class="descriptive">
                    <h3>Descriptive Information</h3>
                    <p>Species: ${item.species}</p>
                    <p>
                    ${item.master ? `<p>Trained by: ${item.master}</p>` : ''}
                    ${item.padawan ? `<p>Master to: ${item.padawan}</p>` : ''}
                    <p>Rank: ${item.rank}</p>
                    <p>Lightsaber: ${item.lightsaber}</p>
                    ${item.midochlorians ? `<p>Midochlorians: ${item.midochlorians}</p>` : ''}
                </jedi>
                <hr>
                ${item.council ? `<p>Council Member: ${item.council}<p>` : ''}
                ${item.survivor ? `<p>${item.survivor}</p>` : ''}
            </div>
        </div>
    `;
    newArticle.innerHTML = articleTemplate;
    container.appendChild(newArticle);
})

document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});
