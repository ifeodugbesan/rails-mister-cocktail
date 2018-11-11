import 'bootstrap';
import Typed from 'typed.js';
import { bindSweetAlertButtonDemoCocktail } from '../components/banner';
import { bindSweetAlertButtonDemoIngredient } from '../components/banner';
import { bindSweetAlertButtonDemoReview } from '../components/banner';
import { deleteWarning } from '../components/delete';

// TYPED.JS

let options = {
  strings: ["Add a cocktail..."],
  typeSpeed: 40,
  loop: true,
  backDelay: 5000
}

let typed = new Typed(".element", options);

// DELETE INGREDIENT CONFIRMATION

// document.getElementById("delete").addEventListener("click", (d) => {
//   Window.confirm()
//   // d.preventDefault();
// })

// SWEET ALERT CONFIRMATION

const form = document.querySelector("form");

if ((document.getElementById("add-ingredient") === null) && (document.getElementById("add-review") === null)) {
  const addCocktail = document.getElementById("sweet-alert-demo")

  addCocktail.addEventListener("click", (event) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

        bindSweetAlertButtonDemoCocktail();
        document.querySelector(".swal-button--confirm").addEventListener("click", () => {
          document.querySelector('form').submit()
        })
    })
  });
}

if ((document.getElementById("sweet-alert-demo") === null) && (document.getElementById("add-review") === null)) {
  const addIngredient = document.getElementById("add-ingredient")
  addIngredient.addEventListener("click", (event) => {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      bindSweetAlertButtonDemoIngredient();
      document.querySelector(".swal-button--confirm").addEventListener("click", () => {
        document.querySelector('form').submit()
      })
    })
  });
}

if ((document.getElementById("sweet-alert-demo") === null) && (document.getElementById("add-ingredient") === null)) {
  const addReview = document.getElementById("add-review")
  addReview.addEventListener("click", (event) => {
    document.querySelector("form").addEventListener("submit", (v) => {
      v.preventDefault();

      bindSweetAlertButtonDemoReview();
      document.querySelector(".swal-button--confirm").addEventListener("click", () => {
        document.querySelector('form').submit()
      })
    })
  });
}


// CARD ANIMATION
