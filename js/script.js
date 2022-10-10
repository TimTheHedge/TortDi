const burger_button = document.querySelector("#burger-button");
const header = document.querySelector("#header")



burger_button.addEventListener("click", popupOpen)

function popupOpen(e){
    e.preventDefault();
    header.classList.toggle("header-open");
}

burger_button.addEventListener("click", popupButtonAnim)

function popupButtonAnim(e){
    e.preventDefault();
    burger_button.classList.toggle("burger-active");
}