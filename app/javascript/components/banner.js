import swal from 'sweetalert';

function bindSweetAlertButtonDemoCocktail() {
  const swalButtonCocktail = document.getElementById('sweet-alert-demo');
  console.log(swalButtonCocktail)
  if (swalButtonCocktail) { // protect other pages
      swal({
        title: "Success",
        text: "You have added a new cocktail!",
        icon: "success"
      });
  }
}

function bindSweetAlertButtonDemoIngredient() {
  const swalButtonIngredient = document.getElementById("add-ingredient");
  console.log(swalButtonIngredient)
  if (swalButtonIngredient) { // protect other pages
      swal({
        title: "Success",
        text: "You have added a new ingredient!",
        icon: "success"
      });
  }
}

function bindSweetAlertButtonDemoReview() {
  const swalButtonReview = document.getElementById("add-review");
  console.log(swalButtonReview)
  if (swalButtonReview) { // protect other pages
      swal({
        title: "Success",
        text: "You have added a new review!",
        icon: "success"
      });
  }
}

export { bindSweetAlertButtonDemoCocktail };
export { bindSweetAlertButtonDemoIngredient };
export { bindSweetAlertButtonDemoReview };
