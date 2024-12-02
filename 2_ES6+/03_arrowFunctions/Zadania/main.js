const getSecondMaxNumber = array => {
  const maxNr = Math.max(...array);
  const arrWithoutMax = array.filter(nr => nr !== maxNr)
  return Math.max(...arrWithoutMax)
}

const runInterval = (n= 8) => {
  if (n > 0 && n <= 10) {
    let myInterval;
    let index= 0;

    myInterval = setInterval(() => {
      console.log("Hello")
      index++
      if (index >= n) { clearInterval(myInterval) }
    }, 500)

  } else {
    console.log('n ma mieć wartość 1- 10');
  }
}

const generateLinks = array => array.map(link => `https://${link}.com`)
