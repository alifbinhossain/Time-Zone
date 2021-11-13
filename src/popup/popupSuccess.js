import Swal from "sweetalert2";

const popupSuccess = (successType, falseLogout) => {
  let title = "";
  if (successType === "new" || falseLogout === false) {
    title = "Great! Your account has been successfully created.. ";
  } else if (successType === "removed") {
    title = "Successfully removed this order";
  } else if (successType === "delete") {
    title = "Successfully deleted this product";
  } else if (successType === "login") {
    title = "Congrats! Successfully logged in";
  } else if (successType === "reset") {
    title = "Please Check Your Email to reset your password";
  } else if (successType === "logout" && falseLogout) {
    title = "You are successfully logged out..";
  } else if (successType === "booked") {
    title = "Congrats! We've just received your order...👍";
  } else if (successType === "status") {
    title = "Successfully change this order status";
  } else if (successType === "new watch") {
    title = "Successfully added a new watch..⌚";
  } else if (successType === "create admin") {
    title = "Successfully created a new admin 😄";
  } else if (successType === "add review") {
    title = "Great! Thanks for your feedback...👍";
  }
  return Swal.fire({
    icon: "success",
    title: "<h3 style='color:#fff'>" + title + "</h3>",
    showConfirmButton: false,
    timer: 1500,
    padding: "1rem 2rem 3rem",
    background: "#3c4a49",
  });
};

export default popupSuccess;
