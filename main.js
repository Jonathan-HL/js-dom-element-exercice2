// 1
let exo1 = document.querySelector("#content");
console.log(exo1);
// 2
let exo2 = document.querySelectorAll("#content");
console.log(exo2);
// 3
let exo3 = document.querySelector(".important");
console.log(exo3);
// 4
let exo4 = document.querySelectorAll(".important");
console.log(exo4);
// 5
exo4.forEach(el => {
    let monText = el.textContent
    console.log(
            monText.substring(0, monText.length-1).toLowerCase() 
            + 
            monText.substring(monText.length-1).toUpperCase()
        );

});
// 6
let exo6 = document.getElementById("content");
 exo6 = exo6.getElementsByClassName("grandParagraphe");
console.log(exo6);