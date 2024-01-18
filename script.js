const toastBox = document.getElementById("toast-box");
const btn = document.querySelectorAll("button");

btn.forEach((element) => {
  let successMsg = "Successfully submitted!";
  let errorMsg = "Please fix the error!";
  let invalidMsg = "Invalid input, try again.";
  element.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toastBox.appendChild(toast);
    switch (element.id) {
      case "btn1":
        toast.innerHTML = successMsg;
        toast.classList.add("success");
        break;
      case "btn2":
        toast.innerHTML = errorMsg;
        toast.classList.add("error");
        
        break;
      case "btn3":
        toast.innerHTML = invalidMsg;
        toast.classList.add("invalid");
        break;
    }
    setTimeout(() => {
      toast.remove(); //after six seconds the toast will be removed.
    }, 6000);
  });
});
