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
for(let key in obj){
    //console.log(key + ":" + obj[key]);
}
console.log(obj.direBonjour());