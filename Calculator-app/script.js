const display = document.getElementById("display");
const willBeDisables = document.querySelectorAll(".disable");


const appendDisplay = (value) => {
    // if(display.value = "Syntax ERROR"){
    //     Array.from(willBeDisables).map((willBeDisabled) => {
    //         willBeDisabled.setAttribute('disabled', '');
    //     })
    // }else{
        display.value += value;
        display.classList.remove("syntaxError");
    // }
}

const result = () => {
    try{
        let result = eval(display.value);
        display.value = result; 
    }catch(err){
        if(err instanceof SyntaxError){
            display.value = "Syntax ERROR"
            display.classList.add("syntaxError");
        }
    }
};


let acBtn = document.querySelector(".ac--btn");
acBtn.addEventListener("click", () => {
    if(display.value = !""){
        display.value = "";
    }
});


let delBtn = acBtn.nextElementSibling;


delBtn.addEventListener("click", () => {
        let str = display.value;
        finalResult = str.slice(0, str.length - 1);
        display.value = finalResult;
});
