//document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got Clicked");
// }


// document.querySelector("button").addEventListener("click", function(){   //anonymous function
//     alert("I got Clicked");
// });


// document.querySelectorAll("button")[1].addEventListener("click", function(){   //we can also do this one by one but takes a lot of time to do 
//     alert("I got Clicked");
// });




//It better we use for loop

// let noOfDrumButtons = document.querySelectorAll(".drum").length;  //drum class because in future if we add more button then it would not messed up

// for (let i=0; i<noOfDrumButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){   
//         //alert("I got Clicked")

//         // var audio = new Audio("sounds/snare.mp3");   //This play all the button same sound
//         // audio.play();
//         // this.style.color="white";  //This change all the code color in white

        
//         let buttonInnerHtml = this.innerHTML;
//         switch (buttonInnerHtml) {
//             case "w":
//                 var tom1 = new Audio("sounds/tom-1.mp3");   //This play all the button same sound
//                 tom1.play();
                
//                 break;
        
//             case "a":
//                 var tom2 = new Audio("sounds/tom-2.mp3");   //This play all the button same sound
//                 tom2.play();
                
//                 break; 

//             case "s":
//                 var tom3 = new Audio("sounds/tom-3.mp3");   //This play all the button same sound
//                 tom3.play();
                
//                 break;
            
//             case "d":
//                 var tom4 = new Audio("sounds/tom-4.mp3");   //This play all the button same sound
//                 tom4.play();
                
//                 break;    
            
//             case "j":
//                 var snare = new Audio("sounds/snare.mp3");   //This play all the button same sound
//                 snare.play();
                
//                 break;

//             case "k":
//                 var crash = new Audio("sounds/crash.mp3");   //This play all the button same sound
//                 crash.play();
                
//                 break;
                
//             case "l":
//                 var kickbass = new Audio("sounds/kick-bass.mp3");   //This play all the button same sound
//                 kickbass.play();
                
//                 break;
            
//             default: console.log(buttonInnerHtml);
//         }

//     });
// }



//Dectecting Button press

let noOfDrumButtons = document.querySelectorAll(".drum").length;  //drum class because in future if we add more button then it would not messed up

for (let i=0; i<noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);  //go to function makeSound

        buttonAnimation(buttonInnerHtml); //go to function buttonAnimation
    });

}

//Detecting keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);   //go to function makeSound
    
    buttonAnimation(event.key); //go to function buttonAnimation
});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");   //This play all the button same sound
            tom1.play();
        
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");   //This play all the button same sound
            tom2.play();
        
            break; 

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");   //This play all the button same sound
            tom3.play();
        
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");   //This play all the button same sound
            tom4.play();
        
            break;    
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");   //This play all the button same sound
            snare.play();
        
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");   //This play all the button same sound
            crash.play();
        
            break;
        
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");   //This play all the button same sound
            kickbass.play();
        
            break;
    
        default: console.log(buttonInnerHtml);
    }
}



function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");   //Button or Key press

    setTimeout(function(){
        activeButton.classList.remove("pressed"); //Button or key press remove
    },100);
}