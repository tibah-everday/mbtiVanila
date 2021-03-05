const main = document.querySelector("#main");
const pages = document.querySelectorAll("#contents>div.qna");
const description = document.querySelector("#description");
const startBtn = document.querySelector("#startBtn");
const answersNodeList = document.querySelectorAll(".answer");
let count= 0;

const answers = Array.from(answersNodeList);

answers.map((answer)=>{
    answer.addEventListener("click", nextPage);
})


function startTest(e){
    main.classList.remove("shown");
    pages[0].classList.add("shown");    
}

function nextPage(e){    
    pages[count].classList.remove("shown");
    count = count+1;    
    if(count===12){
        description.classList.add("shown");
        return;
    }
    pages[count].classList.add("shown");
}



startBtn.addEventListener("click", startTest);