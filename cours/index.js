const obj = {
    pseudo: "jha",
    ville: "casablanca",
    admin: false,
direBonjour: function(){
    console.log("bonjour je suis " + this.pseudo + " j'habite à " + this.ville);
}
    /*direBonjour(){
        console.log("bonjour je suis " + this.pseudo + " j'habite à " + this.ville);
    }*/
}
//console.log(typeof obj);
//console.log(obj.pseudo);

let array = [3, 5, 8]

/*console.log(document.body);
console.log(typeof document.body);
console.log(typeof array);*/

obj.age = 24;
//console.log(obj);

obj.pseudo = "fly";

//delete obj.ville;
//console.log(obj);

//checher si propriété existe
//console.log("pseudo" in obj);
//console.log("ville" in obj);
//parcourir un objet
/*for(let key in obj){
    //console.log(key + ":" + obj[key]);
}*/
console.log(obj.direBonjour());

//obtenir les clés d'un objet
const keys = Object.keys(obj);
console.log(keys);

//obtenir les valeurs d'un objet
const values = Object.values(obj);                          
console.log(values);

const nestedArray = Object.entries(obj);
console.log(nestedArray);

//fusionner deux objets

const obj2 = {
    taille: "1m82",
    poids: "100kg"
}

const fusion = Object.assign(obj, obj2);
console.log(fusion);

//Empeche les modifications d'un objet                                                                                                                                                                                                                  
//const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);

newObj.pseudo = "test";
newObj.age = 25;
console.log(newObj);

//construire un objet

//fonction constructeur
function User(pseudo, ville, age, email){
    this.pseudo = pseudo;
    this.ville = ville;
    this.age = age;
    this.email = email;

    this.getCity = function(){
        console.log(this.pseudo + " habite à " + this.ville + " et a " + this.age + " ans" + " son email est " + this.email                                                                                                                                                                                                                                                                                                                                                    );
    }
}

const user1 = new User("jha", "casablanca", 24, "kkk@gmail");
const user2 = new User("fly", "rabat", 25, "koko@gmail");

console.log(user2.getCity());

//factory functions

function User3(pseudo, ville, age, email){
    return{
        pseudo,
        ville,
        age,
        email
    }
}

const user4 = User3("dol", "tanger", 26, "dol@gmail");
console.log(user4);

//Class
class Utilisateur {
    constructor(pseudo, ville, age, email){
        this.pseudo = pseudo;
        this.ville = ville;
        this.age = age;
        this.email = email;
    }
}
const user5 = new Utilisateur("toto", "village", 124, "toto@gmail");
Utilisateur.prototype.getCity = function(){
    console.log(this.pseudo + " habite à " + this.ville + " et a " + this.age + " ans" + " son email est " + this.email);
}   


Object.assign(Utilisateur.prototype, {
    method1(){
        //console.log("method 1");
    },
    method2(){
        //console.log("method 2");
    }
})
console.log(user5);

/*let array2 = [3, 5, 8];
console.log(array2);*/

//l'heritage
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    saySomething(text){
        console.log(this.name + "dit : " + text);
    }
}

class Cat extends Animal {
    hunt(){
        console.log("le chat chasse !");
    }
}
class Dog extends Animal{
    run(){
        console.log("le chien court !");
    }
}
const rintintin = new Dog("rintintin", 5);
console.log(rintintin);