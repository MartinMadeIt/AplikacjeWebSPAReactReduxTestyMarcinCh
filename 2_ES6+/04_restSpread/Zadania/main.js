const tablicaA = ["Zosia", "Marcin", "Kamil"]
const tablicaB = ["Ala", "Puszek", ...tablicaA, "Jan", "Karol"]

const getAverage = (...vals) => vals.reduce((acc, val) => acc + val, 0)/vals.length;

const myName = "Marcin"
console.log(...myName)

const fruits = []
const vegetables = []
const mix = [...fruits, ...vegetables]

//

const state = {
  invoiceSection: false,
  availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
  formStatus: "failed",
  isUserLogged: false
};

const stateCopy = {...state}
stateCopy.availableYears = stateCopy.availableYears.filter(year => year <= 1999)
stateCopy.isUserLogged = true

console.log(state);
console.log(stateCopy);