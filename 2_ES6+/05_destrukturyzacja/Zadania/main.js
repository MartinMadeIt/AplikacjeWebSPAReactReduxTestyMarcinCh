const table1 = [ "snow", "rain", "sun" ]
const [var1,,var2] = table1

const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}

const {type: typeSlider} = slider
const {autoStart: autoStartSlider} = slider

const nameTable = ["Ala", "Ela", "Ola"]
const [name1, name2, name3] = nameTable

function generateRandomNumbers () {
  let randomNumbers = [];
  for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 6));
  }

  return randomNumbers
}
const randomTable = generateRandomNumbers()
const [random1, ,random3] = randomTable
console.log(random1);
console.log(random3);
console.log(randomTable)


const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};

const showAnimal = ({name, getVoice, age: catAge}) => {
  const {age: catAge} = cat
  console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}`)
}

showAnimal(cat)