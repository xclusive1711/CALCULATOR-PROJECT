let myText = document.querySelector("#mytext");
function calculate(number){
    if (myText.value.length < 26){
        myText.value += number;
    }
}
function equals(){
    try{
        myText.value = eval(myText.value)
    }
    catch(err){
        alert("YOU ENTERED THE WRONG INPUT");
    }
}
function clearinput(){
    myText.value = " ";
}
function del(){
    myText.value = myText.value.slice(0, -1);
}
