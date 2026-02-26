document.getElementById("start").addEventListener("click", () => {
  const login = document.getElementById("login");
  login.classList.remove("hidden");
  const start = document.getElementById("start");
  start.classList.add("hidden");
});
document.getElementById('login').addEventListener('click',()=>{
   const faq=document.getElementById('faq');
   faq.classList.remove('hidden');
   const logout=document.getElementById('logout');
   logout.classList.remove('hidden')
   const third=document.getElementById('thirdsec');
   third.classList.remove('hidden')
   const fourth=document.getElementById('fourth');
   fourth.classList.remove('hidden')
   const footer=document.getElementById('footer');
   footer.classList.remove('hidden')
})
document.getElementById('logout').addEventListener('click',()=>{
  const login = document.getElementById("login");
  login.classList.add("hidden");
  const start = document.getElementById("start");
  start.classList.remove("hidden");
  const faq=document.getElementById('faq');
   faq.classList.add('hidden');
   const logout=document.getElementById('logout');
   logout.classList.add('hidden')
   const third=document.getElementById('thirdsec');
   third.classList.add('hidden')
   const fourth=document.getElementById('fourth');
   fourth.classList.add('hidden')
   const footer=document.getElementById('footer');
   footer.classList.add('hidden')
})
document.getElementById('faq').addEventListener('click',()=>{
  const faqSection=document.getElementById('fourth')
  faqSection.scrollIntoView({ behavior: 'smooth' });
})
document.getElementById('how').addEventListener('click',()=>{
  const firstq=document.getElementById('ans');
  const adiv=document.createElement('div');
  adiv.innerText='Ans- you Can'
  firstq.appendChild(adiv)
  
})
document.getElementById('secbtn').addEventListener('click',()=>{
   const firstq=document.getElementById('ans1');
  const adiv=document.createElement('div');
  adiv.innerText='Ans- yes free'
  firstq.appendChild(adiv)
})

document.getElementById('thirdbtn').addEventListener('click',()=>{
   const firstq=document.getElementById('ans2');
  const adiv=document.createElement('div');
  adiv.innerText='Ans- yes free'
  firstq.appendChild(adiv)
})

document.getElementById('fourthbtn').addEventListener('click',()=>{
   const firstq=document.getElementById('ans3');
  const adiv=document.createElement('div');
  adiv.innerText='Ans- Studying..'
  firstq.appendChild(adiv)
})

document.getElementById('fifthbtn').addEventListener('click',()=>{
   const firstq=document.getElementById('ans4');
  const adiv=document.createElement('div');
  adiv.innerText='Ans- yes'
  firstq.appendChild(adiv)
})
document.getElementById('level1').addEventListener('click',()=>{
  const cardsec=document.getElementById('cardsec')
  cardsec.classList.remove('hidden')
  load()
})
const load= async()=>{
const res=await fetch('https://openapi.programming-hero.com/api/level/1')
const data=await res.json();
makingcard(data.data)
}


const makingcard=(data)=>{
  const cardcontainer=document.getElementById('cardsec');
  cardcontainer.innerHTML="";
  data.forEach((element)=>{
    
const card=document.createElement('div')
 card.classList.add(
  "bg-white",
  "px-10",
  "py-10",
  "rounded-xl",
  "shadow-md",
  "flex",
  "flex-col",
  "justify-between",
  "h-full",
  "min-h-[260px]"
);
  card.innerHTML=`<div class="flex flex-col items-center justify-center gap-[18px] ">
          <h2 class="font-bold text-[28px]">${element.word}</h2>
          <h2 class="font-serif text-[16px]">Meaning /Pronounciation</h2>
          <h2 class="tiro-bangla-regular font-bold text-[18px] break-words text-center">
            "${element.meaning} / ${element.pronunciation
}"
          </h2>
        </div>
        <div class="flex items-center justify-between mt-[20px]">
          <button>
            <img
              class="p-2 bg-gray-200 rounded-xl"
              src="./assets/fa-circle-question.png"
              alt=""
            />
          </button>
          <button>
            <img
              class="p-2 bg-gray-200 rounded-xl"
              src="./assets/fa-book-open.png"
              alt=""
            />
          </button>
        </div>
  
  `

cardcontainer.appendChild(card)
  })
  
 
}

