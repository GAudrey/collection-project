/*tags array*/
const category = [
    {//Tag Investigation 0
        name: 'Investigation',
        style: 'has-text-weight-bold tag is-warning',
    },

    {//Tag Stealth 1
        name: 'Stealth',
        style: 'has-text-weight-bold tag is-dark',
    },

    {//Tag Puzzle 2
        name: 'Puzzle',
        style: 'has-text-weight-bold tag is-info',
    },

    {//Tag Philosophy 3
        name: 'Philosophy',
        style: 'has-text-weight-bold tag is-light',
    },

    {//Tag Management 4
        name: 'Management',
        style: 'has-text-weight-bold tag is-link',
    },

    {//Tag Survival 5
        name: 'Survival',
        style: 'has-text-weight-bold tag is-danger',
    },

    {//Tag Action 6
        name: 'Action',
        style: 'has-text-weight-bold tag is-danger is-light',
    },

    {//Tag Adventure 7
        name: 'Adventure',
        style: 'has-text-weight-bold tag is-success',
    },

    {//Tag Simulation 8
        name: 'Simulation',
        style: 'has-text-weight-bold tag is-info is-light',
    },

    {//Tag Strategy 9
        name: 'Strategy',
        style: 'has-text-weight-bold tag is-warning is-light',
    },

    {//Tag RPG 10
        name: 'RPG',
        style: 'has-text-weight-bold tag is-primary is-light',
    },

    {//Tag Exploration 11
        name: 'Exploration',
        style: 'has-text-weight-bold tag is-primary',
    },

    {//Tag Storytelling 12
        name: 'Storytelling',
        style: 'has-text-weight-bold tag is-white',
    },

    {//Tag Horror 13
        name: 'Horror',
        style: 'has-text-weight-bold tag is-black',
    },
];

/* Collection array */
const collection = [
    {//Part Murdered: Soul Suspect
        img: './imgs/illu-murdered-soul-suspect.jpg',
        title: 'Murdered: Soul Suspect',
        year: '2014',
        category: [category[0], category[1]],
        developer: 'Airtight Games',
        publisher: 'Square Enix',
        description: 'Most people think that death is the end, but for Ronan O’Connor, a Salem police detective with a chequered past, it is just the beginning. When Ronan is caught in a violent burglary, his life is brought to an untimely and brutal end. Shocked to find himself in the afterlife, his only escape from the limbo world of ‘Dusk’ is to hunt down his killer using new-found supernatural abilities. Set in Salem Massachusetts, players have the freedom to explore the New England-style wooden houses, narrow streets, gothic churches and historical landmarks for clues. They will need to battle demonic spirits to preserve their souls whilst uncovering the shocking revelations about who is responsible for their death.',
        website: 'Square Enix - Murderer: Soul Suspect',
        link: 'https://square-enix-games.com/en_GB/games/murdered/',
        trailer: 'https://www.youtube.com/watch?v=1xH4_YGEBPo',
    },

    {//Part The Talos Principle
        img: './imgs/illu-the-talos-principle.jpg',
        title: 'The Talos Principle',
        year: '2014',
        category: [category[2], category[3]],
        developer: 'Croteam',
        publisher: 'Devolver Digital',
        description: 'The Talos Principle is a philosophical first-person puzzle game from Croteam, the creators of the legendary Serious Sam series, written by Tom Jubert (FTL, The Swapper) and Jonas Kyratzes (The Sea Will Claim Everything). As if awakening from a deep sleep, you find yourself in a strange, contradictory world of ancient ruins and advanced technology. Tasked by your creator with solving a series of increasingly complex puzzles, you must decide whether to have faith, or to ask the difficult questions: Who are you? What is your purpose And what are you going to do about it?',
        website: 'Croteam - The Talos Principle',
        link: 'http://www.croteam.com/talosprinciple/',
        trailer: 'https://www.youtube.com/watch?v=Vu9QFBWb7WQ',
    },

    {//Part This War of Mine
        img: './imgs/illu-this-war-of-mine.jpg',
        title: 'This War of Mine',
        year: '2014',
        category: [category[4], category[5]],
        developer: '11 bit studios',
        publisher: '11 bit studios',
        description: 'In This War of Mine for the first time you do not play as an elite soldier, but a group of civilians trying to survive in a besieged city; struggling with lack of necessities and constant danger.',
        website: 'This War of Mine',
        link: 'https://www.thiswarofmine.com/#description',
        trailer: 'https://www.youtube.com/watch?v=BALBUyoTxQM',
    },

    {//Part Batman: Arkham Knight
        img: './imgs/illu-batman-arkham-knight.jpg',
        title: 'Batman: Arkham Knight',
        year: '2015',
        category: [category[6], category[7]],
        developer: 'Rocksteady Studios',
        publisher: 'Warner Bros. Interactive Entertainment',
        description: 'Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady\'s uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.',
        website: 'Warner Bros - Batman: Arkham Knight',
        link: 'https://www.warnerbros.com/games-and-apps/batman-arkham-knight',
        trailer: 'https://www.youtube.com/watch?v=bLv8xko2teg',
    },

    {//Part Plague Inc.: Evolved
        img: './imgs/illu-plague-inc-evolved.jpg',
        title: 'Plague Inc.: Evolved',
        year: '2016',
        category: [category[8], category[9]],
        developer: 'Ndemic Creations',
        publisher: 'Ndemic Creations',
        description: 'Your pathogen has just infected \'Patient Zero\'. Now you must bring about the end of human history by evolving a deadly, global Plague whilst adapting against everything humanity can do to defend itself. Plague Inc: Evolved is a unique mix of high strategy and terrifyingly realistic simulation which is now available on PC, Mac and Linux via Steam. Over 130 million players have been infected by Plague Inc. already. Now, Plague Inc: Evolved combines the original critically acclaimed gameplay with significant, all-new features for PC, including multiplayer, user-generated content support, improved graphics and lots more. Get ready to take strategy gaming to the next level!',
        website: 'Ndemic Creations - Plague Inc.: Evolved',
        link: 'https://www.ndemiccreations.com/en/25-plague-inc-evolved',
        trailer: 'https://www.youtube.com/watch?v=pSat_gLDXPc',
    },

    {//Part Cat Quest
        img: './imgs/illu-cat-quest.jpg',
        title: 'Cat Quest',
        year: '2017',
        category: [category[6], category[10]],
        developer: 'The Gentlbros',
        publisher: 'PQube Limited',
        description: 'Cat Quest is a 2d Open World RPG by The Gentlebros. Set in the fantastic and wonderful world of cats, play as a catventurer as you explore a massive continent crafted in the unique style of tapestry! Relive the good old days of exploring an overworld map as you raid dungeons for epic loot, complete quests and meet the many furry denizens of this world! Also check out the sequel!',
        website: 'The Gentlebros - Cat Quest',
        link: 'https://www.thegentlebros.com/catquest/',
        trailer: 'https://www.youtube.com/watch?v=asDUOd5IZH0',
    },

    {//Part The First Tree
        img: './imgs/illu-the-first-tree.jpg',
        title: 'The First Tree',
        year: '2017',
        category:  [category[11], category[12]],
        developer: 'David Wehle',
        publisher: 'David Wehle',
        description: 'A third-person exploration game centered around two parallel stories: a fox trying to find her missing family, and a young couple dealing with a tragedy in theirs. Players take control of the fox on a poignant and beautiful journey that crescendos at the source of life, and perhaps results in the understanding of death. Along the way, players can uncover artifacts and stories from the young couple’s life as they too become intertwined in the fox’s journey towards The First Tree.',
        website: 'The First Tree',
        link: 'https://www.thefirsttree.com/',
        trailer: 'https://www.youtube.com/watch?v=zXgnTKzVD4E',
    },

    {//Part Monster: Hunter World
        img: './imgs/illu-monster-hunter-world.jpeg',
        title: 'Monster: Hunter World',
        year: '2018',
        category:  [category[6], category[10]],
        developer: 'Capcom',
        publisher: 'Capcom',
        description: 'As a hunter, you\'ll take on quests to hunt monsters in a variety of habitats. Take down these monsters and receive materials that you can use to create stronger weapons and armor in order to hunt even more dangerous monsters.',
        website: 'Monster Hunter: World',
        link: 'http://www.monsterhunterworld.com/pc/fr/',
        trailer: 'https://www.youtube.com/watch?v=Ro6r15wzp2o',
    },

    {//Part Spiritfarer
        img: './imgs/illu-spiritfarer.jpg',
        title: 'Spiritfarer',
        year: '2020',
        category:  [category[4], category[7]],
        developer: 'Thunder Lotus Games',
        publisher: 'Thunder Lotus Games',
        description: 'Play as Stella, ferrymaster to the deceased, a Spiritfarer. Build a boat to explore the world, then befriend and care for spirits before finally releasing them into the afterlife.',
        website: 'Thunder Lotus Games - Spiritfarer',
        link: 'https://thunderlotusgames.com/spiritfarer/',
        trailer: 'https://www.youtube.com/watch?v=6mfdampW-EQ',
    },

    {//Part Phasmophobia
        img: './imgs/illu-phasmophobia.jpg',
        title: 'Phasmophobia',
        year: '2020',
        category:  [category[0], category[13]],
        developer: 'Kinetic Games',
        publisher: 'Kinetic Games',
        description: 'Phasmophobia is an online 4 player co-op horror with VR support. Paranormal activity is on the rise and it is up to your team to investigate and end the nightmare.',
        website: 'Kinetic Games',
        link: 'https://kineticgames.co.uk/',
        trailer: 'https://www.youtube.com/watch?v=sRa9oeo5KiY',
    },
]; 

/* Erase & rewrite script */

const mainContainer = document.querySelector('.is-flex-wrap-wrap.columns.is-centered.is-desktop.m-0');
mainContainer.innerHTML = '';

for (let element of collection){
    //card
    const newSection = document.createElement('section');
    newSection.className = 'card column is-one-fifth-desktop m-2';

    //image
    const newDivImg = document.createElement('div');
    newDivImg.className = 'card-image mb-1';

    const newFig = document.createElement('figure');
    newFig.className = 'image is-2by1';

    const newImg = document.createElement('img');
    newImg.src = element.img;

    //list tags
    const newList = document.createElement('ul');

    for (let elemTag of element.category){
        const newTag = document.createElement('li');
        newTag.className = elemTag.style;
        newTag.textContent = elemTag.name;

        newList.appendChild(newTag);
    }

    //developer & publisher
    const newDevPub = document.createElement('p');
    newDevPub.className = 'mb-4';

    const newSpanDev = document.createElement('span');
    newSpanDev.className = 'has-text-weight-semibold';
    newSpanDev.textContent = ('Developer: ');
    
    const newSpanPub = document.createElement('span');
    newSpanPub.className = 'has-text-weight-semibold';
    newSpanPub.textContent = ('Publisher: ');

    newDevPub.textContent = (newSpanDev + element.developer + ' ; ' + newSpanPub + element.publisher);

    //div overflow description + description
    const newDivDescription = document.createElement('div');
    newDivDescription.className = 'size-card-screen';

    const newDescription = document.createElement('p');
    newDescription.className = 'card-content has-text-justified p-0';
    newDescription.textContent = element.description;

    //link website
    const newPWebsite = document.createElement('p');
    newPWebsite.className = 'has-text-right is-italic my-3';

    const newLink = document.createElement('a');
    newLink.href = element.link;
    newLink.textContent = element.website;

    //trailer
    const newDivTrailer = document.createElement('div');
    newDivTrailer.className = 'trailer';

    const newIcon = document.createElement('span');
    newIcon.className = 'fab fa-youtube fa-2x icon-youtube mr-1';

    const newTrailer = document.createElement('a');
    newTrailer.className = 'button is-small is-ghost mt-3';
    newTrailer.href = element.trailer;
    newTrailer.textContent = ('Trailer');


    //arborescence
        //card
        mainContainer.appendChild(newSection);
        //image
        newSection.appendChild(newDivImg);
        newDivImg.appendChild(newFig);
        newFig.appendChild(newImg);
        //list tags
        newSection.appendChild(newList);
        //developer & publisher
        newSection.appendChild(newDevPub);
        newDevPub.appendChild(newSpanDev);
        newDevPub.appendChild(newSpanPub);
        //div overflow description + description
        newSection.appendChild(newDivDescription);
        newDivDescription.appendChild(newDescription);
        //link website
        newSection.appendChild(newPWebsite);
        newPWebsite.appendChild(newLink);
        //trailer
        newSection.appendChild(newDivTrailer);
        newDivTrailer.appendChild(newTrailer);
        newTrailer.appendChild(newIcon);
}