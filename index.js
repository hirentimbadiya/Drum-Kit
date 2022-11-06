let numberOfDrums = document.querySelectorAll(".drum").length;
// for pressing the buttons 
for (var i = 0; i < numberOfDrums ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        let k = this.innerHTML;
        makeSound(k);
        buttonAnimation(k);
    });
}

// if key is pressed then make the sound accordingy
document.addEventListener("keypress" , function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// make the sound
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
            

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

// adding animation in buttons 
function buttonAnimation(key) {
    let activeBtn = document.querySelector("."+key);
    // add the pressed class to the button
    activeBtn.classList.add("pressed");
    setTimeout(() => {
        // remove the pressed class from the button
        activeBtn.classList.remove("pressed");
    }, 100);
}
