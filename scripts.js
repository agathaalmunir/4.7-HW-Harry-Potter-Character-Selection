const addTitle = () => {
   let title = document.querySelector('h1'); 
   console.log(title);
   title.textContent = 'Harry Potter Character Selection';
};

addTitle();

//use querySelector(.needflex)
const flexIt = () => {
    let flex = document.querySelector('.needFlex');
    console.log(flex);
    flex.classList.toggle('flexIt');
}

 flexIt();

//make a function called addHouses. find all paragraghs with the class called description using queryslector and store in a variable named oldP. 
//create a new array called newP that lists the  houses 
//write a for loop that iterates through oldP (a nodelist/array). start at the index of oldP and use .classList to get the class names and assign it to newP[i] to replace the original class name
//call the function
const addHouses = () => {
    const oldP = document.querySelectorAll('.description');
    // oldP[0].classList.add('Gryffindor');
    let newP = [
        "gryffindor",
        "hufflepuff",
        "ravenclaw",
        "slytherin"
    ];
    for (let i = 0; i < oldP.length; i++) {
    // this will add the new class name to the original: 
        oldP[i].classList.add(newP[i])
    //this replaces the class name:
    // oldP[i].classList = newP[i];
    };
};
addHouses();

//purpose: when a user clicks the button of a house, add the class "emphasis" to the p tag that has their house name
//create an arrow function called emphasize with one parameter called house
    //select the p tag with the house
    //toggle emphasis
//call the function

// const emphasize = (house) => {
//     if (house = 'gryffindor') {
//        let gryffindor = document.querySelector(".gryffindor");
//        gryffindor.classList.toggle('emphasis');
//     }
// };


const emphasize = (house) => {   
    let arr1 = document.getElementsByClassName(house);
    console.log(arr1);    
    for(each of arr1) {    
        each.classList.toggle('emphasis');    
    }};
emphasize();

/