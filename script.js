(function () {
  /* zad 1 */
  document.getElementById("ex1_button").addEventListener("click", () => {
    const content = document.getElementById("ex1_content");

    content.innerHTML = "";

    for (let i = 0; i <= 9; i++) {
      content.innerHTML += `${i} ${i !== 9 ? ", " : ""}`;
    }
  });

  /* zad 2 */
  const ex2El = document.getElementById("ex2_text");
  const ex2Con = document.getElementById("ex2_content");

  ex2El.addEventListener("change", () => {
    ex2Con.innerHTML = "";

    if (ex2El.value.length !== 9) {
      ex2Con.innerHTML += "Długość musi być równa 9 <br />";
    }

    if (/[a-zA-Z]/.test(ex2El.value)) {
      ex2Con.innerHTML += "Numer nie może zawierać liter <br />";
    }

    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(ex2El.value)) {
      ex2Con.innerHTML += "Numer nie może zawierać znaków specjalnych <br />";
    }

    if (ex2El.value.length === 9) {
      ex2Con.innerHTML += "Numer jestpoprawny";
    }
  });
})();
