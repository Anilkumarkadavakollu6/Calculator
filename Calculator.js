const dispaly = document.getElementById("display");

function appendTodisplay(input){
    dispaly.value += input;
}

function cleardisplay(){
    dispaly.value ="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="error"
    }
}