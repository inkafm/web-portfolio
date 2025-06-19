//===== UNTUK BUAT ANIMASI SWIPE DARI LOGIN KE HALAMAN UTAMA =====//
function handleLogin(e) {
  e.preventDefault();
  const name = document.getElementById("your-name").value.trim();
  if (name) {
    document.getElementById("username").textContent = name;
    document.getElementById("mainContainer").style.transform = "translateX(-100vw)";
    document.querySelector("header").classList.remove("hidden");
  }
}

//===== SCROLL SECTIONS ACTIVE LINK ====//
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navigasiMenu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navigasiMenu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//===== SCROLL REVEAL ANIMATION =====//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home, .subprofil, .section-title, .skill-logo',{}); 
sr.reveal('.home-banner, .about, .subSkill, .skill-container',{delay: 400}); 
sr.reveal('.home-banner',{ interval: 200}); 
sr.reveal('.subSkill, .project-card, .form-wrapper',{interval: 200}); 

//===== VALIDASI & SEND MEGGASE DI FORM CONTACT =====//
document.getElementById("send").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const organization = document.getElementById("organization").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message").value;
  const now = new Date().toString();

  // Kalau valid, akan tampil di kotak sebelah kanan

    const output = `
    Current time: ${now}
    Name: ${name}
    Email: ${email}
    Organization: ${organization}
    Date of Birth: ${dob}
    Gender: ${gender.value}
    Message: ${message}
  `;
    document.getElementById("output").value = output;

});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
