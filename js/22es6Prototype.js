class geo {
  constructor() {
    this.lat = 43.22;
    this.long = 32.98;
  }
}

class language extends geo {
  constructor(name, country) {
    super();
    this.name = name;
    this.country = country;
  }

  greet = (name) => {
    return `Say hi to ${name}`;
  };
}

var French = new language("French", "France");
console.log(French);
French.name; //French
French.lat; //43.22
