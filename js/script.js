for (i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click", function handleClick() {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    })
}


document.addEventListener('keydown', function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;

        case 'a':
            let audio2 = new Audio('sounds/crash.mp3');
            audio2.play();
            break;

        case 's':
            let audio3 = new Audio('sounds/tom-4.mp3');
            audio3.play();
            break;

        case 'd':
            let audio4 = new Audio('sounds/snare.mp3');
            audio4.play();
            break;

        case 'j':
            let audio5 = new Audio('sounds/tom-3.mp3');
            audio5.play();
            break;

        case 'k':
            let audio6 = new Audio('sounds/kick-bass.mp3');
            audio6.play();
            break;

        case 'l':
            let audio7 = new Audio('sounds/tom-2.mp3');
            audio7.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}




/*let audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    });*/





document.querySelector('.opp').addEventListener('onclick', function hey(){alert('hellp there');})




















/*function add(num1, num2){

    console.log(num1 + num2);
}
function substract(num1, num2){
    console.log(num1 - num2);
}
function divide(num1, num2){
    console.log(num1 / num2);
}
function multiply(num1, num2){
    console.log(num1 * num2);
}
function calculator(num1, num2, operator){
    console.log(operator(num1, num2));
}
calculator(6,3,substract);*/