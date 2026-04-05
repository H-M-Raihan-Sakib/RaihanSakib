const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        entry.target.classList.add("show");
        }
    });
    },{ threshold:0.2 });

    sections.forEach(section=>{
    observer.observe(section);
    });


document.getElementById("cf").addEventListener("click", function() {
    window.open("https://codeforces.com/profile/TechRS", "_blank");
});

document.getElementById("cc").addEventListener("click", function() {
    window.open("https://www.codechef.com/users/hm_sakib", "_blank");
});

document.getElementById("lc").addEventListener("click", function() {
    window.open("https://leetcode.com/u/hmraihansakib/", "_blank");
});

document.getElementById("duet").addEventListener("click", function() {
    window.open("https://toph.co/c/duet-inter-university-iupc-2025/standings", "_blank");
});

document.getElementById("aust").addEventListener("click", function() {
    window.open("https://toph.co/c/codeclash-oscillon-2025/standings", "_blank");
});

document.getElementById("mu").addEventListener("click", function() {
    window.open("https://toph.co/c/inter-university-mu-cse-fest-2025/standings", "_blank");
});

document.getElementById("iiuc").addEventListener("click", function() {
    window.open("https://toph.co/c/inter-university-iiuc-tech-fest-2025/standings", "_blank");
});

document.getElementById("club").addEventListener("click", function() {
    window.open("https://cstu.ac.bd/pages/cstu-computer-and-programming-club", "_blank");
});

document.getElementById("fb-btn").addEventListener("click", function() {
    window.open("https://www.facebook.com/amiTechRS", "_blank");
});

document.getElementById("fb-btn2").addEventListener("click", function() {
    window.open("https://www.facebook.com/amiTechRS", "_blank");
});

document.getElementById("li-btn").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/h-m-raihan-sakib/", "_blank");
});

document.getElementById("li-btn2").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/h-m-raihan-sakib/", "_blank");
});

document.getElementById("mail-btn").addEventListener("click", function() {
    window.open("mailto:hmraihansakib@gmail.com");
});

document.getElementById("gmail").addEventListener("click", function() {
    window.open("mailto:hmraihansakib@gmail.com");
});

document.getElementById("gh-btn").addEventListener("click", function() {
    window.open("https://github.com/H-M-Raihan-Sakib", "_blank");
});

document.getElementById("wp").addEventListener("click", function() {
    window.open("https://wa.me/8801938777890", "_blank");
});


document.getElementById("map").addEventListener("click", function() {
    window.open("https://maps.app.goo.gl/zM6nwVYjVhZi99HX6", "_blank");
});

document.getElementById("wanderlust").addEventListener("click", function() {
    window.open("https://wanderlust-l4ad.onrender.com/listings", "_blank");
});

document.getElementById("w-github").addEventListener("click", function() {
    window.open("https://github.com/H-M-Raihan-Sakib/Wanderlust", "_blank");
});

document.getElementById("f-gh").addEventListener("click", function() {
    window.open("https://github.com/H-M-Raihan-Sakib/FeastFast_Food-Delivery-App", "_blank");
});

document.getElementById("install_apk").addEventListener("click", function() {
    window.open("https://drive.usercontent.google.com/download?id=1g5qv_4xo_3pWgUbWafSKMvUIjtpwBev2&export=download&authuser=0&confirm=t&uuid=f55b4eed-32ba-4527-b601-5d906835325b&at=AGN2oQ15tOkbGg6NCqA-MOoyg2xA:1775406334735", "_blank");
});


document.getElementById("calc_live").addEventListener("click", function() {
    window.open("https://h-m-raihan-sakib.github.io/Calculator-E-commerce-Site/", "_blank");
});

document.getElementById("calc_gh").addEventListener("click", function() {
    window.open("https://github.com/H-M-Raihan-Sakib/Calculator-E-commerce-Site", "_blank");
});


(function(){
  emailjs.init("dlXf2lt-eexmmPNWT");
})();

const form = document.querySelector("#contact form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const fname = form.fname.value.trim();
  const lname = form.lname.value.trim();
  const phone = form.phone.value.trim();
  const subject = form.subject.value.trim();
  const email = form.email.value.trim();
  const msg = form.msg.value.trim();


  if (fname.length < 2) {
    alert("First name must be at least 2 characters");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Enter a valid email");
    return;
  }

  if (phone && phone.length < 7) {
    alert("Enter a valid phone number");
    return;
  }

  if (subject.length < 3) {
    alert("Subject too short");
    return;
  }

  if (msg.length < 10) {
    alert("Message must be at least 10 characters");
    return;
  }

  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.innerText = "Sending...";

  emailjs.sendForm("service_l63a1dm", "template_zjxztjp", form)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((err) => {
      console.log("ERROR DETAILS:", err);
      alert("❌ Failed to send message");
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerText = "Submit";
    });
});