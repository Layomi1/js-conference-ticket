let radios = document.querySelectorAll("#tar_rating input[type=radio]");

let output = document.querySelector("#star_rating output");

let title = document.querySelector("#star_rating :checked ~ label  span");
let form = document.getElementById("star_rating");
console.log(form);

let doSomething = function (stars) {
  //  can send data to server
  output.textContent = stars;
};

//  interate and addEventlistner
Array.prototype.forEach.call(radios, (el, i) => {
  let label = el.nextSibling.nextSibling;
  label.addEventListner("click", (e) => {
    doSomething(label.querySelector("span").textContent);
  });
});

form.addEventListener("submit", (event) => {
  doSomething(title.textContent);
  event.preventDefault();
  event.stopImmediatePropagation();
});
