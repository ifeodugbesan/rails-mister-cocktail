import 'bootstrap';
import Typed from 'typed.js';

var options = {
  strings: ["Add a cocktail..."],
  typeSpeed: 40,
  loop: true,
  backDelay: 5000
}

console.log("HELLO")

var typed = new Typed(".element", options);

import { bindSweetAlertButtonDemo } from '../components/banner';

const target = document.getElementById("sweet-alert-demo")

target.addEventListener("click", (event) => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    bindSweetAlertButtonDemo();
    document.querySelector(".swal-button--confirm").addEventListener("click", () => {
      document.querySelector('form').submit()
    })
  })
});


// const submit = document.querySelector("swal-button--confirm");

// submit.addEventListener("click", (event) => {

// })
