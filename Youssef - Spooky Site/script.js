var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
let first = document.getElementById("First");
let last = document.getElementById("Last");
let text = document.getElementById("text");
let btn = document.getElementById("submit");


/* to modify the character postion*/
function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

/* a subpar impact detection*/
var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";;
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);


btn.addEventListener("click", function(){
    if (last.textContent == " " || first.textContent== " " || text.textContent==" ") {
        alert('You should fill all of the information!');
    }
})