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
