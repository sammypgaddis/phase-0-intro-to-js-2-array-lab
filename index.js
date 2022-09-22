 let cats = ['Milo', 'Otis', 'Garfield'];
 function destructivelyAppendCat(name) {
    console.log(name)
    cats.push(name)
 }
 //destructivelyAppendCat('Ralph');
 console.log(cats);

 function destructivelyPrependCat(name) {
    console.log(name)
    cats.unshift(name)
 }
 //destructivelyPrependCat('Ralph');
 console.log(cats);

 function destructivelyRemoveLastCat(name) {
    console.log()
    cats.pop()
 }
 //destructivelyRemoveLastCat();
 console.log(cats);

 function destructivelyRemoveFirstCat(name) {
    console.log()
    cats.shift()
 }
 //destructivelyRemoveFirstCat();
 console.log(cats);

 function appendCat(name) {
   let catsCopy = [...cats];
    catsCopy.push(name);
    return catsCopy 
 }
 console.log(appendCat('Broom'));
 //console.log(cats);
 
 function prependCat(name) {
    let catsCopy = [...cats];
    catsCopy.unshift(name);
    return catsCopy
 }
 console.log(prependCat('Arnold'));
 //console.log(cats);

 function removeLastCat(name) {
    let catsCopy = cats.slice(0, 2);
    return catsCopy
 }
 //console.log(cats);
 console.log(removeLastCat());

 function removeFirstCat(name) {
    let catsCopy = cats.slice(1)
    return catsCopy
 }
 console.log(removeFirstCat());