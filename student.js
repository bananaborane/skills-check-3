// Create an array called 'faveColors' and set it your three favorite colors as strings

let faveColors = ['blue', 'black', 'burgundy'];

// Create an object called 'me' that has these keys: firstname, superHeroName, homeTown, superPowers, superPowerXP, profileImage. firstName should be your name as a string. superHeroName should be something fun, feel free to jazz it up. homeTown should be your home town. superPowers should be an array of your three super powers as a string. superPowerXP will be a method that returns a random number between 1-100. profileImage will return a random profile image from this url `https://randomuser.me/api/portraits/med/lego/RANDOMNUM.jpg`. The random image number should be between 1-10.

let me = {
  firstname: "Cosmo",
  superHeroName: "Kramer",
  homeTown: "New York",
  superPowers: ['funny acting,', 'crazy hair', 'annoying jerry'],
  superPowerXP: function(){
    return (Math.floor(Math.random() * 101));
  },
  profileImage: function(){
    let randomnum = (Math.floor(Math.random() * 11));
    return `https://randomuser.me/api/portraits/med/lego/${randomnum}.jpg`
  }
}


// Create three variables to hold some data off your me object. First should be 'regularName' that is the value of your firstName on the me object. Next is 'superName' which is the value of superHeroName on the me object. Last is 'homeTown' which will be the value of homeTown on the me object

let regularName = me.firstname;
let superName = me.superHeroName;
let {homeTown} = me;


//Create a function called 'setColor' that takes in one param called arr. Just to make sure that we only ever have three colors, use splice to trim the array to 3 colors. Next, create a for loop to loop over the array. If any of the colors you chose is 'blue', change it's value to '#4D4DFF' which is just a more appealing color of blue. Outside of the for loop but still inside of setColor, run the function called background. This is a function we created to set the background colors. background expects three arguments which should be the first three indices of your array

let setColor = (arr)=>{
  let newArr = arr.splice(0, 3);
  for(let z=0;z<newArr.length;z++){
    if (newArr[z]==="blue"){
      newArr[z] = '4D4DFF';
    }
  }
  background(0, 1, 2);
}


//Create a function called 'setPowers' that takes in arr as a parameter. Loop over the arr param and run this function for each item in the array, createLi, which will take in the index of the array. The createLi function is a function we create to set the data on the screen and it outside the scope of this project

let setPowers = (arr)=>{
  arr.forEach(createLi);
}

//Lastly, create a function called redactInfo that will take in an obj as a paramter. Let's imagine our super hero needs to go undercover and we need to remove all info about them. That is what this function will do. Loop over the object and change each keys value to 'redacted'. Outside of the loop but still in the redactInfo function, run the function redacted() which is a function we created that will update the text on the screen.

let redactInfo = (obj)=>{
  for(key in obj){
    obj[key]='redacted';
  }
  redacted();
}