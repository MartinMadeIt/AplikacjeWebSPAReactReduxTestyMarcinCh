const nb1 = Math.floor(Math.random() * 100);
const nb2 = Math.floor(Math.random() * 100);
console.log(`${nb1} dodać ${nb2} to ${nb1 + nb2}`);

const whoAreYou = person => {
  const year = new Date().getFullYear();

  console.log(`Nazywam się ${person.name}`)
  console.log(`Mam ${year - person.yearOfBirth} lat`)
  console.log(`Jestem z zawodu ${person.profession}.`)
}

const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  profession: "Lord of Wallachia"
};

whoAreYou(person)