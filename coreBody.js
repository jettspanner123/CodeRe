const coreBody = document.getElementById("coreBody");
const coreBody2 = document.getElementById("coreBody2");
const rightButton = document.getElementById("rightButton");
const imageDiv = document.getElementById("photoSlider")
coreBody.addEventListener("mousemove", e => {
    coreBody.style.background = `radial-gradient(circle farthest-side at ${e.clientX}px ${e.clientY}px, #00176c 0%, transparent 50%)`

})


let currentIndex = 1;
rightButton.addEventListener("click" , e => {
   imageDiv.style.transform = `translate(-${currentIndex * 30}rem)`;
   rightButton.style.scale = "0.5";
   currentIndex++;
   rightButton.style.scale = "1";
   if(currentIndex >= 4){
      currentIndex = 0;
   }
})


coreBody2.addEventListener("mousemove", e => {
   coreBody.style.background = `radial-gradient(circle farthest-side at ${e.clientX}px ${e.clientY}px, #00176c 0%, transparent 50%)`

})