// alert('heloo');
var random2 = Math.floor(Math.random()*6)+1
var random1 = Math.floor(Math.random()*6) +1;
console.log(random1);
var randomDice = "dice" + random1 + ".png";
let randomimg = "" + randomDice;
let img =  document.querySelectorAll("img")[0];

let Diceval1 = img.setAttribute("src", randomimg)



var randomDice1 = "dice" + random2 + ".png";
let randomimg1 = "" + randomDice1;
let img1 = document.querySelectorAll("img")[1];
let Diceval2 =  img1.setAttribute("src", randomimg1);
 

var head = document.getElementById("heading")
console.log(head)

if(random1 > random2){
      head.innerHTML = "Player  1  Winner!";
}
else if(random1 < random2){
    head.innerHTML = "Player  2  Winner!";
}
else{
        head.innerHTML = "Drow!"
}






// if(Diceval1 > Diceval2){
//   alert("hello")
// }
// else{
//     alert("hiiii")
// }
