import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  console.log(swalButton)
  if (swalButton) { // protect other pages
      swal({
        title: "Success",
        text: "You have added a new cocktail!",
        icon: "success"
      });
  }
}

export { bindSweetAlertButtonDemo };
