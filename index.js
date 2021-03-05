const main = document.querySelector("#main");
const pages = Array.from(document.querySelectorAll("#contents>div.qna"));
const description = document.querySelector("#description");
const startBtn = document.querySelector("#startBtn");
const answers = Array.from(document.querySelectorAll(".answer"));
const progressBar = document.querySelector(".progressBar");
const progressBarInside = document.querySelector(".progressBar_inside");

let count= 0;
let barLength = 8.33;
let defaultArray = [
    {name: "mouse", value:0, key:0},
    {name: "cow", value:0, key:1},
    {name: "tiger", value:0, key:2},
    {name: "rabbit", value:0, key:3},
    {name: "dragon", value:0, key:4},
    {name: "snake", value:0, key:5},
    {name: "horse", value:0, key:6},
    {name: "sheep", value:0, key:7},
    {name: "monkey", value:0, key:8},
    {name: "chick", value:0, key:9},
    {name: "dog", value:0, key:10},
    {name: "pig", value:0, key:11},
]


answers.map((answer)=>{
    answer.addEventListener("click", nextPage);    
})



function startTest(){
    main.classList.remove("shown");
    pages[0].classList.add("shown");
    console.log(pages[0].children[0]);
    pages[0].children[0].innerHTML = qnaList[0].q;
    pages[0].children[1].innerHTML = qnaList[0].a[0].answer;
    pages[0].children[2].innerHTML = qnaList[0].a[1].answer;
    pages[0].children[3].innerHTML = qnaList[0].a[2].answer;
    progressBar.style.display="block";
}

function nextPage(e){    
    const answerSet = Array.from(e.target.parentNode.children);
    pages[count].classList.remove("shown");
    const addedCount = qnaList[count].a[answerSet.indexOf(e.target)-1].type;    
    console.log(addedCount);
    for(let i = 0; i<defaultArray.length; i++){
        for(let j = 0; j<addedCount.length; j++){            
            if(defaultArray[i].name === addedCount[j]){                
                defaultArray[i].value++;
            }                                    
        }        
    }
    
    
    count = count+1;
    
    barLength = ((count+1)/12)*100;    
    progressBarInside.style.width=barLength+"%"; 

    
    

    const totalCount = defaultArray.map((item)=>item.value);    
    totalCount.sort((a,b)=>a-b);
    const maxValue = totalCount[totalCount.length-1];    
    const resultKey = defaultArray.find(item=>item.value===maxValue).key;    
    description.children[1].innerHTML = infoList[resultKey].name;
    description.children[2].innerHTML = infoList[resultKey].desc;


    if(count===12){
        description.classList.add("shown");
        progressBar.style.display="none";
        return;
    }
    pages[count].children[0].innerHTML = qnaList[count].q;
    pages[count].children[1].innerHTML = qnaList[count].a[0].answer;
    pages[count].children[2].innerHTML = qnaList[count].a[1].answer;
    pages[count].children[3].innerHTML = qnaList[count].a[2].answer;
    pages[count].classList.add("shown");
}

startBtn.addEventListener("click", startTest);