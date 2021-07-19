const colors = [ "#f1f5f8", "aquamarine", "gold", "silver", "rgba(133,122,200)", "#b18975" , "rgba(100,150,250)" , "rgba(200,256,200)", "rgba(303,425,200)", "purple", "pink", "skyblue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}