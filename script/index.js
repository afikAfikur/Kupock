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