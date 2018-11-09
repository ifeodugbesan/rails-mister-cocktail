import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal({
        title: "Success",
        text: "You have added a new cocktail!",
        icon: "success"
      });
    });
  }
}

export { bindSweetAlertButtonDemo };
