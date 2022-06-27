var currentNumberwrapper = document.getElementById('currentNumber');
var currentNumber = 0

var mudacor = document.getElementById('currentNumber');


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;
    if (currentNumber > 0 ){
        mudacor.style.color = "blue";
    
    }else {
        if (currentNumber == 0){
            mudacor.style.color = "green";
        }

    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        mudacor.style.color = "red";
    
    }else {
        if (currentNumber == 0){
            mudacor.style.color = "green";
        }

    }
}


