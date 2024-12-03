const getSecondMaxNumber = myArr => {
  const arrWithoutMax = myArr.filter(nr => nr !==  Math.max(...myArr))
  return Math.max(...arrWithoutMax)
}

const sortingSecondMaxNumber = myArr => {
  myArr.sort((a, b) => a - b);
  return myArr[myArr.length - 2]
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
