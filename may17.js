const screen = document.querySelector(".screen");

let p=0;
let check=0;
let flag=0;


const btns = document.querySelectorAll("button");

function handleClick(event){
    
    let key = event.target.textContent;
    
    

    if(key=="C") {screen.textContent=""
    screen.style.backgroundColor=""}
    else if(key=="="){
        screen.textContent = eval(screen.textContent)
    }
    else if(key=="submit"){
        p=screen.textContent.trim()
        screen.style.backgroundColor="yellow"
        console.log(p)
        let option_correct = quizQuestions[current_question_number].correct;
        if(flag==0){
        if(p==option_correct){
            score++;
            console.log(score)
            flag=1;
        }}
        
    }
    else if(key=="1" || key == "2" || key=="3" || key=="4" || key=="5" || key=="6" || key=="7" || key=="8" || key=="9" || key=="0"){
        screen.style.backgroundColor=""
    screen.textContent+=key;}
    
}

if(p=="" || screen.style.backgroundColor==""){for(btn of btns){
    btn.addEventListener("click",handleClick);
}}

console.log(eval())
// console.log(p)

var img1=document.querySelector("img")
img1.src="12.1.jpg" //12
const quizQuestions = [
    {
        question: img1,
        correct: "12",
    },
    {
        question: img1,
        correct: "6",
    },
    {
        question: img1,
        correct: "8",
    },
    {
        question: img1,
        correct: "29",
    },
    {
        question: img1,
        correct: "5",
    },
    {
        question: img1,
        correct: "57",
    },
    {
        question: img1,
        correct: "3",
    },
    {
        question: img1,
        correct: "15",
    },
    {
        question: img1,
        correct: "74",
    },
    {
        question: img1,
        correct: "2",
    },
    {
        question: img1,
        correct: "6",
    },
    {
        question: img1,
        correct: "97",
    },
    {
        question: img1,
        correct: "45",
    },
    {
        question: img1,
        correct: "16",
    },
    {
        question: img1,
        correct: "26",
    },
    {
        question: img1,
        correct: "35",
    },
    {
        question: img1,
        correct: "7",
    }
];
// console.log(quizQuestions.length)
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
// let option_1_element = document.getElementById("option1");
// let option_2_element = document.getElementById("option2");
// let option_3_element = document.getElementById("option3");
// let option_4_element = document.getElementById("option4");
let time_element = document.getElementById("timer")
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
let time;
const total_time = 10;
let sec = total_time;
function timer(){
    time_element.innerHTML=sec;
    sec--;
    
    if(sec==0){
        sec=total_time;
        clearInterval(time);
        // current_question_number++;
        screen.style.backgroundColor="yellow"
        p="h"
        // console.log(current_question_number)
        // showQuestion()
        next()
        
    }
    // if(sec!=0){
    //     screen.style.backgroundColor=""
    //     p=""
    // }
}
function next(){
    flag=0;
    // sec = total_time
    // let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(p=="" || screen.style.backgroundColor=="")
    {
        alert("Please mark your answer and must submit it");
    }else{
        
        let option_correct = quizQuestions[current_question_number].correct;
        
        current_question_number ++;
        screen.style.backgroundColor=""
        if(current_question_number==1){
            img1.src="6.2.jpg" //6
        }
        else  if(current_question_number==2){
            img1.src="8.3.jpg" //8
        }
        else  if(current_question_number==3){
            img1.src="29.4.jpg" //29
        }
        else  if(current_question_number==4){
            img1.src="5.5.jpg" //5
        }
        else  if(current_question_number==5){
            img1.src="57.6.jpg" //57
        }
        else  if(current_question_number==6){
            img1.src="3.7.jpg" //3
        }
        else  if(current_question_number==7){
            img1.src="15.8.jpg" //15
        }
        else  if(current_question_number==8){
            img1.src="74.9.jpg" //74
        }
        else  if(current_question_number==9){
            img1.src="2.10.jpg" //2
        }
        else  if(current_question_number==10){
            img1.src="6.11.jpg" //6
        }
        else  if(current_question_number==11){
            img1.src="97.12.jpg" //97
        }
        else  if(current_question_number==12){
            img1.src="45.13.jpg" //45
        }
        else  if(current_question_number==13){
            img1.src="16.14.jpg" //16
        }
        else  if(current_question_number==14){
            img1.src="26.15.jpg" //26
        }
        else  if(current_question_number==15){
            img1.src="35.16.jpg" //35
        }else  if(current_question_number==16){
            img1.src="7.17.jpg" //7
        }
        if(current_question_number>=quizQuestions.length){
            // show final answer
            goToResultPage();   
    
        }else{
            //show next question
            showQuestion();
        }
        screen.textContent=""
        p=""
    }
}
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    sec=total_time;
    clearInterval(time);
    timer();
    time = setInterval(timer,1000)
    
    
    
    // screen.style.backgroundColor="yellow"
    // p="h"
    if(current_question_number>=quizQuestions.length){
        goToResultPage();
    }
    //uncheck all the option seleceted
    // document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    // question_txt_element.innerHTML = quizQuestions[current_question_number].question;

}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',function next(){
    // sec = total_time
    // let optionIdSelected = document.querySelector('input[name = opt]:checked');
    flag=0;
    
    if(p=="" || screen.style.backgroundColor=="")
    {
        alert("Please mark your answer and must submit it");
    }else{
               
        // if(p==option_correct){
        //     score++;        
        // }
        flag=0;
        // console.log(score)
        current_question_number ++;
        
        screen.style.backgroundColor=""
        if(current_question_number==1){
            img1.src="6.2.jpg" //6
        }
        else  if(current_question_number==2){
            img1.src="8.3.jpg" //8
        }
        else  if(current_question_number==3){
            img1.src="29.4.jpg" //29
        }
        else  if(current_question_number==4){
            img1.src="5.5.jpg" //5
        }
        else  if(current_question_number==5){
            img1.src="57.6.jpg" //57
        }
        else  if(current_question_number==6){
            img1.src="3.7.jpg" //3
        }
        else  if(current_question_number==7){
            img1.src="15.8.jpg" //15
        }
        else  if(current_question_number==8){
            img1.src="74.9.jpg" //74
        }
        else  if(current_question_number==9){
            img1.src="2.10.jpg" //2
        }
        else  if(current_question_number==10){
            img1.src="6.11.jpg" //6
        }
        else  if(current_question_number==11){
            img1.src="97.12.jpg" //97
        }
        else  if(current_question_number==12){
            img1.src="45.13.jpg" //45
        }
        else  if(current_question_number==13){
            img1.src="16.14.jpg" //16
        }
        else  if(current_question_number==14){
            img1.src="26.15.jpg" //26
        }
        else  if(current_question_number==15){
            img1.src="35.16.jpg" //35
        }else  if(current_question_number==16){
            img1.src="7.17.jpg" //7
        }
        if(current_question_number>=quizQuestions.length){
            // show final answer
            goToResultPage();   
    
        }else{
            //show next question
            showQuestion();
        }
        screen.textContent=""
        p=""
    }
});

showQuestion();
function goToResultPage(){
    current_question_number = 0;
    localStorage.setItem("score", score);
    location.href = "./resultPage.html";
}
