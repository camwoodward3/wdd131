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
        lightsaber: 'Green',
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
        lightsaber: 'Blue',
        midochlorians: '13,400',
        council: '21-19BBY, replaced Depa Billaba',
        survivor: 'Order 66 Survivor'
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
        lightsaber: 'Blue',
        midochlorians: '27,000',
        council: '19BBY, replaced Oppo Rancisis'
    },
    {
        id: 4,
        imgSrc: 'images/yoda.jpeg',
        imgAlt: 'Yoda',
        name: 'Yoda',
        birth: '896 BBY',
        death: '4 ABY, Dagobah',
        species: 'Unknown',
        padawan: 'Count Dooku, Mace Windu, Ki-Adi Mundi, Obi-Wan Kenobi, Cin Drallig, Anakin Skywalker, Luke Skywalker',
        rank: 'Grand Master',
        lightsaber: 'Green',
        midochlorians: '16,900',
        council: '382-19BBY',
        survivor: 'Order 66 Survivor'

    },
    {
        id: 5,
        imgSrc: 'images/Mace_Windu.PNG',
        imgAlt: 'Mace_Windu',
        name: 'Mace Windu',
        birth: '72BBY, Haruun Kai',
        death: '19BBY, Coruscant',
        species: 'Human',
        master: 'Yoda',
        padawan: 'Depa Billaba',
        rank: 'Jedi Master',
        lightsaber: 'Purple',
        midochlorians: '12,000',
        council: '32-19BBY'
    },
    {
        id: 6,
        imgSrc: 'images/Ki-Adi_Mundi.JPG',
        imgAlt: 'Ki-Adi Mundi',
        name: 'Ki-Adi Mundi',
        birth: '92 BBY',
        death: '19BBY, Mygeeto',
        species: 'Cerean',
        Master: 'Yoda',
        rank: 'Jedi Master',
        lightsaber: 'Blue',
        midochlorians: '13,500',
        council: '33-19 BBY'
    },
    {
        id: 7,
        imgSrc: 'images/Plo_Koon.PNG',
        imgAlt: 'Plo Koon',
        name: 'Plo Koon',
        birth: '400 BBY',
        death: '19 BBY, Cato Neimoidia',
        species: 'Kel Dor',
        padawan: 'Butlar Swan',
        rank: 'Jedi Master',
        lightsaber: 'Blue',
        midochlorians: '12,800',
        council: '33-19 BBY'
    },
    {
        id: 8,
        imgSrc: 'images/Saesse_Tinn.jpeg',
        imgAlt: 'Saesse Tinn',
        name: 'Saesse Tinn',
        death: '19BBY, Coruscant',
        species: 'Iktotchi',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '40-19 BBY'
    },
    {
        id: 9,
        imgSrc: 'images/Yaddle.jpeg',
        imgAlt: 'Yaddle',
        name: 'Yaddle',
        birth: '509BBY',
        death: '32BBY, Coruscant',
        species: 'Unknown',
        padawan: 'Oppo Rancisis, Jarol Tapal',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        midochlorians: '13,817',
        council: '-32BBY'
    },
    {
        id: 10,
        imgSrc: 'images/Even_Piell.jpeg',
        imgAlt: 'Even Piell',
        name: 'Even Piell',
        death: '20BBY, Lola Sayu',
        species: 'Lannik',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '33-20BBY, replaced by Coleman Kcaj'
    },
    {
        id: 11,
        imgSrc: 'images/Oppo_Rancisis.JPG',
        imgAlt: 'Oppo Rancisis', 
        name: 'Oppo Rancisis',
        species: 'Thisspiasian',
        master: 'Yaddle',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '232-19BBY',
        survivor: 'Order 66 Survivor'
    },
    {
        id: 12,
        imgSrc: 'images/Ada_Gallia.jpeg',
        imgAlt: 'Ada Gallia',
        name: 'Ada Gallia',
        death: '19BBY, Florrum',
        species: 'Tholothian',
        family: 'Family',
        cousin: 'Stass Allie',
        rank: 'Jedi Master',
        lightsaber: 'Blue',
        council: '32-19BBY, replaced by Stass Allie'
    },
    {
        id: 13,
        imgSrc: 'images/Yarael_Poof.jpeg',
        imgAlt: 'Yarael Poof',
        name: 'Yarael Poof',
        death: '22BBY',
        species: "Quermian",
        rank: 'Jedi Master',
        lightsaber: 'Blue',
        council: '232-22BBY'
    },
    {
        id: 14,
        imgSrc: 'images/Eeth_Koth.jpeg',
        imgAlt: 'Eeth Koth',
        name: 'Eeth Koth',
        death: '14BBY',
        species: 'Zabrak',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '40-21BBY',
        survivor: 'Order 66 Survivor (19-14BBY)'
    },
    {
        id: 15,
        imgSrc: 'images/Depa_Billaba.JPG',
        imgAlt: 'Depa Billaba',
        name: 'Depa Billaba',
        death: '19BBY, Kaller',
        species: 'Chalactan',
        master: 'Mace Windu',
        padawan: 'Kanan Jarrus',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '40-21BBY'
    },
    {
        id: 16,
        imgSrc: 'images/Kit_Fisto.jpeg',
        imgAlt: 'Kit Fisto',
        name: 'Kit Fisto',
        death: '19BBY, Coruscant',
        species: 'Nautolan',
        padawan:'Nahdar Vebb',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        midochlorians: '17,300',
        council: '22-19BBY, replaced Coleman Trebor'
    },
    {
        id: 17,
        imgSrc: 'images/Shaak_Ti.jpeg',
        imgAlt: 'Shaak Ti',
        name: 'Shaak Ti',
        death: '19BBY',
        species: 'Togruta',
        rank: 'Jedi Master',
        lightsaber: 'Blue',
        midochlorians: '15,300',
        council: '32-19BBY, replaced Yaddle',
    },
    {
        id: 18,
        imgSrc: 'images/Coleman_Trebor.jpeg',
        imgAlt: 'Coleman Trebor',
        name: 'Coleman Trebor',
        death: '22BBY, Genosis',
        species: 'Vurk',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '23-22BBY, replaced Yarael Poof, replaced by Kit Fisto'
    },
    {
        id: 19,
        imgSrc: 'images/Agen_Kolar.jpeg',
        imgAlt: 'Agen Kolar',
        name: 'Agen Kolar',
        death: '19BBY, Coruscant',
        species: 'Zabrak',
        padawan: 'Tan Yuster',
        rank: 'Jedi Master',
        lightsaber: 'Green, Blue',
        council: '21-19BBY, replaced Eeth Koth'
    },
    {
        id: 20,
        imgSrc: 'images/Stass_Allie.jpeg',
        imgAlt: 'Stass Allie',
        name: 'Stass Allie',
        death: '19BBY, Saleucami',
        species: 'Tholothian',
        family: 'family',
        cousin: 'Ada Gallia',
        rank: 'Jedi Master',
        lightsaber: 'Green',
        council: '19BBY, replaced Ada Gallia'
    },
    {
        id: 21,
        imgSrc: 'images/Coleman_Kcaj.JPG',
        imgAlt: 'Coleman Kcaj',
        name: 'Coleman Kcaj',
        death: '9BBY',
        species: 'Ongree',
        rank: 'Jedi Master',
        lightsaber: 'Green',
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
            <h2>${item.name}</h2>
            <div class="biographic">
                <h3>Biographical Information</h3>
                ${item.birth ? `<p>Birth: ${item.birth}</p>` : ''}
                ${item.death ? `<p>Death: ${item.death}</p>` : ''}
            </div>
            <div class="family">
                ${item.family ? `<h3>${item.family}</h3>` : ''}
                ${item.parents ? `<p>Parents: ${item.parents}</p>` : ''}
                ${item.spouse ? `<p>Spouse: ${item.spouse}</p>` : ''}
                ${item.siblings ? `<p>Siblings: ${item.siblings}</p>` : ''}
                ${item.children ? `<p>Children: ${item.children}</p>` : ''}
                ${item.cousin ? `<p>Cousin(s): ${item.cousin}</p>` : ''}

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
            ${item.council ? `<p>Council Member: ${item.council}<p>` : ''}
            ${item.survivor ? `<p>${item.survivor}</p>` : ''}
        </div>
    `;
    newArticle.innerHTML = articleTemplate;
    container.appendChild(newArticle);
})

document.addEventListener('DOMContentLoaded')