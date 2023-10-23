console.log(document.getElementById("text").textContent);

btn.addEventListener('click',() => {
  setTimeout(function() {
    text.textContent = 'ボタンをクリックされました';
  }, 2000);
})


