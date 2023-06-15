const obj = {
    pseudo: "jha",
    ville: "casablanca",
}
console.log(typeof obj);
console.log(obj.pseudo);

let array = [3, 5, 8]

/*console.log(document.body);
console.log(typeof document.body);
console.log(typeof array);*/

obj.age = 24;
console.log(obj);

obj.pseudo = "fly";

delete obj.ville;
console.log(obj);

