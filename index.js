// function showX(x) {
//return x;
//}
//console.log(showX(28));

//function sum(x, y = 0) {
//  return x + y;
//}
//console.log(sum(5));

//console.log(foo);
//let foo = "Cat";
//console.log(foo);

function message() {
  console.log("Я учу Java Script");
}
message();

//Практическое задание:
const blockFoto = document.getElementById("img");
//console.log(blockFoto);
function leftShowFoto() {
  blockFoto.style.backgroundImage = `url("/assets/image/kitty_java_3.png")`;
}
function rightShowFoto() {
  blockFoto.style.backgroundImage = `url("/assets/image/kitty_java_2.jpeg")`;
}

const blockFotoSecond = document.getElementById("big_cat");
function leftShowFotoBig() {
  blockFotoSecond.setAttribute("src", "assets/image/anime_cat2.jpeg");
}
function rightShowFotoBig() {
  blockFotoSecond.setAttribute("src", "assets/image/cat_anime_3.jpeg");
}
