let btn = document.querySelector("button");


btn.addEventListener("click",function(){

    // console.log("color upted");
    
    let h2= document.querySelector("h2");
   
    let randomColor = getRandomColor();
    h2.innerText =`RGB Value : ${randomColor}`;
    h2.style.backgroundColor = randomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
 
    // console.log("color updeted");
  
    
})




function getRandomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let color = `RGB(${red},${green},${blue})`;
    return color;
}