$(document).ready(function () {
  const PasswordLength = 8;
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "@#$~^&*()_=+{}[]></";
  const allchars = uppercaseLetters + lowercaseLetters + numbers + symbols;
  $("#btn").click(() => {
    let password = "";
    password +=
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password +=
      lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (PasswordLength > password.length) {
      password += allchars[Math.floor(Math.random() * allchars.length)];
      $("input").val(password);
    }
  });
});
