let calc = {
  sum: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

calc.sum(2, 2);
//4

calc.mul(5, 5);
//25

function language(name, country) {
  this.name = name;
  this.country = country;
  this.greet = () => {
    return `Say Hi to ${name}`;
  };
}

var Tamil = new language("Tamil", "India");//object creation 
//language(name: "Tamil", country:"India", greet: f)

Tamil.greet()
//Say Hi to Tamil

var English = new language("English", "London");//object creation
//language(name: "English", country:"London", greet: f)
English.name //English
English.country //London
English.greet()  //Say Hi to English