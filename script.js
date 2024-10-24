let shareBtn = document.querySelector("#share-btn");
let shareBox = document.querySelector(".share-box")
let closeBtn = document.querySelector("#close-btn");




shareBtn.addEventListener('click', function() {
    shareBox.style.display = 'flex';
})


closeBtn.addEventListener('click', function(){
    shareBox.style.display = 'none';
})