document.title = "color-change"

const main = document.querySelector("#main");
const span = document.getElementById("textColor");
const btn = document.querySelector("#button");

colorArr = ["orange","blue","violet","red","green","purple","brown","pink","yellow"]

btn.addEventListener("click", function (){
    colorChange = colorArr[getRandom()]
    main.style.backgroundColor = colorChange;
    span.innerHTML= colorChange;
    span.style.color = colorChange;
    // btn.style.backgroundColor= colorChange;

})

function getRandom(){
    return Math.floor(Math.random()*colorArr.length)
}