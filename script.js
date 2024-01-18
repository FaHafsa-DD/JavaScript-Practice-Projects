let displayBox = document.getElementById("display-box");
let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-txt");
let btnEl = document.getElementById("btn1");

btnEl.addEventListener("click", () => {
  if (qrText.value !== "") {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    displayBox.classList.add("show-img");
  }
  else{
    qrText.classList.add("error");
    setTimeout(() => {
        qrText.classList.remove("error"); // this code will remove the animation after 1000ms or 1s
    }, 1000);
  }
});
