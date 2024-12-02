const table1 = [ "snow", "rain", "sun" ]
const var1 = table1[0];
const var2 = table1[table1.length - 1];

const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}

const type = slider.type
const autoStart = slider.autoStart

const nameTable = ["Ala", "Ela", "Ola"]
// Nie do konca rozumiem jak ma wygldac efekt

function generateRandomNumbers () {
  let randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 6);
    randomNumbers.push(random);
  }

  return randomNumbers
}
const randomTable = generateRandomNumbers()
const random1 = randomTable[0]
const random2 = randomTable[1]
console.log(random1);
console.log(random2);
console.log(randomTable)


const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};

const showAnimal = animal => console.log(`Kot ${animal.name} ma ${animal.age} lat i robi ${animal.getVoice()}`)
showAnimal(cat)