// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  reportsBirth() {
    console.log(`${this.name} was born in ${this.country}.`)
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }

  stateAge() {
    console.log(`${this.name} is ${this.age} years old and can play tennis.`)
  }
}

const brian = new TennisPlayer("Brian", "the USA", 47)

brian.stateAge()