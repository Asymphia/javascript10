(function () {
  document.getElementById("ex1_button").addEventListener("click", () => {
    const content = document.getElementById("ex1_content");

    content.innerHTML = "";

    for (let i = 0; i <= 9; i++) {
      content.innerHTML += `${i} ${i !== 9 ? ", " : ""}`;
    }
  });
})();
