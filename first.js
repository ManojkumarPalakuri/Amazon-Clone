let modebtn = document.querySelector(".mode");
let body = document.querySelector("body");

let currmode = localStorage.getItem("mode") || "light";

if (currmode === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
} else {
  body.classList.add("light");
  body.classList.remove("dark");
}

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  localStorage.setItem("mode", currmode);
  console.log(currmode);
});
