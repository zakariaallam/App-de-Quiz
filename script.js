const start_btn = document.getElementById("start_btn");
const page_start = document.getElementById("page_start");
const page_Quiz = document.getElementById("page_Quiz");


// ------------------- create element -----------------------
let p = document.createElement("p");
let button = document.createElement("button");
let button_presedont = document.createElement("button");
const div_btn = document.createElement("div")

// ------------- tailwind --------------------
button.classList.add('px-10', 'cursor-pointer', 'mt-4', 'hover:bg-blue-700', 'py-2', 'rounded-md', 'text-white', 'bg-blue-500');

button_presedont.classList.add('px-10', 'cursor-pointer','hidden', 'mt-4', 'hover:bg-blue-700', 'py-2', 'rounded-md', 'text-white', 'bg-blue-500')

div_btn.classList.add('flex','justify-around')

p.classList.add('text-black-500' ,'font-bold', 'text-2xl', 'mb-8')

button_presedont.textContent = "presedent"
div_btn.appendChild(button_presedont)

button.textContent = 'Suivent'
div_btn.appendChild(button)


let nuber_question = 0;

const Quize = [
  {
    Quistion : "Inside which HTML element do we put the JavaScript?",
    rp : ["script", "javaScript", "js", "scripting"],
    reponse : "javaScript"
  },

  {
    Quistion : "Qui est le créateur de JavaScript ?",
    rp : ["Elon Musk", "Tim Berners-Lee", "Brendan Eich", "Bill Gates"],
    reponse : "Brendan Eich"
  },

  {
    Quistion : "Quelle est la différence entre let, var et const ?",
    rp : ["Ce sont tous les mêmes","Tim Berners-Lee","Brendan Eich","Bill Gates"],
    reponse : "Ce sont tous les mêmes"
  },

  {
    Quistion : "Quelle méthode permet de transformer une chaîne en nombre ?",
    rp : [
    "Number()",
    "parseInt()",
    "parseFloat()",
    "Toutes les réponses ci-dessus",
  ],
    reponse : "Number()"
  }
]


let array_scor = [];
let cunt =0;
function check_repons(btn){
   for(let i=0;i<Quize.length;i++){
    if(btn.textContent == Quize[i].reponse && btn.style.backgroundColor === "green"){
      cunt++;
    }
    }
   }


// -------------- function add element --------------
function change_quistion(indix){
    p.textContent = `${Quize[indix].Quistion}`
  page_Quiz.appendChild(p)
  for(let i=0;i<4;i++){
    let button_repons = document.createElement("button");

    button_repons.classList.add('border', 'mb-2',  'border-gray-400', 'w-180','rounded-xl', 'text-lg', 'px-6', 'py-2')

    button_repons.textContent = `${Quize[indix].rp[i]}`
    page_Quiz.appendChild(button_repons)

    button_repons.addEventListener("click",()=>{
      if(button_repons.style.backgroundColor === "green"){
          button_repons.style.backgroundColor = "white"
          
      }else{
        button_repons.style.backgroundColor = "green" 
      }

      check_repons(button_repons)
    })
  }
    page_Quiz.appendChild(div_btn);
}



function Add_element(){
  start_btn.addEventListener("click", () => {
  page_start.style.display = "none";
  page_Quiz.style.display = "block";

  change_quistion(0);
});
}

function clear(){
  page_Quiz.textContent = '';
}


function scor(){
  const image = document.createElement("img");
  const title = document.createElement("h2");
  image.src = './image/congratulation.jpg'
  image.alt = 'image congratulation'
  image.classList.add('m-auto')
  title.textContent = `Scor : ${cunt}/4`
  title.classList.add('font-bold', "text-xl")
  page_Quiz.appendChild(image)
  page_Quiz.appendChild(title);

}


button.addEventListener("click",()=>{
  if(nuber_question < 3){
       clear();
       nuber_question++;
       change_quistion(nuber_question);
       if(nuber_question == 3){
        button.textContent = 'Termin'
       }else{
        button.textContent = 'Suivent'
       }

       if(nuber_question > 0){
        button_presedont.classList.remove('hidden')
       }
       array_scor[nuber_question];
  }else{
    clear();
    scor();
  }
    });


    button_presedont.addEventListener("click",()=>{
     if(nuber_question <= 3){
       clear();
       nuber_question--;
       change_quistion(nuber_question);
       if(nuber_question == 0){
        button_presedont.classList.add('hidden')
       }
       
      }else{
       clear();
       scor();
     }
     
     });

Add_element(nuber_question);