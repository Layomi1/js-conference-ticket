const form = document.querySelector("form");

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const image = document.querySelector("#image");
const field = document.querySelector(".field");
const errorMsg = document.querySelector(".image-error");
const emailErr = document.querySelector(".email-error");
const properInfo = document.querySelector(".proper");
const imgfield = document.querySelector(".field");

const userImg = document.querySelector(".user-upload");
const nameError = document.querySelector(".name-error");
const addressError = document.querySelector(".github-error");
console.log(addressError);

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (image.files.length > 0) {
    for (let i = 0; i <= files.length - 1; i++) {
      const imageSize = image.files.item(i).size;
      const file = Math.round(imageSize / 1024);
      if (file > 500) {
        properInfo.classList.add("hidden");
        errorMsg.classList.remove("hidden");
      } else {
        imgfield.classList.add("hidden");
        userImg.classList.remove("hidden");
      }
      console.log(image.files);
    }
  }
  if ((fullName.value = "")) {
    nameError.classList.remove("hidden");
  } else if (email.value == "" || !email.value.match(pattern)) {
    emailErr.classList.remove("hidden");
  } else if (image.files.length < 0) {
    properInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  } else if ((address.value = "")) {
    addressError.classList.remove("hidden");
  }
});
