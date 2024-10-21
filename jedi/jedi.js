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
        midochlorians: '17,500',
        tags: ["Jedi Master", "Green", "Human"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor (19BBY-0ABY)',
        alliance: 'Rebel Alliance (0ABY)',
        tags: ["Jedi Master", "Blue", "Human", "Jedi Council", "Genosis Strike Team", "Clone Wars", "Order 66 Survivor", "Rebel Alliance"]
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
        war: 'Clone Wars',
        council: '19BBY, replaced Oppo Rancisis',
        sith: 'Darth Vader, 19BBY-4ABY',
        tags: ["Jedi Knight", "Blue", "Human", "Jedi Council", "Genosis Strike Team", "Clone Wars", "Sith"]

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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Kiffar", "Jedi Master", "Green", "Clone Wars", "Order 66 Survivor", "Sith"]

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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Grand Master", "Green", "Jedi Council", "Genosis Strike Team", "Clone Wars", "Order 66 Survivor"]

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
        council: '32-19BBY',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Master", "Purple", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
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
        council: '33-19 BBY',
        war: 'Clone Wars',
        tags: ["Cerean", "Jedi Master", "Blue", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
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
        council: '33-19 BBY',
        war: 'Clone Wars',
        tags: ["Kel Dor", "Jedi Master", "Blue", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
        
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
        council: '40-19 BBY',
        war: 'Clone Wars',
        tags: ["Iktotchi", "Jedi Master", "Green", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
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
        council: '-32BBY',
        tags: [ "Jedi Master", "Green", "Jedi Council"]
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
        council: '33-20BBY, replaced by Coleman Kcaj',
        war: 'Clone Wars',
        tags: ["Lannik", "Jedi Master", "Green", "Jedi Council", "Clone Wars"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Thisspiasian", "Jedi Master", "Green", "Jedi Council", "Clone Wars", "Order 66 Survivor"]
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
        council: '32-19BBY, replaced by Stass Allie',
        war: 'Clone Wars',
        tags: ["Tholothian", "Jedi Master", "Blue", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
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
        council: '232-22BBY',
        tags: ["Quermian", "Jedi Master", "Blue", "Jedi Council"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Zabrak", "Jedi Master", "Blue", "Jedi Council", "Clone Wars", "Order 66 Survivor"]
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
        council: '40-21BBY',
        war: 'Clone Wars',
        tags: ["Chalactan", "Jedi Master", "Green", "Jedi Council", "Clone Wars"]
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
        war: 'Clone Wars',
        council: '22-19BBY, replaced Coleman Trebor',
        tags: ["Nautolan", "Jedi Master", "Green", "Jedi Council", "Genosis Strike Team", "Clone Wars"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Suvivor',
        tags: ["Mirialan", "Jedi Master", "Green", "Genosis Strike Team", "Clone Wars", "Order 66 Survivor"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Mirialan", "Padawan", "Blue", "Clone Wars", "Order 66 Survivor"]
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
        war: 'Clone Wars',
        tags: ["Togruta", "Jedi Master", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        council: '23-22BBY, replaced Yarael Poof, replaced by Kit Fisto',
        war: 'Clone Wars',
        tags: ["Vurk", "Jedi Master", "Green", "Jedi Council","Genosis Strike Team", "Clone Wars"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Blue", "Clone Wars", "Order 66 Survivor"]
    },

    {
        id: 23,
        imgSrc: 'images/Zett_Jukassa.jpg',
        imgAlt: 'Zett Jukassa',
        name: 'Zett Jukassa',
        death: '19BBY, Coruscant',
        rank: 'Padawan',
        lightsaber: 'blue',
        tags: ["Human", "Padawan", "Blue"]
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
        padawan: 'Tutso Mara',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        midochlorians: '10,000',
        war: 'Clone Wars',
        tags: ["Twi'lek", "Jedi Master", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        tags: ["Human", "Jedi Master", "Blue", "Jedi Council"]
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
        midochlorians: '16,500',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Master", "Blue", "Sith"]

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
        war: 'Clone Wars',
        tags: ["Ongree", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        council: '21-19BBY, replaced Eeth Koth',
        war: 'Clone Wars',
        tags: ["Zabrak", "Jedi Master", "Blue", "Jedi Council","Genosis Strike Team", "Clone Wars"]
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
        council: '19BBY, replaced Ada Gallia',
        war: 'Clone Wars',
        tags: ["Tholothian", "Jedi Master", "Green", "Jedi Council","Genosis Strike Team", "Clone Wars"]
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
        war: 'Clone Wars',
        tags: ["Human", "Jedi Master", "Green", "Genosis Strike Team", "Clone Wars"]
    },

    {
        id: 32,
        imgSrc: 'images/Nicanas_Tassu.jpg',
        imgAlt: 'Nicanas Tassu',
        name: 'Nicanas Tassu',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 33,
        imgSrc: 'images/Sephjet_Josall.jpg',
        imgAlt: 'Sephjet Josall',
        name: 'Sephjet Josall',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Chalactan", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 35,
        imgSrc: 'images/Sarissa_Jeng.jpg',
        imgAlt: 'Sarissa Jeng',
        name: 'Sarissa Jeng',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 36,
        imgSrc: 'images/Ekim_Ryelli.jpg',
        imgAlt: 'Ekim Ryelli',
        name: 'Ekim Ryelli',
        species: 'Human',
        rank: 'Jedi Master',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Master", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 37,
        imgSrc: 'images/Lumas_Etima.jpg',
        imgAlt: 'Lumas Etima',
        name: 'Lumas Etima',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Padawan',
        lightsaber: 'blue',
        war: 'Clone Wars',
         tags: ["Human", "Padawan", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Human", "Padawan", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 39,
        imgSrc: 'images/Fi-Ek_Sirch.jpg',
        imgAlt: 'Fi-Ek Sirch',
        name: 'Fi-Ek Sirch',
        death: '22BBY, Genosis',
        species: 'Nikito',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Nikitio", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 40,
        imgSrc: 'images/Que-Mars_Redath-Gom.jpg',
        name: 'Que-Mars Redath-Gom',
        death: '22BBY, Genosis',
        species: 'Weequay',
        rank: 'Jedi Knight',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Weequay", "Jedi Knight", "Green", "Genosis Strike Team", "Clone Wars"]
        
    },
    {
        id: 41,
        imgSrc: 'images/Ichi-Tan_Micoda.jpeg',
        imgAlt: 'Ichi-Tan Micoda',
        name: 'Ichi-Tan Micoda',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
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
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Blue", "Genosis Strike Team", "Clone Wars", 'Order 66 Survivor']
    },
    {
        id: 43,
        imgSrc: 'images/Joclad_Danva.jpg',
        imgAlt: 'Joclad Danva',
        name: 'Joclad Danva',
        death: '22BBY, Genosis',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 44,
        imgSrc: 'images/Roth-Del_Masona.jpg',
        imgAlt: 'Roth-Del Masona',
        name: 'Roth-Del Masona',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]

    },
    {
        id: 45,
        imgSrc: 'images/Tarados_Gon.jpg',
        imgAlt: 'Tarados Gon',
        name: 'Tarados Gon',
        species: 'Klatooinian',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Klatooinian", "Jedi Knight", "Blue", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 46,
        imgSrc: 'images/Sora_Bulq.jpg',
        imgAlt: 'Sora Bulq',
        name: 'Sora Bulq',
        species: 'Weequay',
        padawan: 'Galdos Stouff',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Weequay", "Jedi Master", "Blue", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 47,
        imgSrc: 'images/Khaat_Qiyn.jpg',
        imgAlt: 'Khaat Qiyn',
        name: 'Khaat Qiyn',
        species: 'Human',
        padawan: 'Bairdon Jace',
        rank: 'Jedi Knight',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Human", "Jedi Knight", "Green", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 48,
        imgSrc: 'images/Bairdon_Jace.jpg',
        imgAlt: 'Bairdon Jace',
        name: 'Bairdon Jace',
        species: 'Human',
        master: 'Khaat Qiyn',
        rank: 'Padawan',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Padawan", "Blue", "Genosis Strike Team", "Clone Wars"]
    },
    {
        id: 49,
        imgSrc: 'images/Ahsoka_Tano.jpg',
        imgAlt: 'Ahsoka Tano',
        name: 'Ahsoka Tano',
        birth: '36BBY, Shuli',
        species: 'Togruta',
        master: 'Anakin Skywalker',
        padawan: 'Sabine Wren',
        rank: 'Former Jedi Padawan',
        lightsaber: 'white',
        midochlorians: '15,000',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Togruta", "Padawan", "Green", "White", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 50,
        imgSrc: 'images/Asajj Ventress.jpeg',
        imgAlt: 'Asajj Ventress',
        name: 'Asajj Ventress',
        birth: '50BBY, Dathomir',
        species: 'Zarbak',
        master: 'Ky Narec, Count Dooku',
        padawan: 'Savage Oppress, Quinlan Vos',
        rank: 'Padawan',
        lightsaber: 'yellow',
        midochlorians: '12,200',
        survivor: 'Order 66 Survivor',
        war: 'Clone Wars',
        tags: ["Human", "Padawan", "Green", "Yellow", "Sith", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 51,
        imgSrc: 'images/Ima-Gun_Di.jpg',
        imgAlt: 'Ima-Gun Di',
        name: 'Ima-Gun Di',
        death: '21BBY, Ryloth',
        species: 'Nikitio',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Nikitio", "Jedi Master", "Blue", "Clone Wars"]

    },
    {
        id: 52,
        imgSrc: 'images/Nadhar_Vebb.jpg',
        imgAlt: 'Nadhar Vebb',
        name: 'Nadhar Vebb',
        death: '21BBY, Vassek 3',
        species: 'Mon Calamari',
        master: 'Kit Fisto',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Mon Calamari", "Jedi Knight", "Blue", "Clone Wars"]
    },
    {
        id: 53, 
        imgSrc: 'images/Bolla_Ropal.jpeg',
        imgAlt: 'Bolla Ropal',
        name: 'Bolla Ropal',
        death: '21BBY',
        species: 'Rodian',
        rank: 'Jedi Master',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Rodian", "Jedi Master", "Green", "Clone Wars"]
    },
    {
        id: 54,
        imgSrc: 'images/Ord_Enisence.jpeg',
        imgAlt: 'Ord Enisence',
        name: 'Ord Enisence',
        death: '22BBY',
        species: 'Skrilling',
        rank: 'Jedi Master',
        lightsaber: 'orange',
        tags: ["Skrilling", "Jedi Master", "Orange"]

    },
    {
        id: 55,
        imgSrc: 'images/Halsey.jpg',
        imgAlt: 'Halsey',
        name: 'Halsey',
        death: '20BBY, Sullust',
        species: 'Skrilling',
        padawan: 'Knox',
        rank: 'Jedi Master',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Skrilling", "Jedi Master", "Green", "Clone Wars"]
    },
    {
        id: 56,
        imgSrc: 'images/Knox.jpg',
        imgAlt: 'Knox',
        name: 'Knox',
        death: '20BBY, Sullust',
        species: 'Nautolan',
        master: 'Halsey',
        rank: 'Padawan',
        lightsaber: 'blue',
        tags: ["Nautolan", "Padawan", "Blue", "Clone Wars"]
    },
    {
        id: 57,
        imgSrc: 'images/Eekar_Oki.jpg',
        imgAlt: 'Eekar Oki',
        name: 'Eekar Oki',
        species: 'Mon Calamari',
        rank: 'Unknown',
        lightsaber: 'blue',
        tags: ["Mon Calamari", "Blue"]
    },

    {
        id: 58,
        imgSrc: 'images/Finn_Etray.jpeg',
        imgAlt: 'Finn Etray',
        name: 'Finn Etray',
        death: '19BBY, Unknown Outer Rim Spaceport',
        species: "Twi'lek",
        rank: 'Unknown',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Twi'lek", "Blue", "Clone Wars"]
    },
    {
        id: 59,
        imgSrc: 'images/Tera_Sinube.jpg',
        imgAlt: 'Tera Sinube',
        name: 'Tera Sinube',
        birth: '428BBY',
        death: '9BBY',
        species: 'Cosian',
        rank: 'Jedi Master',
        lightsaber: 'light blue, white',
        council: 'Eventually stepped down due to his old age',
        survivor: 'Order 66 Survivor (19-9BBY)',
        tags: ["Cosian", "Jedi Master", "Blue", "White", "Clone Wars"]
    },
    {
        id: 60,
        imgSrc: 'images/Ran_Deezy.jpeg',
        imgAlt: 'Ran Deezy',
        name: 'Ran Deezy',
        species: 'Unknown',
        rank: 'Youngling',
        tags: ["Youngling"]    
    },
    {
        id: 61,
        imgSrc: 'images/Fran_Klin.jpeg',
        imgAlt: 'Fran Klin',
        name: 'Fran Klin',
        species: 'Unknown',
        rank: 'Youngling',
        tags: ["Youngling"]   
    },
    {
        id: 62,
        imgSrc: 'images/Kalifa.jpeg',
        imgAlt: 'Kalifa',
        name: 'Kalifa',
        death: '20BBY, Wasskah',
        species: 'Human',
        rank: 'Youngling',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Youngling", "Blue", "Clone Wars"]   
    },
    {
        id: 63,
        imgSrc: 'images/O-mer.jpeg',
        imgAlt: 'O-mer',
        name: 'O-mer',
        species: 'Cerean',
        rank: 'Youngling',
        war: 'Clone Wars',
        tags: ["Cerean", "Youngling", "Clone Wars"]

    },
    {
        id: 64,
        imgSrc: 'images/Jinx.jpeg',
        imgAlt: 'Jinx',
        name: 'Jinx',
        species: "Twi'lek",
        rank: 'Youngling',
        war: 'Clone Wars',
        tags: ["Twi'lek", "Youngling", "Clone Wars"]
    },
    {
        id: 65,
        imgSrc: 'images/Gadoni.jpeg',
        imgAlt: 'Gadoni',
        name: 'Gadoni',
        species: 'Rodian',
        rank: 'Youngling',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Rodian", "Youngling", "Green", "Clone Wars"]
    },
    {
        id: 66,
        imgSrc: 'images/Petro.jpeg',
        imgAlt: 'Petro',
        name: 'Petro',
        species: 'Human',
        rank: 'Youngling',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Human", "Youngling", "Blue", "Clone Wars"]

    },
    {
        id: 67,
        imgSrc: 'images/Katooni.jpg',
        imgAlt: 'Katooni',
        name: 'Katooni',
        species: 'Tholothian',
        rank: 'Youngling',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Tholothian", "Youngling", "Blue", "Clone Wars"]

     
    },
    {
        id: 68,
        imgSrc: 'images/Byph.jpeg',
        imgAlt: 'Byph',
        name: 'Byph',
        species: 'Ithorian',
        rank: 'Youngling',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Ithorian", "Youngling", "Blue", "Clone Wars"]

    },
    {
        id: 69,
        imgSrc: 'images/Zatt.jpeg',
        imgAlt: 'Zatt',
        name: 'Zatt',
        species: 'Nautolan',
        rank: 'Youngling',
        lightsaber: 'green',
        war: 'Clone Wars',
        tags: ["Nautolan", "Youngling", "Green", "Clone Wars"]


    },
    {
        id: 70,
        imgSrc: 'images/Gungi.jpeg',
        imgAlt: 'Gungi',
        name: 'Gungi',
        species: 'Wookie',
        rank: 'Youngling',
        lightsaber: 'green',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Wookie", "Youngling", "Green", "Clone Wars", "Order 66 Survivor"]

    },
    {
        id: 71,
        imgSrc: 'images/Ky_Narec.jpg',
        imgAlt: 'Ky Narec',
        name: 'Ky Narec',
        death: '23BBY, Rattatak',
        species: 'Human',
        padawan: 'Asajj Ventress',
        rank: 'Jedi Master',
        lightsaber: 'green',
        tags: ["Human", "Jedi Master", "Green"]

    },
    {
        id: 72,
        imgSrc: 'images/Pong_Krell.jpeg',
        imgAlt: 'Pong Krell',
        name: 'Pong Krell',
        death: '20BBY, Umbara',
        species: 'Besalisk',
        rank: 'Jedi Master',
        lightsaber: 'green, blue',
        war: 'Clone Wars',
        tags: ["Besalisk", "Youngling", "Green", "Blue", "Clone Wars"]

    },
    {
        id: 73,
        imgSrc: 'images/Tutso_Mara.jpeg',
        imgAlt: 'Tutso Mara',
        name: 'Tutso Mara',
        death: '19BBY, Coruscant',
        species: 'Mirialan',
        master: 'Aayla Secura',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Mirialan", "Jedi Knight", "Blue", "Clone Wars"]

    },
    {
        id: 74,
        imgSrc: 'images/Thongla Jur.jpeg',
        imgAlt: 'Thongla Jur',
        name: 'Thongla Jur',
        species: 'Anx',
        rank: 'Jedi Master',
        lightsaber: 'green',
        tags: ["Anx", "Jedi Master", "Green", "Clone Wars"]

    },
    {
        id: 75,
        imgSrc: 'images/Coleman_Kcaj.JPG',
        imgAlt: 'Coleman Kcaj',
        name: 'Coleman Kcaj',
        death: '9BBY',
        species: 'Ongree',
        rank: 'Jedi Master',
        lightsaber: 'green',
        council: '19BBY, replaced Even Piell',
        survivor: 'Order 66 Survivor (19-9BBY)',
        tags: ["Rodian", "Youngling", "Green", "Clone Wars", "Order 66 Survivor"]

    },
    {
        id: 76,
        imgSrc: 'images/Tiplar.jpg',
        imgAlt: 'Tiplar',
        name: 'Tiplar',
        death: '19BBY, Ringo Linda',
        species: 'Mikkian',
        family: 'Family',
        siblings: 'Tiplee (twin)',
        rank: 'Jedi Master',
        lightsaber: 'green',
        wars: 'Clone Wars',
        tags: ["Mikkian", "Jedi Master", "Green", "Clone Wars"]

    },
    {
        id: 77,
        imgSrc: 'images/Tiplee.jpg',
        imgAlt: 'Tiplee',
        name: 'Tiplee',
        species: 'Mikkian',
        family: 'Family',
        siblings: 'Tiplee (twin)',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        wars: 'Clone Wars',
        tags: ["Mikkian", "Jedi Master", "Blue", "Clone Wars"]
    },
    {
        id: 78,
        imgSrc: 'images/Rig_Nema.jpeg',
        imgAlt: 'Rig Nema',
        name: 'Rig Nema',
        death: '19BBY, Kaliida Shoals Medical Center',
        species: 'Halaisi',
        padawan: 'Mill Alibeth',
        rank:'Jedi Counslar Doctor',
        lightsaber: 'green',
        tags: ["Halaisi", "Jedi Counsular Doctor", "Green", "Clone Wars"]
    },
    {
        id: 79,
        imgSrc: 'images/Cin_Drallig.jpg',
        imgAlt: 'Cin Drallig',
        name: 'Cin Drallig',
        death: '19BBY, Jedi Temple',
        species: 'Human',
        master: 'Yoda',
        rank: 'Jedi Master',
        lightsaber: 'green',
        tags: ["Human", "Jedi Master", "Green", "Clone Wars"]
    },
    {
        id: 80,
        imgSrc: 'images/Whie.jpg',
        imgAlt: 'Whie Malreaux',
        name: 'Whie Malreaux',
        death: '19BBY, Jedi Temple',
        species: 'Human',
        master: 'Maks Leem',
        rank: 'Padawan',
        lightsaber: 'green',
        tags: ["Human", "Padawan", "Green", "Clone Wars"]
    },
    {
        id: 81,
        imgSrc: 'images/Bene.jpg',
        imgAlt: 'Bene',
        name: 'Bene',
        death: '19BBY, Jedi Temple',
        species: 'Human',
        rank: 'Padawan',
        lightsaber: 'blue',
        tags: ["Human", "Padawan", "Blue", "Clone Wars"]
    },
    {
        id: 82,
        imgSrc: 'images/Grand_Inquisitor.png',
        imgAlt: 'Grand Inquisitor',
        name: 'Grand Inquisitor',
        species: "Pau'an",
        rank: 'Jedi Temple Guard',
        lightsaber: 'yellow',
        war: 'Clone Wars',
        suvivor: 'Order 66 Survivor',
        sith: 'Grand Inquisitor',
        tags: ["Pau'an", "Jedi Temple Guard", "Yellow", "Clone Wars", "Order 66 Survivor", "Sith"]

    },

    {
        id: 83,
        imgSrc: 'images/4thSister.jpeg',
        imgAlt: 'Lyn Rakish',
        name: 'Lyn Rakish',
        species: 'Human',
        rank: 'Unknown',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        sith: '4th Sister',
        tags: ["Human", "Order 66 Survivor", "Sith"]
    },
    {
        id: 84,
        imgSrc: 'images/5thBrother.jpeg',
        imgAlt: 'Fifth Brother',
        name: 'Fifth Brother',
        death: '3BBY, Malachor',
        species: 'Human',
        rank: 'Unknown',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        sith: '5th Brother',
        tags: ["Human", "Order 66 Survivor", "Sith"]
    },
    {
        id: 85,
        imgSrc: 'images/7thSister.jpeg',
        imgAlt: 'Seventh Sister',
        name: 'Seventh Sister',
        death: '3BBY, Malachor',
        species: 'Mirialan',
        rank: 'Unknown',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        sith: 'Seventh Sister',
        tags: ["Mirialan", "Order 66 Survivor", "Sith"]
    },
    {
        id: 86,
        imgSrc: 'images/8thBrother.jpeg',
        imgAlt: 'Eigheth Brother',
        name: 'Eigheth Brother',
        death: '3BBY, Malachor',
        species: 'Terrelian Jango Jumper',
        rank: 'Unknown',
        lightsaber: 'red',
        sith: 'Eigheth Brother',
        tags: ["Terrelian Jango Jumper", "Sith"]
    },
    {
        id: 82,
        imgSrc: 'images/Dante.jpeg',
        imgAlt: 'Dante',
        name: 'Dante',
        death: '19BBY, Nur',
        species: 'Caphex',
        rank: 'Unknown',
        survivor: 'Order 66 Survivor',
        tag: ["Caphex", "Order 66 Survivor"]
    },

 
    {
        id: 83,
        imgSrc: 'images/Ahmar.jpeg',
        imgAlt: 'Ahmar',
        name: 'Ahmar',
        death: '19BBY, Nur',
        species: 'Unknown',
        rank: 'Unknown',
        survivor: 'Order 66 Survivor',
        tags: ['Order 66 Survivor']
    },
    {
        id: 84,
        imgSrc: 'images/Jarol_Tapal.jpeg',
        imgAlt: 'Jarol Tapal',
        name: 'Jarol Tapal',
        birth: '61BBY, Lasan',
        death: '19BBY, near Bracca',
        species: 'Lasat',
        master: 'Yaddle',
        padawan: 'Cal Kestis',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        war: 'Clone Wars',
        tags: ["Lasat", "Jedi Master", "Blue", "Clone Wars"]

    },
    {
        id: 85,
        imgSrc: 'images/Cal_Kestis.jpg',
        imgAlt: 'Cal Kestis',
        name: 'Cal Kestis',
        birth: '32BBY',
        species: 'Human',
        master: 'Jarol Tapal, Cere Junda',
        rank: 'Padawan',
        lightsaber: 'blue',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Padawan", "Blue", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 86,
        imgSrc: 'images/Eno_Cordova.jpeg',
        imgAlt: 'Eno Cordova',
        name: 'Eno Cordova',
        death: '9BBY, Jedha',
        species: 'Human',
        padawan: 'Cere Junda',
        rank: 'Jedi Master',
        lightsaber: 'blue',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Blue", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 87,
        imgSrc: 'images/Cere_Junda.jpeg',
        imgAlt: 'Cere Junda',
        name: 'Cere Junda',
        death: '9BBY, Jedha',
        species: 'Human',
        master: 'Eno Cordova',
        padawan: 'Trilla Sudiri, Cal Kestis',
        rank: 'Jedi Master',
        lightsaber: 'green',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Green", "Blue", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 88,
        imgSrc: 'images/Trilla_Sudiri.jpg',
        imgAlt: 'Trilla Sudiri',
        name: 'Trilla Sudiri',
        death: '14BBY, Nurr',
        species: 'Human',
        master: 'Cere Junda',
        rank: 'Padawan',
        lightsaber: 'red',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        sith: 'Second Sister',
        tags:["Human", "Jedi Master", "Blue", "Clone Wars", "Order 66 Survivor", "Sith"]
    },
    {
        id: 89,
        imgSrc: 'images/9thSister.jpeg',
        imgAlt: 'Masana Tide',
        name: 'Manasa Tide',
        death: '9BBY, Coruscant',
        species: 'Dowutin',
        rank: 'Jedi Knight',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        sith: 'Ninth Sister',
        tags: ["Dowutin", "Jedi Knight", "Order 66 Survivor", "Sith"]
    },
    {
        id: 90,
        imgSrc: 'images/Bode_Akuna.jpeg',
        imgAlt: 'Bode Akuna',
        name: 'Bode Akuna',
        death: '9BBY, Tanalorr',
        species: 'Human',
        family: 'Family',
        spouse: 'Tayala',
        children: 'Kata Akuna',
        rank: 'Jedi Knight',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Knight", "Order 66 Survivor"]
    },
    {
        id: 91,
        imgSrc: 'images/Taron_Malicos.jpeg',
        imgAlt: 'Taron Malicos',
        name: 'Taron Malicos',
        death: '14BBY, Dathomir',
        species: 'Human',
        rank: 'Jedi Master',
        lightsaber: 'red',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Clone Wars", "Order 66 Survivor"]
    },
    {
        id: 92,
        imgSrc: 'images/Rani.jpg',
        imgAlt: 'Rani',
        name: 'Rani',
        death: '9BBY, Tatooine',
        species: 'Human',
        rank: 'Jedi Knight',
        lightsaber: 'blue',
        survivor: 'Order 66 Survivor (19-9BBY)',
        tags: ["Human", "Jedi Knight", "Blue", "Order 66 Survivor"]

    },
    {
        id: 93,
        imgSrc: 'images/3rdSister.jpeg',
        imgAlt: 'Reva Sevander',
        name: 'Reva Sevander',
        birth: '31BBY',
        species: 'Human',
        master: 'Yoda, Darth Vader, The Grand Inquisitor',
        rank: 'Youngling',
        lightsaber: 'red',
        survivor: 'Order 66 Survivor',
        sith: 'Third Sister',
        tags: ["Human", "Youngling", "Order 66 Survivor", "Sith"]
    },
    {
        id: 94,
        imgSrc: 'images/Kanan_Jarrus.jpg',
        imgAlt: 'Kanan Jarrus',
        name: 'Kanan Jarrus',
        birth: '33BBY',
        death: '1BBY, Lothal',
        species: 'Human',
        family: 'Family',
        spouse: 'Hera Syndulla',
        children: 'Jacen Syndulla',
        master: 'Depa Billaba',
        padawan: 'Ezra Bridger, Sabine Wren',
        rank: 'Padawan, eventually Jedi Knight',
        lightsaber: 'blue',
        midochlorians: '14,000',
        war: 'Clone Wars',
        survivor: 'Order 66 Survivor(19-1BBY)',
        alliance: "Rebel Alliance(5-1BBY)",
        tags: ["Human", "Padawan", "Jedi Knight", "Blue", "Clone Wars", "Order 66 Survivor", "Rebel Alliance"]
    },
    {
        id: 95,
        imgSrc: 'images/Ezra_Bridger.jpeg',
        imgAlt: 'Ezra Bridger',
        name: 'Ezra Bridger',
        birth: 'Empire Day, 19BBY, Lothal',
        species: 'Human',
        family: 'Family',
        parents: 'Ephraim Brdger, Mira Bridger',
        master: 'Kanan Jarrus',
        rank: 'Padawan',
        lightsaber: 'blue',
        midochlorians: '10,000',
        alliance: "Rebel Alliance(5-1BBY)",
        tags: ["Human", "Padawan", "Blue", "Green", "Rebel Alliance"]
    },
    {
        id: 96,
        imgSrc: 'images/Sabine_Wren.jpg',
        imgAlt: 'Sabine Wren',
        name: 'Sabine Wren',
        birth: '21BBY, Mandalore',
        species: 'Human',
        family: 'Family',
        parents: 'Alrich Wren, Ursa Wren',
        siblings: 'Tristan Wren',
        master: 'Kanan Jarrus, Ahsoka Tano',
        rank: 'Unknown',
        lightsaber: 'green',
        alliance: 'Rebel Alliance',
        republic: 'New Republic',
        tags: ["Human", "Green", "Rebel Alliance", "New Republic"]
    },
    {
        id: 97,
        imgSrc: 'images/Luke_Skywalker.jpg',
        imgAlt: 'Luke Skywalker',
        name: 'Luke Skywalker',
        birth: '19BBY, Polis Massa',
        death: '34ABY, Atch-To',
        species: 'Human',
        family: 'Family',
        parents: 'Anakin Skywalker, Padme Amidala',
        siblings: 'Leia Organa, Han Solo (brother-in-law)',
        uncleAunt: 'Owen Lars, Beru Lars',
        nephewNiece: 'Ben Solo',
        master: 'Obi-Wan Kenobi, Yoda',
        padawan: 'Leia Organa, Grogu, Ben Solo, Rey',
        rank: 'Jedi Knight/ Grand Master',
        lightsaber: 'green',
        midochlorians: '23,316',
        alliance: 'Rebel Alliance (0-5ABY)',
        republic: 'New Republic',
        newJediOrder: 'New Jedi Order',
        resistance: 'The Resistance',
        tags: ["Human", "Jedi Knight", "Grand Master", "Green", "Rebel Alliance", "New Republic", "New Jedi Order", "The Resistance"]

    },
    {
        id: 98,
        imgSrc: 'images/Leia.jpeg',
        imgAlt: 'Leia Organa',
        name: 'Leia Skywalker Organa',
        birth: '19BBY, Polis Kloss',
        death: '35ABY, Ajan Kloss',
        species: 'Human',
        family: 'Family',
        parents: 'Anakin Skywalker, Padme Amidala',
        stepParents: 'Bail Organa, Brea Organa',
        spouse: 'Han Solo',
        children: 'Ben Solo',
        siblings: 'Luke Skywalker',
        uncleAunt: 'Owen Lars, Beru Lars',
        master: 'Luke Skywalker',
        padawan: 'Rey',
        rank: 'Unknown',
        lightsaber: 'blue',
        midochlorians: '24,240',
        alliance: 'Rebel Alliance',
        republic: 'New Republic',
        newJediOrder: 'New Jedi Order',
        resistance: 'The Resistance',
        tags: ["Human", "Blue", "Rebel Alliance", "New Republic", "New Jedi Order", "The Resistance"]
    },

    {
        id: 99,
        imgSrc: 'images/Grogu.jpg',
        imgAlt: 'Grogu',
        name: 'Grogu',
        birth: '41BBY',
        species: 'Unknown',
        family: 'Family',
        parents: 'Din Djarin',
        master: 'Kelleran Beq, Luke Skywalker',
        rank: 'Youngling',
        survivor: 'Order 66 Survivor',
        republic: 'New Republic',
        newJediOrder: 'New Jedi Order',
        tags: ["Youngling", "Order 66 Survivor", "New Republic", "New Jedi Order"]
    },

    {
        id: 100,
        imgSrc: 'images/Kelleran_Beq.jpeg',
        imgAlt: 'Kelleran Beq',
        name: 'Kelleran Beq',
        species: 'Human',
        padawan: 'Grogu',
        rank: 'Jedi Master',
        lightsaber: 'green',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Master", "Green", "Order 66 Survivor"]
    },  
    
    {
        id: 101,
        imgSrc: 'images/Babylan_Skoll.jpg',
        imgAlt: 'Babylan Skoll',
        name: 'Babylan Skoll',
        species: 'Human',
        padawan: 'Shin Hati',
        rank: 'Jedi Knight',
        lightsaber: 'orange',
        survivor: 'Order 66 Survivor',
        tags: ["Human", "Jedi Knight", "Orange", "Order 66 Survivor"]
    },

    {
        id: 102,
        imgSrc: 'images/Shin_Hati.jpg',
        imgAlt: 'Shin Hati',
        name: 'Shin Hati',
        birth: 'after the Jedi Purge, 19BBY',
        species: 'Human',
        master: 'Babylan Skoll',
        rank: 'Padawan',
        lightsaber: 'orange',
        tags: ["Human", "Padawan", "Orange"]   
    },

    {
        id: 103, 
        imgSrc: 'images/Ben_Solo.jpeg',
        imgAlt: 'Ben Solo',
        name: 'Ben Solo',
        birth: '5ABY, Chandrilla',
        death: '35ABY, Exegol',
        species: 'Human',
        family: 'Family',
        parents: 'Han Solo, Leia Skywalker Organa',
        grandparents: 'Anakin Skywalker, Padme Amidala',
        uncleAunt: 'Luke Skywalker',
        master: 'Luke Skywalker, Snoke, Darth Sidious',        
        lightsaber: 'blue',
        midochlorians: '16,000-18,000',
        newJediOrder: 'New Jedi Order',
        sith: 'Kylo Ren',
        tags: ["Human", "Blue", "Sith", "New Jedi Order"]
    },

    {
        id: 104,
        imgSrc: 'images/Rey.jpeg',
        imgAlt: 'Rey',
        name: 'Rey',
        birth: '15ABY, Kyperkarn',
        species: 'Human',
        family: 'Family',
        parents: 'Dathan, Miramar',
        grandparents: 'Emperor Palpatine (Darth Sidious)',
        master: 'Luke Skywalker, Leia Skywalker Organa',
        lightsaber: 'yellow',
        midochlorians: '16,000-18,000',
        resistance: 'The Resistance',
        tags: ["Human", "Yellow", "Blue", "The Resistance"]
    }

]

const container = document.querySelector('#article-container');
articles.forEach(item => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article');
    const articleTemplate = `
        <div id="character-${item.id}">
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
                    ${item.grandparents ? `<p>Grandparents: ${item.grandparents}</p>` : ''}
                    ${item.stepParents ? `<p>Step-Parents: ${item.stepParents}</p>` : ''}
                    ${item.spouse ? `<p>Spouse: ${item.spouse}</p>` : ''}
                    ${item.siblings ? `<p>Siblings: ${item.siblings}</p>` : ''}
                    ${item.children ? `<p>Children: ${item.children}</p>` : ''}
                    ${item.uncleAunt ? `<p>Uncles & Aunts: ${item.uncleAunt}</p>` : ''}
                    ${item.cousin ? `<p>Cousin(s): ${item.cousin}</p>` : ''}
                    ${item.nephewNiece ? `<p>Nephews/Nieces: ${item.nephewNiece}</p>` : ''}
                </div>
                <hr>
                <div class="descriptive">
                    <h3>Descriptive Information</h3>
                    <p>Species: ${item.species}</p>
                    <p>
                    ${item.master ? `<p>Trained by: ${item.master}</p>` : ''}
                    ${item.padawan ? `<p>Master to: ${item.padawan}</p>` : ''}
                    <p>Rank: ${item.rank}</p>
                    ${item.lightsaber ? `<p>Lightsaber: ${item.lightsaber}</p>` : ''}
                    ${item.midochlorians ? `<p>Midochlorians: ${item.midochlorians}</p>` : ''}
                </jedi>
                <hr>
                ${item.council ? `<p>Council Member: ${item.council}<p>` : ''}
                ${item.war ? `<p>${item.war}</p>` : ''}
                ${item.survivor ? `<p>${item.survivor}</p>` : ''}
                ${item.sith ? `<p>Sith: ${item.sith}</p>` : ''}
                ${item.alliance ? `<p>${item.alliance}</p>` : ''}
                ${item.republic ? `<p>${item.republic}</p>` : ''}
                ${item.newJediOrder ? `<p>${item.newJediOrder}</p>` : ''}
                ${item.resistance ? `<p>${item.resistance}</p>` : ''}

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


function filterForAttributes(event) {
    const selectedAttribute = event.target.value;
    const currentJedi = document.querySelectorAll('article.article');
    const currentJediArray = [...currentJedi];
    function performFilter(singleJediArticle) {
        const currentId = singleJediArticle.children[0].id.replace("character-","");
        const currentJedi = articles[articles.filter(item => item == currentId)];
        const currentJediTags = currentJedi.tags;
        if (currentJediTags.includes(selectedAttribute))  {
            return true;
        } else {
            return false;
        }

    }
    const filterJedi = currentJediArray.filter(performFilter);
    document.querySelector('#article-container').innerHTML = filterJedi.join("");

}



let tagSelector = document.getElementById('attribute-tags');

tagSelector.addEventListener('change', filterForAttributes);