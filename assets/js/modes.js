
window.addEventListener("DOMContentLoaded", (event) => {
  animate_text();
});



function animate_text() 
{
  let delay = 40,
      delay_start = 0,
      contents,
      letters,
      dotCount = 0;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
     
        elem.textContent += letter;
        if (letter === ':') {
          dotCount++
          if (dotCount === 5) {
            const image = document.querySelector(".img-skill")
              if (image) {
                image.classList.remove("hidden");
                  }
          }

        }
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}