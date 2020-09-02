//jshint esversion: 6
/*
Author: Anthony Noel

This page has a list of countries that is ordered alphabetically ignoring articles
 and allows the user to add to the list

Future Development
-Check the sorting and especially stripper thoroughly for correctness
-Make it so the elements that go into the list have the first letter of each word capitalized
-Use a fetch request to grab all the countries in the world
-Check for duplicates
*/

const countryUL = document.querySelector("ul");
const form = document.querySelector("form");




//Add a new li item to the UL
const addItem = (text) => {
  //create a new li item
  const newLI = document.createElement("li");
  //Change it's textcontent
  newLI.textContent = text;
  //add it to the ul
  countryUL.appendChild(newLI);
};

const formSubmit = (e) => {
  //Prevent the page from refreshing
  event.preventDefault();
  //Grab the text in the input box
  let inputText= form.querySelector("input").value;

  console.log(inputText);
  //Send it to the add item function
  addItem(inputText);
  //Reset the form
  form.reset();
  //Resort the list items
  sortItems();
};

const stripArticles = (string) => {
    //used to hold the possible articles
    const articles = ["the","a","an"];
  //Make the string into an array with the words
  let wordsArray = string.split(" ");
  //Check the first item in the array
  //It has to have the article and nothing else (check for 3 letters)

  if(articles.includes(wordsArray[0].toLowerCase()) && wordsArray[0].length <= 3) {
      //Take out the article element
    wordsArray.shift();
    //return the new string
  }
    return wordsArray.join(" ").trim();


};

const sortItems = () => {
  //Grab all the li elements in the countryUL
  countryLIArray = [...countryUL.querySelectorAll("li")];
  //Check their inner text and sort it alphabetically ascending
  countryLIArray.sort((a,b) => (stripArticles(a.textContent))>stripArticles(b.textContent)? 1 : -1);
  //Rerender them to the countryUL
  countryUL.innerHTML = countryLIArray.map(countryLI => `<li>${countryLI.textContent}</li>`).join("");
};

addItem("Andorra");
addItem("Norway");
addItem("Turkey");
addItem("Russia");
sortItems();
form.addEventListener("submit",formSubmit);
