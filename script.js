const screen = document.querySelector(".screen");

let p=0;

const btns = document.querySelectorAll("button");

function handleClick(event){
    let key = event.target.textContent;
    
    

    if(key=="C") screen.textContent=""
    else if(key=="="){
        screen.textContent = eval(screen.textContent)
    }
    else if(key=="submit"){
       
        p=screen.textContent.trim()
        console.log(p)
    }
    else if(key=="1" || key == "2" || key=="3" || key=="4" || key=="5" || key=="6" || key=="7" || key=="8" || key=="9" || key=="0"){
    
    screen.textContent+=key;}
    
}

for(btn of btns){
    btn.addEventListener("click",handleClick);
}

console.log(eval())
console.log(p)