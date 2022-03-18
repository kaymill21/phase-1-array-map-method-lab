const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',

  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const newArray = tutorials.map(element => {
  const newArraySplit = element.split(' ');
  const indiviLetter = newArraySplit.map(x => {
  const upperCaseLetter =  x.charAt(0);
  const newLetter = upperCaseLetter.toUpperCase();
  const restOfWord = x.substring(1);
  const fullWord = newLetter.concat('', restOfWord);
  return fullWord;
})
 const fullString = indiviLetter.join(' ');
 return fullString;
  })
  return newArray;
  //return tutorials.map()
}
titleCased();
//console.log(tutorials)
//console.log(firstLetter)