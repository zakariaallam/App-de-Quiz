const start_btn = document.getElementById("start_btn");
const page_start = document.getElementById("page_start");
const page_Quiz = document.getElementById("page_Quiz")
start_btn.addEventListener("click",()=>{
   page_start.style.display = "none";
   page_Quiz.style.display = "block"
})


const Quize = {
    case1:"Inside which HTML element do we put the JavaScript?",
    case2: "Qui est le créateur de JavaScript ?",
    case2: "Quelle est la différence entre let, var et const ?",
    case2: "Qui est le créateur de JavaScript ?",
    case2: "Qui est le créateur de JavaScript ?",
    case2: "Qui est le créateur de JavaScript ?",

}

const reponse = {
    rp1:["<script>","javaScript","js","scripting"],
    rp2:["Elon Musk","Tim Berners-Lee","Brendan Eich","Bill Gates"],
    rp2:["Ce sont tous les mêmes","Tim Berners-Lee","Brendan Eich","Bill Gates"],
    rp2:["Elon Musk","Tim Berners-Lee","Brendan Eich","Bill Gates"],
    rp2:["Elon Musk","Tim Berners-Lee","Brendan Eich","Bill Gates"],
    rp2:["Elon Musk","Tim Berners-Lee","Brendan Eich","Bill Gates"],

}