document.getElementById("start").addEventListener("click", () => {
  const login = document.getElementById("login");
  login.classList.remove("hidden");
  const start = document.getElementById("start");
  start.classList.add("hidden");
});
document.getElementById("login").addEventListener("click", () => {
  const faq = document.getElementById("faq");
  faq.classList.remove("hidden");
  const logout = document.getElementById("logout");
  logout.classList.remove("hidden");
  const third = document.getElementById("thirdsec");
  third.classList.remove("hidden");
  const fourth = document.getElementById("fourth");
  fourth.classList.remove("hidden");
  const footer = document.getElementById("footer");
  footer.classList.remove("hidden");
  document.getElementById("ekhono").classList.remove("hidden");
  const learnsec = document.getElementById("thirdsec");
  learnsec.scrollIntoView({ behavior: "smooth" });
  document.getElementById('formhere').classList.add('hidden')
});
document.getElementById("logout").addEventListener("click", () => {
  const login = document.getElementById("login");
  login.classList.add("hidden");
  const start = document.getElementById("start");
  start.classList.remove("hidden");
  const faq = document.getElementById("faq");
  faq.classList.add("hidden");
  const logout = document.getElementById("logout");
  logout.classList.add("hidden");
  const third = document.getElementById("thirdsec");
  third.classList.add("hidden");
  const fourth = document.getElementById("fourth");
  fourth.classList.add("hidden");
  const footer = document.getElementById("footer");
  footer.classList.add("hidden");
  document.getElementById("cardsec").classList.add("hidden");
    document.getElementById('searchbar').classList.add('hidden')
    document.getElementById('formhere').classList.remove('hidden')
});
document.getElementById("faq").addEventListener("click", () => {
  const faqSection = document.getElementById("fourth");
  faqSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("how").addEventListener("click", () => {
  const firstq = document.getElementById("ans");
  const adiv = document.createElement("div");
  adiv.innerText = "Ans- you Can";
  firstq.appendChild(adiv);
});
document.getElementById("secbtn").addEventListener("click", () => {
  const firstq = document.getElementById("ans1");
  const adiv = document.createElement("div");
  adiv.innerText = "Ans- yes free";
  firstq.appendChild(adiv);
});

document.getElementById("thirdbtn").addEventListener("click", () => {
  const firstq = document.getElementById("ans2");
  const adiv = document.createElement("div");
  adiv.innerText = "Ans- yes free";
  firstq.appendChild(adiv);
});

document.getElementById("fourthbtn").addEventListener("click", () => {
  const firstq = document.getElementById("ans3");
  const adiv = document.createElement("div");
  adiv.innerText = "Ans- Studying..";
  firstq.appendChild(adiv);
});

document.getElementById("fifthbtn").addEventListener("click", () => {
  const firstq = document.getElementById("ans4");
  const adiv = document.createElement("div");
  adiv.innerText = "Ans- yes";
  firstq.appendChild(adiv);
});
document.getElementById("level1").addEventListener("click", () => {
  document.getElementById("ekhono").classList.add("hidden");
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level1btn = document
    .getElementById("level1")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  document.getElementById('searchbar').classList.remove('hidden')
  load(1);
});
document.getElementById("level2").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level2btn = document
    .getElementById("level2")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(2);
});
document.getElementById("level3").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level3btn = document
    .getElementById("level3")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(3);
});
document.getElementById("level4").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level4btn = document
    .getElementById("level4")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(4);
});
document.getElementById("level5").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level5btn = document
    .getElementById("level5")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(5);
});
document.getElementById("level6").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level6btn = document
    .getElementById("level6")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(6);
});
document.getElementById("level7").addEventListener("click", () => {
  const allbtn = document.querySelectorAll(".levelbtn");
  allbtn.forEach((element) => {
    element.classList.remove("bg-blue-200");
    element.classList.add("bg-white");
  });
  const level7btn = document
    .getElementById("level7")
    .classList.add("bg-blue-200");
  const cardsec = document.getElementById("cardsec");
  cardsec.classList.remove("hidden");
  load(7);
});

const load = async (value) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/level/${value}`,
  );
  const data = await res.json();
  makingcard(data.data);
};

const makingcard = (data) => {
  const cardcontainer = document.getElementById("cardsec");
  cardcontainer.innerHTML = "";
  cardcontainer.classList.remove("grid");
  if (data.length == 0) {
    const card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "px-10",
      "py-10",
      "rounded-xl",
      "shadow-md",
      "flex",
      "flex-row",
      "justify-between",
      "h-full",
      "min-h-[260px]",
      "items-center",
    );
    card.innerHTML = `<h2 class="font-bold text-[32px]">Sorry! Words not found</h2>`;
    cardcontainer.appendChild(card);
  } else {
    cardcontainer.classList.add("grid");

    data.forEach((element) => {
      const card = document.createElement("div");
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
        "min-h-[260px]",
      );
      card.innerHTML = `<div class="flex flex-col items-center justify-center gap-[18px] ">
          <h2 class="font-bold text-[28px]">${element.word}</h2>
          <h2 class="font-serif text-[16px]">Meaning /Pronounciation</h2>
          <h2 class="tiro-bangla-regular font-bold text-[18px] break-words text-center">
            "${element.meaning} / ${element.pronunciation}"
          </h2>
        </div>
        <div class="flex items-center justify-between mt-[20px]">
          <button class="sound-btn" data-word="${element.word}">
  <img 
    class="w-[20px] h-fit bg-gray-200 rounded-xl"
    src="./assets/loud-sound.png"
    alt=""
  />
</button>
          <button class="details-btn" data-id="${element.id}">
            <img
              class="p-2 bg-gray-200 rounded-xl"
              src="./assets/fa-book-open.png"
              alt=""
            />
          </button>
        </div>
  
  `;

      cardcontainer.appendChild(card);
    });
  }
};
document.getElementById("cardsec").addEventListener("click", (e) => {
  if (e.target.closest(".details-btn")) {
    const button = e.target.closest(".details-btn");
    const wordId = button.dataset.id;

    det(wordId);
  }
});
document.getElementById("cardsec").addEventListener("click", (e) => {
  if (e.target.closest(".sound-btn")) {
    const button = e.target.closest(".sound-btn");
    const wordhere = button.dataset.word;

    saying(wordhere);
  }
});
const saying = (data) => {
  const utterance = new SpeechSynthesisUtterance(data);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
};
const det = async (value) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/word/${value}`,
  );
  const data = await res.json();
  worddetails(data.data);
};
const worddetails = (data) => {
  const diolog = document.createElement("div");
  diolog.innerHTML = `<dialog id="my_modal" class="modal">
  <div class="modal-box shadow-xl max-w-lg rounded-2xl p-8 text-center">

    <h2 class="text-3xl font-bold mb-4 text-blue-600">
      ${data.word}
    </h2>

    <div class="space-y-3 text-gray-700">

      <p class="text-lg">
        <span class="font-semibold text-gray-900">Meaning:</span>
        ${data.meaning || "Not available"}
      </p>

      <p class="text-lg">
        <span class="font-semibold text-gray-900">Pronunciation:</span>
        ${data.pronunciation || "Not available"}
      </p>

      <p class="text-lg">
        <span class="font-semibold text-gray-900">Part of Speech:</span>
        ${data.partsOfSpeech || "Not available"}
      </p>

      <p class="text-lg">
        <span class="font-semibold text-gray-900">Synonyms:</span>
        ${data.synonyms?.join(", ") || "None"}
      </p>

      <p class="text-md text-gray-600 italic mt-4">
        "${data.sentence || "No example sentence available"}"
      </p>

    </div>

    <div class="modal-action justify-center mt-6">
      <form method="dialog">
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition duration-300">
          Close
        </button>
      </form>
    </div>

  </div>
</dialog>`;
  document.body.appendChild(diolog);
  const modal = diolog.querySelector("#my_modal");
  modal.show();
};
document.getElementById('searchw').addEventListener('keyup',(element)=>{
const value=element.target.value;
searcha(value)
})
const searcha=async(value="")=>{
  const res=await fetch(`https://openapi.programming-hero.com/api/words/all`)
  const data=await res.json();
    const filtered = data.data.filter((wordObj) =>
    wordObj.word.toLowerCase().includes(value.toLowerCase())
  );

  makingcard(filtered);
}
