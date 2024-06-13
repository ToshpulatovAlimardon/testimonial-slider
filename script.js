const testimonials = [
  {
    name: "- Cherise G",
    photoUrl: "images/1.jpg",
    text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!",
  },
  {
    name: "- Rosetta Q",
    photoUrl: "images/2.jpg",
    text: "I highly recommend apple. It has been so important for us as we continue to grow our company.",
  },
  {
    name: "- Constantine V",
    photoUrl: "images/3.jpg",
    text: "With apple, we have finally accomplished things that have been waiting forever to get done.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerHTML = text;
  usernameEl.innerHTML = name;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
