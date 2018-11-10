import swal from 'sweetalert';

function deleteWarning() {
  const swalButtonDeleteIngredient = document.getElementById("delete");
  if (swalButtonDeleteIngredient) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this ingredient",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your ingredient has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your ingredient is safe");
      }
    });
  }
}

export { deleteWarning };
