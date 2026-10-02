//Denne JS-koden er laget klar for deg. Den trenger du ikke endre på. :-)
//Stats for heroes: Du må ikke bruke alle stats videre i programmet ditt hvis du ikke ser det nødvendig.
//Husk at for å hente ut noe fra et objekt som er i et array kan vi skrive for eksempel slik: heroesArray[1].name (Ariana Archer)


let heroesArray = [
    {
        id: 0,
        name: "Henriette Healer",
        maxHP: 400,
        currentHP: 400,
        damage: 100,
        alive: true,
    },
    {
        id: 1,
        name: "Ariana archer",
        maxHP: 600,
        currentHP: 600,
        damage: 400,
        alive: true,
    },
    {
        id: 2,
        name: "Wyona Warrior",
        maxHP: 800,
        currentHP: 800,
        damage: 400,
        alive: true,
    },
];

let dragonStats = {
    name: "Daar Dragon",
    maxHP: 2000,
    currentHP: 2000,
    damage: 200,
    alive: true,
};

//Bildene som skal kunne trykkes på
const healer = document.getElementById("healer");
const archer = document.getElementById("archer");
const warrior = document.getElementById("warrior");

const dragon = document.getElementById("dragon");

//Navnene til heltene og dragen som kan oppdateres med riktig navn (tilleggsfunksjonalitet)
const healerName = document.getElementById("healer-name-txt");
const archerName = document.getElementById("archer-name-txt");
const warriorName = document.getElementById("warrior-name-txt");

const dragonName = document.getElementById("dragon-name-txt");

//HP-tekstene til heltene som skal kunne oppdatere seg (tilleggsfunksjonalitet)
const healerHealthTxt = document.getElementById("healer-health-txt");
const archerHealthTxt = document.getElementById("archer-health-txt");
const warriorHealthTxt = document.getElementById("warrior-health-txt");

//HP-teksten til dragen som kan oppdatere seg (tilleggsfunksjonalitet)
const dragonHealthTxt = document.getElementById("dragon-health-txt");

//Healthbars som må oppdateres for at grønnfargen skal bli mindre når HP blir mindre (tilleggsfunksjonalitet)
const healerHealthBar = document.getElementById("healer-health");
const archerHealthBar = document.getElementById("archer-health");
const warriorHealthBar = document.getElementById("warrior-health");

const dragonHealthBar = document.getElementById("dragon-health");

//Her kommer din kode! :o
//-----------------------------

//event listeners for klikk



healer.addEventListener("click", healerAttack)
archer.addEventListener("click", archerAttack)
warrior.addEventListener("click", warriorAttack)

function healerAttack () {
    const damage = heroesArray[0].damage;
    dragonStats.currentHP -= damage;
    console.log(heroesArray[0].name + " har gjort " + heroesArray[0].damage + " skade på " + dragonStats.name)
    console.log("Dragen har nå " + dragonStats.currentHP + " liv igjen!")
    DrageLiv();
}
function archerAttack () {
    const damage = heroesArray[1].damage;
    dragonStats.currentHP -= damage;
    console.log(heroesArray[1].name + " har gjort " + heroesArray[1].damage + " skade på " + dragonStats.name)
    console.log("Dragen har nå " + dragonStats.currentHP + " liv igjen!")
    DrageLiv();
}
function warriorAttack () {
    const damage = heroesArray[2].damage;
    dragonStats.currentHP -= damage;
    console.log(heroesArray[2].name + " har gjort " + heroesArray[2].damage + " skade på " + dragonStats.name)
    console.log("Dragen har nå " + dragonStats.currentHP + " liv igjen!")
    DrageLiv();
}


function DrageLiv () { 
    let currentHP = dragonStats.currentHP;

    if (currentHP <= 0) {
        dragonStats.alive = false;
        console.log(dragonStats.name + " er død!");
        alert(dragonStats.name + " beseiret!");
        gameOver();
    }
}

function gameOver(){
    while (dragonStats.alive == false) {
        heroesArray.damage = 0;
    }
}

dragon.addEventListener("click", DrageAngrep);

function DrageAngrep(){
    const damage = dragonStats.damage;
    const sjanse = Math.floor(Math.random () * 3)
    console.log(sjanse)
    if(sjanse === 0){
        heroesArray[0].currentHP -= damage;
        alert(dragonStats.name + "har angrepet " + heroesArray[0].name + "hun har tatt: " + dragonStats.damage);
    }
        if(sjanse === 1){
        heroesArray[1].currentHP -= damage;
        alert(dragonStats.name + "har angrepet " +  heroesArray[1].name + "hun har tatt: " + dragonStats.damage);
    }
        if(sjanse === 2){
        heroesArray[2].currentHP -= damage;
        alert(dragonStats.name + "har angrepet " +  heroesArray[2].name + "hun har tatt: " + dragonStats.damage);
    }
}


