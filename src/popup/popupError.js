import Swal from "sweetalert2";

const popupError = (message) => {
  return Swal.fire({
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default popupError;
